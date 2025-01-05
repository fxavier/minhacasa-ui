'use client';

import Link from 'next/link';
import { Home, LogIn, UserPlus, Plus, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
	//{ href: '/', label: 'Início' },
	{ href: '/properties', label: 'Imóveis' },
	{ href: '/agents', label: 'Agentes' },
	{ href: '/about', label: 'Sobre' },
];

export function Navbar() {
	return (
		<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container flex h-16 items-center justify-between'>
				<Link href='/' className='flex items-center space-x-2'>
					<Home className='h-6 w-6 text-green-600' />
					<span className='font-bold text-xl'>mCasa</span>
				</Link>

				{/* Mobile Menu */}
				<div className='flex items-center gap-4 md:hidden'>
					<ThemeToggle />
					<Sheet>
						<SheetTrigger asChild>
							<Button variant='outline' size='icon' className='shrink-0'>
								<span className='sr-only'>Abrir menu</span>
								<svg
									className='h-5 w-5'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							</Button>
						</SheetTrigger>
						<SheetContent side='right' className='w-[300px] sm:w-[400px]'>
							<nav className='flex flex-col gap-4'>
								{navItems.map((item) => (
									<Link key={item.href} href={item.href}>
										<Button variant='ghost' className='w-full justify-start'>
											{item.label}
										</Button>
									</Link>
								))}
								<Link href='/subscription'>
									<Button variant='outline' className='w-full justify-start'>
										<Building2 className='mr-2 h-4 w-4' />
										Seja um Agente
									</Button>
								</Link>
								<Link href='/properties/new'>
									<Button className='w-full justify-start bg-green-600 hover:bg-green-700'>
										<Plus className='mr-2 h-4 w-4' />
										Anunciar
									</Button>
								</Link>
								<div className='border-t pt-4 mt-4'>
									<Link href='/auth/login'>
										<Button
											variant='outline'
											className='w-full justify-start mb-2'
										>
											<LogIn className='mr-2 h-4 w-4' />
											Conta
										</Button>
									</Link>
								</div>
							</nav>
						</SheetContent>
					</Sheet>
				</div>

				{/* Desktop Menu */}
				<div className='hidden md:flex items-center space-x-1'>
					<nav className='flex items-center space-x-1'>
						{navItems.map((item) => (
							<Link key={item.href} href={item.href}>
								<Button variant='ghost'>{item.label}</Button>
							</Link>
						))}
						<Link href='/subscription'>
							<Button variant='ghost'>
								<Building2 className='mr-2 h-4 w-4' />
								Seja um Agente
							</Button>
						</Link>
						<Link href='/properties/new'>
							<Button
								variant='outline'
								className='border-green-600 text-green-600 hover:bg-green-50'
							>
								<Plus className='mr-2 h-4 w-4' />
								Anunciar
							</Button>
						</Link>
					</nav>

					<div className='flex items-center space-x-2 border-l pl-4'>
						<ThemeToggle />
						<Link href='/auth/login'>
							<Button className='bg-green-600 hover:bg-green-700'>
								<LogIn className='mr-2 h-4 w-4' />
								Conta
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
