export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  section: 'popular' | 'latest' | 'wearables' | 'trending';
}

export const PRODUCTS: Product[] = [
  // Popular Products (Clothing)
  {
    id: 'p1',
    name: 'Classic White Tee',
    category: 'T-Shirts',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400',
    section: 'popular',
  },
  {
    id: 'p2',
    name: 'Urban Black Hoodie',
    category: 'Hoodies',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=400',
    section: 'popular',
  },
  {
    id: 'p3',
    name: 'Slim Fit Denim',
    category: 'Jeans',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=400',
    section: 'popular',
  },
  {
    id: 'p4',
    name: 'Utility Cargo Pants',
    category: 'Jeans',
    // image: 'https://images.unsplash.com/photo-1624373666563-5475d6ba03f2?auto=format&fit=crop&q=80&w=400',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=400',
    section: 'popular',
  },
  {
    id: 'p5',
    name: 'Denim Trucker Jacket',
    category: 'Jackets',
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=400',
    section: 'popular',
  },
  {
    id: 'p6',
    name: 'Oxford Button Down',
    category: 'Shirts',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400',
    section: 'popular',
  },

  // Latest Arrivals
  {
    id: 'l1',
    name: 'Tech Windbreaker',
    category: 'Jackets',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=400',
    section: 'latest',
  },
  {
    id: 'l2',
    name: 'Graphic Street Tee',
    category: 'T-Shirts',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=400',
    section: 'latest',
  },
  {
    id: 'l3',
    name: 'Oversized Flannel',
    category: 'Shirts',
    image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&q=80&w=400',
    section: 'latest',
  },
  {
    id: 'l4',
    name: 'Essential Grey Hoodie',
    category: 'Hoodies',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=400',
    section: 'latest',
  },
  {
    id: 'l5',
    name: 'Straight Leg Chinos',
    category: 'Jeans',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=400',
    section: 'latest',
  },
  {
    id: 'l6',
    name: 'Bomber Jacket',
    category: 'Jackets',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400',
    section: 'latest',
  },

  // Featured Wearables
  {
    id: 'w1',
    name: 'Urban Runner Pro',
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400',
    section: 'wearables',
  },
  {
    id: 'w2',
    name: 'Midnight Fragrance',
    category: 'Perfumes',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=400',
    section: 'wearables',
  },
  {
    id: 'w3',
    name: 'Chronograph Silver',
    category: 'Watches',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=400',
    section: 'wearables',
  },
  {
    id: 'w4',
    name: 'Street Snapback',
    category: 'Caps',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=400',
    section: 'wearables',
  },
  {
    id: 'w5',
    name: 'Leather Minimalist Belt',
    category: 'Accessories',
    // image: 'https://images.unsplash.com/photo-1624222247344-550fbadcd973?auto=format&fit=crop&q=80&w=400',
    image: 'https://images.unsplash.com/photo-1664285612706-b32633c95820?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    section: 'wearables',
  },
  {
    id: 'w6',
    name: 'Retro High-Tops',
    category: 'Sneakers',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=400',
    section: 'wearables',
  },

  // Trending Styles
  {
    id: 't1',
    name: 'Neon Windbreaker',
    category: 'Jackets',
    image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&q=80&w=400',
    section: 'trending',
  },
  {
    id: 't2',
    name: 'Distressed Overshirt',
    category: 'Shirts',
    image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&q=80&w=400',
    section: 'trending',
  },
  {
    id: 't3',
    name: 'Cyberpunk Sneakers',
    category: 'Sneakers',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=400',
    section: 'trending',
  },
  {
    id: 't4',
    name: 'Reflective Joggers',
    category: 'Joggers',
    // image: 'https://images.unsplash.com/photo-1624373666563-5475d6ba03f2?auto=format&fit=crop&q=80&w=400',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=400',
    section: 'trending',
  },
  {
    id: 't5',
    name: 'Smart Tech Watch',
    category: 'Watches',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400',
    section: 'trending',
  },
];

export const COLLECTIONS = [
  {
    title: 'Streetwear',
    // image: 'https://images.unsplash.com/photo-1523381235211-8518ad68354f?auto=format&fit=crop&q=80&w=1200',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400',
    tagline: 'Urban aesthetics for the bold.',
  },
  {
    title: 'Casual Wear',
    // image: 'https://images.unsplash.com/photo-1488161628813-244768e242c4?auto=format&fit=crop&q=80&w=1200',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=400',
    tagline: 'Comfort meets style.',
  },
  {
    title: 'Premium Wearables',
    image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=1200',
    tagline: 'The finishing touch.',
  },
];

export const INSPIRATION = [
  {
    title: 'Summer Street Style',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Urban Exploration',
    // image: 'https://images.unsplash.com/photo-1529139513065-07b2c2390598?auto=format&fit=crop&q=80&w=800',
    image: 'https://plus.unsplash.com/premium_photo-1661398662907-b08131fede49?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Minimalist Essentials',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Nightlife Vibes',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800',
  },
];
