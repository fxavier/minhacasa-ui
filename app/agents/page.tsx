import { Metadata } from 'next';
import { AgentList } from '@/components/agents/agent-list';

export const metadata: Metadata = {
  title: 'Corretores | GreenEstate',
  description: 'Conheça nossa equipe de corretores especializados',
};

export default function AgentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Nossos Corretores</h1>
        <p className="text-muted-foreground">
          Profissionais experientes prontos para ajudar você a encontrar o imóvel ideal
        </p>
      </div>
      <AgentList />
    </div>
  );
}