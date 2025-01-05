import { PropertySearch } from '@/components/property-search';
import { FeaturedProperties } from '@/components/home/featured-properties';
import { RecentProperties } from '@/components/home/recent-properties';
import { PropertyCard } from '@/components/properties/property-card';
import { properties } from '@/lib/data/properties';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-20 bg-[url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Encontre a Casa dos Seus Sonhos
            </h1>
            <p className="text-lg text-gray-200">
              Descubra o imóvel perfeito para o seu estilo de vida
            </p>
          </div>
          <PropertySearch />
        </div>
      </section>

      <FeaturedProperties />
      <RecentProperties />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Todos os Imóveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}