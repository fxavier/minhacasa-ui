import Link from 'next/link';

export function FooterNav() {
	return (
		<nav>
			<h3 className='font-semibold text-lg mb-4'>Links Rápidos</h3>
			<ul className='space-y-2'>
				<li>
					<Link
						href='/properties'
						className='text-muted-foreground hover:text-foreground transition-colors'
					>
						Imóveis
					</Link>
				</li>
				<li>
					<Link
						href='/agents'
						className='text-muted-foreground hover:text-foreground transition-colors'
					>
						Correctores
					</Link>
				</li>
				<li>
					<Link
						href='/about'
						className='text-muted-foreground hover:text-foreground transition-colors'
					>
						Sobre Nós
					</Link>
				</li>
				<li>
					<Link
						href='/contact'
						className='text-muted-foreground hover:text-foreground transition-colors'
					>
						Contacto
					</Link>
				</li>
			</ul>
		</nav>
	);
}
