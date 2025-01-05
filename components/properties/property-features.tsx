import { Check } from 'lucide-react';

interface PropertyFeaturesProps {
  features: string[];
}

export function PropertyFeatures({ features }: PropertyFeaturesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {features.map((feature) => (
        <div key={feature} className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
            <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
          </div>
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
}