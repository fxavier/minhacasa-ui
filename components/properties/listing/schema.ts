import { z } from 'zod';

export const propertyListingSchema = z.object({
  title: z.string().min(10, 'Título deve ter pelo menos 10 caracteres'),
  description: z.string().min(50, 'Descrição deve ter pelo menos 50 caracteres'),
  price: z.string().min(1, 'Preço é obrigatório'),
  purpose: z.enum(['sell', 'rent']),
  propertyType: z.string().min(1, 'Tipo de imóvel é obrigatório'),
  bedrooms: z.string().min(1, 'Número de quartos é obrigatório'),
  bathrooms: z.string().min(1, 'Número de banheiros é obrigatório'),
  area: z.string().min(1, 'Área é obrigatória'),
  address: z.object({
    street: z.string().min(1, 'Rua é obrigatória'),
    number: z.string().min(1, 'Número é obrigatório'),
    complement: z.string().optional(),
    neighborhood: z.string().min(1, 'Bairro é obrigatório'),
    city: z.string().min(1, 'Cidade é obrigatória'),
    state: z.string().min(1, 'Estado é obrigatório'),
    zipCode: z.string().min(1, 'CEP é obrigatório'),
  }),
  features: z.array(z.string()),
  images: z.array(z.string()),
});

export type PropertyListingFormData = z.infer<typeof propertyListingSchema>;