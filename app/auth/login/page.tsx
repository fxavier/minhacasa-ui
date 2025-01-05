import { Metadata } from 'next';
import { LoginForm } from '@/components/auth/login-form';

export const metadata: Metadata = {
  title: 'Login | GreenEstate',
  description: 'Faça login na sua conta GreenEstate',
};

export default function LoginPage() {
  return (
    <div className="container max-w-md mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Bem-vindo de volta</h1>
        <p className="text-muted-foreground mt-2">
          Entre na sua conta para continuar
        </p>
      </div>
      <LoginForm />
    </div>
  );
}