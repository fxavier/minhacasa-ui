'use client';

import { Slider } from '@/components/ui/slider';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

export function PropertyFilters() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 border rounded-lg bg-card'>
			<div className='space-y-2'>
				<label className='text-sm font-medium'>Faixa de Preço</label>
				<Slider
					defaultValue={[0, 1000000]}
					max={1000000}
					step={1000}
					className='w-full'
				/>
			</div>
			<div className='space-y-2'>
				<label className='text-sm font-medium'>Tipo de Imóvel</label>
				<Select>
					<SelectTrigger>
						<SelectValue placeholder='Selecione o tipo' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='house'>Vivenda</SelectItem>
						<SelectItem value='apartment'>Apartamento</SelectItem>
						<SelectItem value='condo'>Condomínio</SelectItem>
						<SelectItem value='townhouse'>Escritório</SelectItem>
						<SelectItem value='land'>Terreno</SelectItem>
						<SelectItem value='farm'>Armazém</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className='space-y-2'>
				<label className='text-sm font-medium'>Quartos</label>
				<Select>
					<SelectTrigger>
						<SelectValue placeholder='Nº de quartos' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='1'>1+</SelectItem>
						<SelectItem value='2'>2+</SelectItem>
						<SelectItem value='3'>3+</SelectItem>
						<SelectItem value='4'>4+</SelectItem>
						<SelectItem value='5'>5+</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className='space-y-2'>
				<label className='text-sm font-medium'>Banheiros</label>
				<Select>
					<SelectTrigger>
						<SelectValue placeholder='Nº de banheiros' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='1'>1+</SelectItem>
						<SelectItem value='2'>2+</SelectItem>
						<SelectItem value='3'>3+</SelectItem>
						<SelectItem value='4'>4+</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
}
