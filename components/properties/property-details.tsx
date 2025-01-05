'use client';

import { Bath, Bed, Home, MapPin, Ruler } from 'lucide-react';
import { Property } from '@/types/property';
import { formatPrice } from '@/lib/utils';
import { PropertyContactForm } from './property-contact-form';
import { PropertyGallery } from './property-gallery';
import { PropertyFeatures } from './property-features';

interface PropertyDetailsProps {
  property: Property;
}

export function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <PropertyGallery images={property.images} title={property.title} />
          
          <div className="mt-8">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold">{property.title}</h1>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">
                  {formatPrice(property.price)}
                </p>
                <p className="text-muted-foreground">
                  {property.purpose === 'buy' ? 'Venda' : 'Aluguel'}
                </p>
              </div>
            </div>
            
            <div className="flex items-center text-muted-foreground mb-6">
              <MapPin className="h-5 w-5 mr-2" />
              <p>
                {property.address.street}, {property.address.city}, {property.address.state} {property.address.zipCode}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="flex items-center p-4 bg-muted rounded-lg">
                <Bed className="h-5 w-5 mr-2" />
                <div>
                  <p className="text-sm text-muted-foreground">Quartos</p>
                  <p className="font-semibold">{property.bedrooms}</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-muted rounded-lg">
                <Bath className="h-5 w-5 mr-2" />
                <div>
                  <p className="text-sm text-muted-foreground">Banheiros</p>
                  <p className="font-semibold">{property.bathrooms}</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-muted rounded-lg">
                <Ruler className="h-5 w-5 mr-2" />
                <div>
                  <p className="text-sm text-muted-foreground">Área</p>
                  <p className="font-semibold">{property.area}m²</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-muted rounded-lg">
                <Home className="h-5 w-5 mr-2" />
                <div>
                  <p className="text-sm text-muted-foreground">Tipo</p>
                  <p className="font-semibold">{property.propertyType}</p>
                </div>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Descrição</h2>
              <p className="text-muted-foreground">{property.description}</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Características</h2>
              <PropertyFeatures features={property.features} />
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Interessado?</h3>
              <PropertyContactForm propertyId={property.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}