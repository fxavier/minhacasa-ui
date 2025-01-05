import { Metadata } from 'next';
import { PropertyListingForm } from '@/components/properties/listing/property-listing-form';

export const metadata: Metadata = {
  title: 'Anunciar Imóvel | GreenEstate',
  description: 'Anuncie seu imóvel na GreenEstate',
};

export default function NewPropertyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Anunciar Imóvel</h1>
        <p className="text-muted-foreground mb-8">
          Preencha o formulário abaixo com os detalhes do seu imóvel.
        </p>
        <PropertyListingForm />
      </div>
    </div>
  );
}