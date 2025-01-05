import { properties } from '@/lib/data/properties';
import { Property } from '@/types/property';

export async function getProperties() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return properties;
}

export async function getFeaturedProperties() {
  const allProperties = await getProperties();
  return allProperties.filter(property => property.featured);
}

export async function getRecentProperties(limit = 6) {
  const allProperties = await getProperties();
  return [...allProperties]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
}

export async function getPropertyById(id: string): Promise<Property | undefined> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return properties.find(property => property.id === id);
}

export async function searchProperties(filters: {
  purpose?: 'buy' | 'rent';
  type?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  location?: string;
}) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  let filtered = [...properties];

  if (filters.purpose) {
    filtered = filtered.filter(p => p.purpose === filters.purpose);
  }

  if (filters.type) {
    filtered = filtered.filter(p => p.propertyType === filters.type);
  }

  if (filters.minPrice) {
    filtered = filtered.filter(p => p.price >= filters.minPrice!);
  }

  if (filters.maxPrice) {
    filtered = filtered.filter(p => p.price <= filters.maxPrice!);
  }

  if (filters.bedrooms) {
    filtered = filtered.filter(p => p.bedrooms >= filters.bedrooms!);
  }

  if (filters.bathrooms) {
    filtered = filtered.filter(p => p.bathrooms >= filters.bathrooms!);
  }

  if (filters.location) {
    const searchTerm = filters.location.toLowerCase();
    filtered = filtered.filter(p => 
      p.address.city.toLowerCase().includes(searchTerm) ||
      p.address.state.toLowerCase().includes(searchTerm) ||
      p.address.street.toLowerCase().includes(searchTerm)
    );
  }

  return filtered;
}