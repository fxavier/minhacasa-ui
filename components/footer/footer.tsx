import { FooterNav } from './footer-nav';
import { FooterSocial } from './footer-social';
import { FooterNewsletter } from './footer-newsletter';
import { FooterLegal } from './footer-legal';

export function Footer() {
	return (
		<footer className='bg-card border-t'>
			<div className='container mx-auto px-4 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
					<div>
						<h3 className='font-semibold text-lg mb-4'>mCasa</h3>
						<p className='text-muted-foreground'>
							Encontre o imóvel dos seus sonhos com a melhor experiência do
							mercado.
						</p>
					</div>
					<FooterNav />
					<FooterSocial />
					<FooterNewsletter />
				</div>
				<FooterLegal />
			</div>
		</footer>
	);
}
