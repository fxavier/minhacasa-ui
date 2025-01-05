'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropertyCard } from './property-card';
import { PropertyListSkeleton } from './property-list-skeleton';
import { RootState } from '@/lib/store';
import { setProperties, setLoading, setError } from '@/lib/features/properties/propertiesSlice';
import { getProperties } from '@/lib/api/properties';

export function PropertyList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state: RootState) => state.properties);

  useEffect(() => {
    async function loadProperties() {
      try {
        dispatch(setLoading(true));
        const data = await getProperties();
        dispatch(setProperties(data));
      } catch (err) {
        dispatch(setError('Failed to load properties'));
      } finally {
        dispatch(setLoading(false));
      }
    }

    loadProperties();
  }, [dispatch]);

  if (loading) {
    return <PropertyListSkeleton />;
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <p className="text-destructive">{error}</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-muted-foreground">Nenhum imóvel encontrado</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}