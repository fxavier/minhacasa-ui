import { Metadata } from 'next';
import { Building2, Users, Award, Shield } from 'lucide-react';

export const metadata: Metadata = {
	title: 'Sobre | GreenEstate',
	description:
		'Conheça a GreenEstate e nossa missão de transformar o mercado imobiliário',
};

export default function AboutPage() {
	return (
		<div className='container mx-auto px-4 py-16'>
			<div className='max-w-3xl mx-auto text-center mb-16'>
				<h1 className='text-4xl font-bold mb-4'>Sobre a mCasa</h1>
				<p className='text-xl text-muted-foreground'>
					Transformando o mercado imobiliário com tecnologia e transparência
				</p>
			</div>

			<div className='grid md:grid-cols-2 gap-16 max-w-5xl mx-auto mb-16'>
				<div>
					<h2 className='text-2xl font-semibold mb-4'>Nossa História</h2>
					<p className='text-muted-foreground'>
						Fundada em 2024, a GreenEstate nasceu da visão de simplificar e
						modernizar o processo de compra, venda e aluguel de imóveis no
						Brasil. Nossa plataforma combina tecnologia de ponta com atendimento
						personalizado para oferecer a melhor experiência possível.
					</p>
				</div>
				<div>
					<h2 className='text-2xl font-semibold mb-4'>Nossa Missão</h2>
					<p className='text-muted-foreground'>
						Conectar pessoas aos seus lares dos sonhos através de uma plataforma
						transparente, eficiente e inovadora. Buscamos revolucionar o mercado
						imobiliário, tornando-o mais acessível e confiável para todos.
					</p>
				</div>
			</div>

			<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
				<div className='text-center p-6 bg-card rounded-lg'>
					<Building2 className='h-12 w-12 mx-auto mb-4 text-green-600' />
					<h3 className='text-xl font-semibold mb-2'>+10.000</h3>
					<p className='text-muted-foreground'>Imóveis anunciados</p>
				</div>
				<div className='text-center p-6 bg-card rounded-lg'>
					<Users className='h-12 w-12 mx-auto mb-4 text-green-600' />
					<h3 className='text-xl font-semibold mb-2'>+5.000</h3>
					<p className='text-muted-foreground'>Clientes satisfeitos</p>
				</div>
				<div className='text-center p-6 bg-card rounded-lg'>
					<Award className='h-12 w-12 mx-auto mb-4 text-green-600' />
					<h3 className='text-xl font-semibold mb-2'>+1.000</h3>
					<p className='text-muted-foreground'>Corretores parceiros</p>
				</div>
				<div className='text-center p-6 bg-card rounded-lg'>
					<Shield className='h-12 w-12 mx-auto mb-4 text-green-600' />
					<h3 className='text-xl font-semibold mb-2'>100%</h3>
					<p className='text-muted-foreground'>Segurança garantida</p>
				</div>
			</div>

			<div className='bg-card rounded-lg p-8 text-center'>
				<h2 className='text-2xl font-semibold mb-4'>
					Faça Parte da Nossa História
				</h2>
				<p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
					Seja você um comprador, vendedor ou corretor, junte-se a nós para
					transformar o mercado imobiliário. Estamos sempre em busca de
					parceiros que compartilham nossa visão de inovação e excelência.
				</p>
			</div>
		</div>
	);
}
