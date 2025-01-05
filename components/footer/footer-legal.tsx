export function FooterLegal() {
  return (
    <div className="border-t pt-8 mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} GreenEstate. Todos os direitos reservados.
        </p>
        <div className="flex space-x-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">
            Termos de Uso
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </div>
  );
}