import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { PropertyDetails } from '@/components/properties/property-details';
import { getPropertyById } from '@/lib/api/properties';
import { properties } from '@/lib/data/properties';

interface PropertyPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const property = await getPropertyById(params.id);

  if (!property) {
    return {
      title: 'Imóvel não encontrado',
    };
  }

  return {
    title: `${property.title} | GreenEstate`,
    description: property.description,
  };
}

export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const property = await getPropertyById(params.id);

  if (!property) {
    notFound();
  }

  return <PropertyDetails property={property} />;
}