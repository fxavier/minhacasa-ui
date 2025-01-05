import { Metadata } from 'next';
import { RegisterForm } from '@/components/auth/register-form';

export const metadata: Metadata = {
  title: 'Cadastro | GreenEstate',
  description: 'Crie sua conta GreenEstate',
};

export default function RegisterPage() {
  return (
    <div className="container max-w-md mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Criar Conta</h1>
        <p className="text-muted-foreground mt-2">
          Cadastre-se para anunciar ou favoritar imóveis
        </p>
      </div>
      <RegisterForm />
    </div>
  );
}