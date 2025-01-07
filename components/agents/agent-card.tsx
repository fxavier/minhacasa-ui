import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Agent } from '@/types/agent';

interface AgentCardProps {
	agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
	return (
		<Card className='overflow-hidden'>
			<div className='relative h-64 w-full'>
				<Image
					src={agent.image}
					alt={agent.name}
					fill
					className='object-cover'
				/>
			</div>
			<CardContent className='p-6'>
				<h3 className='text-xl font-semibold mb-2'>{agent.name}</h3>
				<p className='text-muted-foreground mb-4'>{agent.specialization}</p>
				<div className='space-y-2'>
					<div className='flex items-center text-sm'>
						<Phone className='h-4 w-4 mr-2' />
						<span>{agent.phone}</span>
					</div>
					<div className='flex items-center text-sm'>
						<Mail className='h-4 w-4 mr-2' />
						<span>{agent.email}</span>
					</div>
				</div>
			</CardContent>
			<CardFooter className='p-6 pt-0'>
				<Button className='w-full bg-green-600 hover:bg-green-700'>
					Entrar em Contacto
				</Button>
			</CardFooter>
		</Card>
	);
}
