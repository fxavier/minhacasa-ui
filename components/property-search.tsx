'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { PropertyFilters } from '@/components/property-filters';

export function PropertySearch() {
	const [showFilters, setShowFilters] = useState(false);

	return (
		<div className='w-full max-w-4xl mx-auto space-y-4'>
			<div className='flex flex-col md:flex-row gap-4'>
				<div className='flex-1'>
					<Input
						placeholder='Busque por localização, tipo de imóvel ou palavra-chave...'
						className='w-full'
					/>
				</div>
				<Select defaultValue='buy'>
					<SelectTrigger className='w-[120px]'>
						<SelectValue placeholder='Finalidade' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='buy'>Comprar</SelectItem>
						<SelectItem value='rent'>Arrendar</SelectItem>
					</SelectContent>
				</Select>
				<Button className='bg-green-600 hover:bg-green-700'>
					<Search className='mr-2 h-4 w-4' /> Buscar
				</Button>
			</div>
			<div className='flex justify-between items-center'>
				<Button
					variant='link'
					onClick={() => setShowFilters(!showFilters)}
					className='text-green-600'
				>
					{showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
				</Button>
			</div>
			{showFilters && <PropertyFilters />}
		</div>
	);
}
