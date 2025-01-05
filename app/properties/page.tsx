import { Metadata } from 'next';
import { PropertyList } from '@/components/properties/property-list';
import { PropertyFilters } from '@/components/property-filters';

export const metadata: Metadata = {
  title: 'Imóveis | GreenEstate',
  description: 'Encontre o imóvel perfeito para você',
};

export default function PropertiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Imóveis Disponíveis</h1>
      <div className="mb-8">
        <PropertyFilters />
      </div>
      <PropertyList />
    </div>
  );
}