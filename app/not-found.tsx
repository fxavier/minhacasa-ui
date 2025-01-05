import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
      <div className="container px-4 py-8 md:py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="relative">
            <h1 className="text-9xl font-bold text-green-600 dark:text-green-500">404</h1>
            <div className="absolute -top-4 right-1/2 translate-x-1/2 rotate-12">
              <Home className="h-16 w-16 text-green-600/20 dark:text-green-500/20" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Página não encontrada</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Desculpe, não conseguimos encontrar a página que você está procurando. 
              Ela pode ter sido movida ou não existe mais.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <Button className="bg-green-600 hover:bg-green-700 min-w-[200px]">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Início
              </Button>
            </Link>
            <Link href="/properties">
              <Button variant="outline" className="min-w-[200px]">
                <Search className="mr-2 h-4 w-4" />
                Buscar Imóveis
              </Button>
            </Link>
          </div>

          <div className="pt-8 border-t border-border max-w-xs mx-auto">
            <p className="text-sm text-muted-foreground">
              Precisa de ajuda? Entre em{' '}
              <Link href="/contact" className="text-green-600 hover:underline">
                contato
              </Link>{' '}
              com nossa equipe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}