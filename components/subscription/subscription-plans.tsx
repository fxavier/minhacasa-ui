'use client';

import { Check } from 'lucide-react';
import { PlanCard } from './plan-card';

const plans = [
	{
		id: 'basic',
		name: 'Básico',
		price: 'MZM 1000',
		period: '/mês',
		description: 'Ideal para agentes iniciantes',
		features: [
			'Até 10 imóveis activos',
			'Destaque básico nas buscas',
			'Suporte por email',
			'Estatísticas básicas',
		],
		recommended: false,
	},
	{
		id: 'pro',
		name: 'Profissional',
		price: 'MZM 2000',
		period: '/mês',
		description: 'Para agentes estabelecidos',
		features: [
			'Até 50 imóveis activos',
			'Destaque premium nas buscas',
			'Suporte prioritário',
			'Estatísticas avançadas',
			'Ferramentas de marketing',
			'Área exclusiva do agente',
		],
		recommended: true,
	},
	{
		id: 'enterprise',
		name: 'Empresarial',
		price: 'MZM 4000',
		period: '/mês',
		description: 'Para imobiliárias e equipes',
		features: [
			'Imóveis ilimitados',
			'Máximo destaque nas buscas',
			'Suporte VIP 24/7',
			'Estatísticas completas',
			'Suite completa de marketing',
			'Área da imobiliária',
			'API de integração',
			'Equipe ilimitada',
		],
		recommended: false,
	},
];

export function SubscriptionPlans() {
	return (
		<div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
			{plans.map((plan) => (
				<PlanCard key={plan.id} plan={plan} />
			))}
		</div>
	);
}
