'use client';

import { Control } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { PropertyListingFormData } from '../schema';

interface PropertyFeaturesProps {
  control: Control<PropertyListingFormData>;
}

const FEATURES = [
  { id: 'pool', label: 'Piscina' },
  { id: 'garage', label: 'Garagem' },
  { id: 'garden', label: 'Jardim' },
  { id: 'security', label: 'Segurança 24h' },
  { id: 'gym', label: 'Academia' },
  { id: 'furnished', label: 'Mobiliado' },
  { id: 'pets', label: 'Aceita Pets' },
  { id: 'balcony', label: 'Varanda' },
  { id: 'elevator', label: 'Elevador' },
  { id: 'barbecue', label: 'Churrasqueira' },
  { id: 'laundry', label: 'Lavanderia' },
  { id: 'storage', label: 'Depósito' },
];

export function PropertyFeatures({ control }: PropertyFeaturesProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Características</h2>
      
      <FormField
        control={control}
        name="features"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Selecione as características do imóvel</FormLabel>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {FEATURES.map((feature) => (
                <div key={feature.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={feature.id}
                    checked={field.value?.includes(feature.id)}
                    onCheckedChange={(checked) => {
                      const updatedFeatures = checked
                        ? [...(field.value || []), feature.id]
                        : field.value?.filter((id) => id !== feature.id) || [];
                      field.onChange(updatedFeatures);
                    }}
                  />
                  <label
                    htmlFor={feature.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {feature.label}
                  </label>
                </div>
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}