'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { PropertyCard } from '@/components/properties/property-card';
import { properties } from '@/lib/data/properties';

export function FeaturedProperties() {
	const featuredProperties = properties.filter((property) => property.featured);

	return (
		<section className='py-16 bg-white dark:bg-background'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold mb-8'>Imóveis em Destaque</h2>
				<Carousel className='w-full'>
					<CarouselContent>
						{featuredProperties.map((property) => (
							<CarouselItem
								key={property.id}
								className='md:basis-1/2 lg:basis-1/3'
							>
								<PropertyCard property={property} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	);
}
