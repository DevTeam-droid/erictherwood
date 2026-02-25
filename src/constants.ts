export interface Property {
  id: string;
  info: string;
  neighborhood: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  type: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface Neighborhood {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  lifestyle: string;
  imageUrl: string;
}

export const PROPERTIES: Property[] = [
  {
    id: '1',
    info: 'Brand-new construction home',
    neighborhood: 'Just outside of Dallas',
    price: 250000,
    beds: 3,
    baths: 2,
    sqft: 0,
    imageUrl: 'fl1.jpg',
    type: '✔️ First-time buyers  ✔️ Commuters  ✔️ Remote or hybrid workers',
    
  },
  {
    id: '2',
    info: 'Brand-New Construction',
    neighborhood: 'Just 35 minutes east of Dallas, TX',
    price: 349000,
    beds: 4,
    baths: 3,
    sqft: 0,
    imageUrl: 'src/assets/images/fl2.jpg',
    type: '✔️ First-time buyers ✔️ Remote or hybrid workers',
  },
  {
    id: '3',
    info: 'New Homes with low out-of-pocket options ',
    neighborhood: 'Near Dallas, TX',
    price: 185000,
    beds: 3,
    baths: 2,
    sqft: 0,
    imageUrl: 'src/assets/images/fl3.jpg',
    type: '✔️ Single ✔️ Family',
  },
  /*{
    id: '4',
    info: '1504 Main St',
    neighborhood: 'Downtown Dallas',
    price: 525000,
    beds: 1,
    baths: 1.5,
    sqft: 1100,
    imageUrl: 'https://picsum.photos/seed/dallas-loft-interior/800/600',
    type: 'Condo',
  },
  {
    id: '5',
    info: '3302 Swiss Ave',
    neighborhood: 'Deep Ellum',
    price: 715000,
    beds: 3,
    baths: 2.5,
    sqft: 2400,
    imageUrl: 'https://picsum.photos/seed/dallas-townhome-modern/800/600',
    type: 'Townhome',
  },
  {
    id: '6',
    info: '5621 Lakewood Blvd',
    neighborhood: 'Lakewood',
    price: 980000,
    beds: 4,
    baths: 3,
    sqft: 2800,
    imageUrl: 'https://picsum.photos/seed/dallas-family-estate/800/600',
    type: 'Single Family',
  },*/
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah & Mark J.',
    text: 'Eric made our first home buying experience in Dallas absolutely seamless. His knowledge of the Highland Park area is unmatched.',
    rating: 5,
  },
  {
    id: '2',
    name: 'David L.',
    text: 'I needed to sell my condo in Uptown quickly for a relocation. Eric had it staged, listed, and under contract in 4 days above asking!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Jennifer P.',
    text: 'The Dallas First-Time Buyer Guide Eric provided was a lifesaver. We felt so prepared throughout the entire process.',
    rating: 5,
  },
];

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    id: 'hp',
    name: 'Highland Park',
    description: 'Prestigious area with tree-lined streets and top-rated schools.',
    priceRange: '$1M - $10M+',
    lifestyle: 'Luxury, Family-Oriented',
    imageUrl: 'https://picsum.photos/seed/highland-park-dallas/800/600',
  },
  {
    id: 'ut',
    name: 'Uptown',
    description: 'Walkable urban district with high-rise living and vibrant nightlife.',
    priceRange: '$400K - $2M',
    lifestyle: 'Urban, Professional',
    imageUrl: 'https://picsum.photos/seed/uptown-dallas-skyline/800/600',
  },
  {
    id: 'oc',
    name: 'Oak Cliff / Kessler Park',
    description: 'Historic charm with rolling hills and a creative community feel.',
    priceRange: '$350K - $1.5M',
    lifestyle: 'Eclectic, Historic',
    imageUrl: 'https://picsum.photos/seed/oak-cliff-dallas/800/600',
  },
];

export const PARTNER_LOGOS = [
  { name: 'Dallas Morning News', logo: 'https://picsum.photos/seed/logo1/200/100?grayscale' },
  { name: 'Zillow Premier Agent', logo: 'https://picsum.photos/seed/logo2/200/100?grayscale' },
  { name: 'Realtor.com', logo: 'https://picsum.photos/seed/logo3/200/100?grayscale' },
  { name: 'Forbes Real Estate', logo: 'https://picsum.photos/seed/logo4/200/100?grayscale' },
  { name: 'Modern Luxury Dallas', logo: 'https://picsum.photos/seed/logo5/200/100?grayscale' },
  { name: 'Luxury Portfolio Int.', logo: 'https://picsum.photos/seed/logo6/200/100?grayscale' },
];
