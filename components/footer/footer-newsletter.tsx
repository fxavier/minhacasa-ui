'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div>
      <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
      <p className="text-muted-foreground mb-4">
        Receba as últimas novidades e ofertas exclusivas.
      </p>
      <form onSubmit={handleSubmit} className="space-y-2">
        <Input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
          Inscrever-se
        </Button>
      </form>
    </div>
  );
}