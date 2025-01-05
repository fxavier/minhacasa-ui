'use client';

import { Control } from 'react-hook-form';
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PropertyListingFormData } from '../schema';

interface PropertyLocationProps {
	control: Control<PropertyListingFormData>;
}

export function PropertyLocation({ control }: PropertyLocationProps) {
	return (
		<div className='space-y-4'>
			<h2 className='text-xl font-semibold'>Localização</h2>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<FormField
					control={control}
					name='address.street'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Rua</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className='grid grid-cols-2 gap-4'>
					<FormField
						control={control}
						name='address.number'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Número</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={control}
						name='address.complement'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Caixa Postal</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<FormField
					control={control}
					name='address.neighborhood'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Bairro</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={control}
					name='address.city'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Provincia</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* <FormField
          control={control}
          name="address.state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estado</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="address.zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CEP</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
			</div>
		</div>
	);
}
