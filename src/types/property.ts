export interface Property {
  id: string | number;
  title: string;
  location: string;
  image: string;
  price: number;
  description: string;
  bedrooms: number;
  bathrooms: number;
  square_meters: number;
  features: string[];
  images: string[];
  is_featured: boolean;
  is_new: boolean;
  created_at: string;
  updated_at: string;
}
