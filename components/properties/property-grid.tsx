'use client';

import { useSelector } from 'react-redux';
import { PropertyCard } from './property-card';
import { RootState } from '@/lib/store';

export function PropertyGrid() {
  const { items, loading, error } = useSelector((state: RootState) => state.properties);

  if (loading) {
    return <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-[400px] bg-muted animate-pulse rounded-lg" />
      ))}
    </div>;
  }

  if (error) {
    return <div className="text-center text-destructive">{error}</div>;
  }

  if (items.length === 0) {
    return <div className="text-center text-muted-foreground">No properties found</div>;
  }

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}