import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function FooterSocial() {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4">Redes Sociais</h3>
      <div className="flex space-x-4">
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
          <Facebook className="h-5 w-5" />
          <span className="sr-only">Facebook</span>
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
          <Instagram className="h-5 w-5" />
          <span className="sr-only">Instagram</span>
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
    </div>
  );
}