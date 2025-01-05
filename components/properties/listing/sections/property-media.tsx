'use client';

import { Control } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { ImagePlus, X } from 'lucide-react';
import { PropertyListingFormData } from '../schema';

interface PropertyMediaProps {
  control: Control<PropertyListingFormData>;
}

export function PropertyMedia({ control }: PropertyMediaProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Mídia</h2>
      
      <FormField
        control={control}
        name="images"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Fotos do Imóvel</FormLabel>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button
                type="button"
                variant="outline"
                className="h-32 border-dashed"
                onClick={() => {
                  // TODO: Implement image upload
                  console.log('Upload image');
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <ImagePlus className="h-8 w-8" />
                  <span className="text-sm">Adicionar Foto</span>
                </div>
              </Button>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}