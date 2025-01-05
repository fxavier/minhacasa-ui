export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  purpose: 'buy' | 'rent';
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  images: string[];
  features: string[];
  createdAt: string;
  updatedAt: string;
}