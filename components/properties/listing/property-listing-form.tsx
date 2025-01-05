'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { propertyListingSchema } from './schema';
import { PropertyBasicInfo } from './sections/property-basic-info';
import { PropertyDetails } from './sections/property-details';
import { PropertyLocation } from './sections/property-location';
import { PropertyMedia } from './sections/property-media';
import { PropertyFeatures } from './sections/property-features';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

// Add type for the form data
type PropertyFormData = z.infer<typeof propertyListingSchema>;

export function PropertyListingForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const router = useRouter();
	const { toast } = useToast();

	const form = useForm<PropertyFormData>({
		resolver: zodResolver(propertyListingSchema),
		defaultValues: {
			title: '',
			description: '',
			price: '',
			purpose: 'sell',
			propertyType: '',
			bedrooms: '',
			bathrooms: '',
			area: '',
			address: {
				street: '',
				number: '',
				complement: '',
				neighborhood: '',
				city: '',
				state: '',
				zipCode: '',
			},
			features: [] as string[],
			images: [] as string[],
		},
	});

	async function onSubmit(data: PropertyFormData) {
		setIsSubmitting(true);
		try {
			// TODO: Implement property submission
			console.log('Form data:', data);
			toast({
				title: 'Imóvel anunciado com sucesso!',
				description: 'Seu anúncio será revisado e publicado em breve.',
			});
			router.push('/properties');
		} catch (error) {
			toast({
				title: 'Erro ao anunciar imóvel',
				description: 'Tente novamente mais tarde.',
				variant: 'destructive',
			});
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<div className='space-y-8'>
					<PropertyBasicInfo control={form.control} />
					<PropertyDetails control={form.control} />
					<PropertyLocation control={form.control} />
					<PropertyMedia control={form.control} />
					<PropertyFeatures control={form.control} />
				</div>

				<div className='flex justify-end space-x-4'>
					<Button
						type='button'
						variant='outline'
						onClick={() => router.back()}
						disabled={isSubmitting}
					>
						Cancelar
					</Button>
					<Button
						type='submit'
						className='bg-green-600 hover:bg-green-700'
						disabled={isSubmitting}
					>
						{isSubmitting ? 'Enviando...' : 'Publicar Anúncio'}
					</Button>
				</div>
			</form>
		</Form>
	);
}
