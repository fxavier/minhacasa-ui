import { Metadata } from 'next';
import { SubscriptionPlans } from '@/components/subscription/subscription-plans';

export const metadata: Metadata = {
  title: 'Planos | GreenEstate',
  description: 'Escolha o plano ideal para você',
};

export default function SubscriptionPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Planos para Agentes</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Escolha o plano ideal para expandir seus negócios imobiliários
        </p>
      </div>
      <SubscriptionPlans />
    </div>
  );
}