import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'google-client-id-placeholder',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'google-client-secret-placeholder',
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || 'facebook-client-id-placeholder',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || 'facebook-client-secret-placeholder',
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        role: { label: 'Role', type: 'text' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const demoUsers = [
          {
            id: 'user-001',
            email: 'consumer@maiz.com',
            password: 'password123',
            name: 'John Consumer',
            role: 'consumer',
            image: 'https://via.placeholder.com/40',
          },
          {
            id: 'rest-staff-001',
            email: 'restaurant@maiz.com',
            password: 'password123',
            name: 'Maria Chef',
            role: 'restaurant',
            restaurantId: 'rest-001',
            restaurantName: 'La Tierra',
            image: 'https://via.placeholder.com/40',
          },
        ];

        const user = demoUsers.find(
          (u) => u.email === credentials.email && u.password === credentials.password
        );

        if (user) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
            role: user.role,
            restaurantId: 'restaurantId' in user ? user.restaurantId : undefined,
            restaurantName: 'restaurantName' in user ? user.restaurantName : undefined,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role || 'consumer';
        token.restaurantId = (user as any).restaurantId;
        token.restaurantName = (user as any).restaurantName;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.sub;
        (session.user as any).role = token.role;
        (session.user as any).restaurantId = token.restaurantId;
        (session.user as any).restaurantName = token.restaurantName;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
  secret: process.env.NEXTAUTH_SECRET || 'maiz-super-secret-key-2024',
  session: {
    strategy: 'jwt',
  },
};
