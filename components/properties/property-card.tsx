'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Bath, Bed, Home, MapPin, Ruler } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Property } from '@/types/property';
import { formatPrice } from '@/lib/utils';

interface PropertyCardProps {
	property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
	return (
		<Card className='overflow-hidden hover:shadow-lg transition-shadow'>
			<div className='relative h-48 w-full'>
				<Image
					src={property.images[0]}
					alt={property.title}
					fill
					className='object-cover'
				/>
				<div className='absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded'>
					{property.purpose === 'buy' ? 'Venda' : 'Arrendamento'}
				</div>
			</div>
			<CardContent className='p-4'>
				<div className='flex justify-between items-start mb-2'>
					<h3 className='text-lg font-semibold line-clamp-1'>
						{property.title}
					</h3>
					<p className='text-green-600 font-bold'>
						{formatPrice(property.price)}
					</p>
				</div>
				<div className='flex items-center text-muted-foreground mb-2'>
					<MapPin className='h-4 w-4 mr-1' />
					<p className='text-sm line-clamp-1'>
						{property.address.street}, {property.address.city}
					</p>
				</div>
				<div className='grid grid-cols-4 gap-2 mt-4'>
					<div className='flex items-center'>
						<Bed className='h-4 w-4 mr-1' />
						<span className='text-sm'>{property.bedrooms}</span>
					</div>
					<div className='flex items-center'>
						<Bath className='h-4 w-4 mr-1' />
						<span className='text-sm'>{property.bathrooms}</span>
					</div>
					<div className='flex items-center'>
						<Ruler className='h-4 w-4 mr-1' />
						<span className='text-sm'>{property.area}m²</span>
					</div>
					<div className='flex items-center'>
						<Home className='h-4 w-4 mr-1' />
						<span className='text-sm'>{property.propertyType}</span>
					</div>
				</div>
			</CardContent>
			<CardFooter className='p-4 pt-0'>
				<Link
					href={`/properties/${property.id}`}
					className='w-full text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded transition-colors'
				>
					Ver Detalhes
				</Link>
			</CardFooter>
		</Card>
	);
}
