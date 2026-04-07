import { v4 as uuidv4 } from 'uuid';

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  location: string;
  address: string;
  image: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  description: string;
  openTime: string;
  closeTime: string;
  tables: Table[];
  reviews: Review[];
  availableSlots: TimeSlot[];
}

export interface Table {
  id: string;
  number: number;
  capacity: number;
  location: 'window' | 'center' | 'booth' | 'bar' | 'patio' | 'private';
  description: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface Booking {
  id: string;
  restaurantId: string;
  restaurantName: string;
  tableId: string;
  tableNumber: number;
  tableLocation: string;
  userId: string;
  userName: string;
  userEmail: string;
  date: string;
  time: string;
  partySize: number;
  specialRequests: string;
  allergies: string[];
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

export const ALLERGY_OPTIONS = [
  'Gluten',
  'Dairy',
  'Nuts',
  'Peanuts',
  'Shellfish',
  'Fish',
  'Soy',
  'Eggs',
  'Sesame',
  'Wheat',
  'Tree Nuts',
  'Mustard',
  'Celery',
  'Lupin',
  'Molluscs',
  'Sulphites',
];

export const TABLE_LOCATIONS: Table['location'][] = [
  'window',
  'center',
  'booth',
  'bar',
  'patio',
  'private',
];

export const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const times = [
    '11:30', '12:00', '12:30', '13:00', '13:30', '14:00',
    '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
  ];
  times.forEach(time => {
    slots.push({ time, available: Math.random() > 0.3 });
  });
  return slots;
};

const generateTables = (): Table[] => [
  { id: uuidv4(), number: 1, capacity: 2, location: 'window', description: 'Romantic window seat with street view' },
  { id: uuidv4(), number: 2, capacity: 4, location: 'center', description: 'Central table, great for groups' },
  { id: uuidv4(), number: 3, capacity: 6, location: 'booth', description: 'Cozy private booth' },
  { id: uuidv4(), number: 4, capacity: 2, location: 'bar', description: 'Bar seating for couples' },
  { id: uuidv4(), number: 5, capacity: 8, location: 'private', description: 'Private dining room' },
  { id: uuidv4(), number: 6, capacity: 4, location: 'patio', description: 'Outdoor patio seating' },
  { id: uuidv4(), number: 7, capacity: 2, location: 'window', description: 'Garden view window table' },
  { id: uuidv4(), number: 8, capacity: 4, location: 'center', description: 'Main dining area center table' },
];

const generateReviews = (restaurantName: string): Review[] => [
  {
    id: uuidv4(),
    userId: 'u1',
    userName: 'Sarah M.',
    userAvatar: 'https://via.placeholder.com/40',
    rating: 5,
    comment: `Absolutely amazing experience at ${restaurantName}! The food was exceptional and the service was impeccable.`,
    date: '2024-06-15',
  },
  {
    id: uuidv4(),
    userId: 'u2',
    userName: 'James R.',
    userAvatar: 'https://via.placeholder.com/40',
    rating: 4,
    comment: 'Great ambiance and delicious food. Will definitely come back!',
    date: '2024-06-10',
  },
  {
    id: uuidv4(),
    userId: 'u3',
    userName: 'Emily T.',
    userAvatar: 'https://via.placeholder.com/40',
    rating: 5,
    comment: 'One of the best dining experiences I have had. Highly recommend!',
    date: '2024-06-05',
  },
  {
    id: uuidv4(),
    userId: 'u4',
    userName: 'Michael B.',
    userAvatar: 'https://via.placeholder.com/40',
    rating: 4,
    comment: 'Wonderful food and great service. The pasta was perfect.',
    date: '2024-05-28',
  },
];

export const RESTAURANTS: Restaurant[] = [
  {
    id: 'rest-001',
    name: 'La Tierra',
    cuisine: 'Mexican',
    location: 'New York, NY',
    address: '123 Fifth Avenue, New York, NY 10001',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    rating: 4.8,
    reviewCount: 342,
    priceRange: '$$$',
    description: 'Authentic Mexican cuisine with a modern twist. Experience the flavors of Mexico in the heart of New York.',
    openTime: '11:30',
    closeTime: '22:00',
    tables: generateTables(),
    reviews: generateReviews('La Tierra'),
    availableSlots: generateTimeSlots(),
  },
  {
    id: 'rest-002',
    name: 'Olive Garden',
    cuisine: 'Italian',
    location: 'Los Angeles, CA',
    address: '456 Sunset Blvd, Los Angeles, CA 90028',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
    rating: 4.5,
    reviewCount: 218,
    priceRange: '$$',
    description: 'Classic Italian recipes passed down through generations. Fresh pasta made daily.',
    openTime: '12:00',
    closeTime: '22:30',
    tables: generateTables(),
    reviews: generateReviews('Olive Garden'),
    availableSlots: generateTimeSlots(),
  },
  {
    id: 'rest-003',
    name: 'Sakura Sushi',
    cuisine: 'Japanese',
    location: 'Chicago, IL',
    address: '789 Michigan Ave, Chicago, IL 60611',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800',
    rating: 4.9,
    reviewCount: 567,
    priceRange: '$$$$',
    description: 'Premium omakase and traditional Japanese cuisine. Flown-in fish daily from Tokyo.',
    openTime: '12:00',
    closeTime: '22:00',
    tables: generateTables(),
    reviews: generateReviews('Sakura Sushi'),
    availableSlots: generateTimeSlots(),
  },
  {
    id: 'rest-004',
    name: 'The Steakhouse',
    cuisine: 'American',
    location: 'Houston, TX',
    address: '321 Main St, Houston, TX 77002',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800',
    rating: 4.6,
    reviewCount: 433,
    priceRange: '$$$$',
    description: 'Premium aged steaks and classic American sides. The best cuts money can buy.',
    openTime: '17:00',
    closeTime: '23:00',
    tables: generateTables(),
    reviews: generateReviews('The Steakhouse'),
    availableSlots: generateTimeSlots(),
  },
  {
    id: 'rest-005',
    name: 'Spice Route',
    cuisine: 'Indian',
    location: 'San Francisco, CA',
    address: '654 Market St, San Francisco, CA 94105',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800',
    rating: 4.7,
    reviewCount: 289,
    priceRange: '$$$',
    description: 'Authentic Indian cuisine from various regions. Bold spices and rich flavors.',
    openTime: '11:30',
    closeTime: '22:00',
    tables: generateTables(),
    reviews: generateReviews('Spice Route'),
    availableSlots: generateTimeSlots(),
  },
  {
    id: 'rest-006',
    name: 'Le Petit Bistro',
    cuisine: 'French',
    location: 'Miami, FL',
    address: '987 Ocean Dr, Miami, FL 33139',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    rating: 4.4,
    reviewCount: 156,
    priceRange: '$$$',
    description: 'Classic French cuisine with ocean views. Croissants baked fresh every morning.',
    openTime: '08:00',
    closeTime: '22:00',
    tables: generateTables(),
    reviews: generateReviews('Le Petit Bistro'),
    availableSlots: generateTimeSlots(),
  },
];

export const MOCK_BOOKINGS: Booking[] = [
  {
    id: uuidv4(),
    restaurantId: 'rest-001',
    restaurantName: 'La Tierra',
    tableId: RESTAURANTS[0].tables[0].id,
    tableNumber: 1,
    tableLocation: 'window',
    userId: 'user-001',
    userName: 'Alice Johnson',
    userEmail: 'alice@example.com',
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    partySize: 2,
    specialRequests: 'Anniversary dinner, please decorate the table',
    allergies: ['Gluten', 'Dairy'],
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    restaurantId: 'rest-001',
    restaurantName: 'La Tierra',
    tableId: RESTAURANTS[0].tables[1].id,
    tableNumber: 2,
    tableLocation: 'center',
    userId: 'user-002',
    userName: 'Bob Smith',
    userEmail: 'bob@example.com',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    partySize: 4,
    specialRequests: '',
    allergies: ['Nuts'],
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    restaurantId: 'rest-001',
    restaurantName: 'La Tierra',
    tableId: RESTAURANTS[0].tables[2].id,
    tableNumber: 3,
    tableLocation: 'booth',
    userId: 'user-003',
    userName: 'Carol Davis',
    userEmail: 'carol@example.com',
    date: new Date().toISOString().split('T')[0],
    time: '18:30',
    partySize: 3,
    specialRequests: 'Vegetarian menu please',
    allergies: [],
    status: 'pending',
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    restaurantId: 'rest-001',
    restaurantName: 'La Tierra',
    tableId: RESTAURANTS[0].tables[4].id,
    tableNumber: 5,
    tableLocation: 'private',
    userId: 'user-004',
    userName: 'David Wilson',
    userEmail: 'david@example.com',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    partySize: 8,
    specialRequests: 'Business dinner, need projector',
    allergies: ['Shellfish', 'Fish'],
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  },
];
