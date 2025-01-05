'use client';

import { AgentCard } from './agent-card';
import { agents } from '@/lib/data/agents';

export function AgentList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {agents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
}