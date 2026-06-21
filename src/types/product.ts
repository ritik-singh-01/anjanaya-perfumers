export interface Product {
  id: string;
  slug: string;
  name: string;
  nameHindi: string;
  category: ProductCategory;
  subcategory: string;
  description: string;
  descriptionHindi: string;
  shortDescription: string;
  ingredients?: string;
  howToUse?: string;
  price: number;
  mrp: number;
  discount: number;
  weight: string;
  images: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  tags: string[];
  festival?: string[];
  isFeatured: boolean;
  isNew: boolean;
  isBestseller: boolean;
  hsnCode?: string;
}

export type ProductCategory =
  | "pooja-samagri"
  | "curated-kits"
  | "perfumes-attars"
  | "combo-offers"
  | "temple-bulk"
  | "brass-idols"
  | "jap-mala"
  | "rudraksha"
  | "astro-products"
  | "gifting";

export interface Category {
  id: ProductCategory;
  name: string;
  nameHindi: string;
  description: string;
  image: string;
  productCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FilterState {
  category: ProductCategory | null;
  priceRange: [number, number];
  festival: string | null;
  sortBy: "featured" | "price-low" | "price-high" | "newest" | "rating";
  searchQuery: string;
}

export interface SiteConfig {
  name: string;
  nameHindi: string;
  tagline: string;
  taglineHindi: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  addressHindi: string;
  gst: string;
  freeShippingAbove: number;
  codCharge: number;
}
