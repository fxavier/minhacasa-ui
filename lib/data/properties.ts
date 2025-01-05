// Add at the top of the file
export type Property = {
	id: string;
	title: string;
	description: string;
	price: number;
	purpose: 'rent' | 'buy';
	propertyType: string;
	bedrooms: number;
	bathrooms: number;
	area: number;
	address: {
		street: string;
		city: string;
		state: string;
		zipCode: string;
	};
	images: string[];
	features: string[];
	featured: boolean;
	createdAt: string;
	updatedAt: string;
};

// Mock data for properties
export const properties: Property[] = [
	{
		id: '1',
		title: 'Apartamento Luxuoso com Vista para o Mar',
		description:
			'Apartamento moderno com acabamento premium e vista panorâmica',
		price: 1250000,
		purpose: 'rent',
		propertyType: 'apartment',
		bedrooms: 3,
		bathrooms: 2,
		area: 120,
		address: {
			street: 'Av. Atlântica, 1500',
			city: 'Rio de Janeiro',
			state: 'RJ',
			zipCode: '22021-001',
		},
		images: [
			'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
			'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
			'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?w=1200&q=80',
		],
		features: ['Vista para o Mar', 'Varanda Gourmet', 'Academia', 'Piscina'],
		featured: true,
		createdAt: '2024-03-20T10:00:00Z',
		updatedAt: new Date().toISOString(),
	},
	{
		id: '2',
		title: 'Casa em Condomínio Fechado',
		description: 'Casa espaçosa com jardim privativo e área de lazer completa',
		price: 980000,
		purpose: 'buy',
		propertyType: 'house',
		bedrooms: 4,
		bathrooms: 3,
		area: 250,
		address: {
			street: 'Rua das Palmeiras, 100',
			city: 'São Paulo',
			state: 'SP',
			zipCode: '04567-000',
		},
		images: [
			'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
			'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
		],
		features: ['Jardim', 'Piscina', 'Churrasqueira', 'Segurança 24h'],
		featured: true,
		createdAt: '2024-03-19T15:30:00Z',
		updatedAt: new Date().toISOString(),
	},
	{
		id: '3',
		title: 'Cobertura Duplex',
		description: 'Cobertura com terraço e vista panorâmica da cidade',
		price: 1800000,
		purpose: 'buy',
		propertyType: 'penthouse',
		bedrooms: 4,
		bathrooms: 4,
		area: 300,
		address: {
			street: 'Rua Oscar Freire, 500',
			city: 'São Paulo',
			state: 'SP',
			zipCode: '01426-001',
		},
		images: [
			'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
			'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80',
		],
		features: ['Terraço', 'Hidromassagem', 'Adega', 'Home Theater'],
		featured: true,
		createdAt: '2024-03-18T09:15:00Z',
		updatedAt: new Date().toISOString(),
	},
	{
		id: '4',
		title: 'Studio Moderno',
		description: 'Studio compacto e bem localizado, ideal para investimento',
		price: 450000,
		purpose: 'buy',
		propertyType: 'studio',
		bedrooms: 1,
		bathrooms: 1,
		area: 35,
		address: {
			street: 'Rua Augusta, 1000',
			city: 'São Paulo',
			state: 'SP',
			zipCode: '01305-100',
		},
		images: [
			'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
			'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=1200&q=80',
		],
		features: ['Mobiliado', 'Academia', 'Lavanderia', 'Portaria 24h'],
		featured: false,
		createdAt: '2024-03-17T14:20:00Z',
		updatedAt: new Date().toISOString(),
	},
];
