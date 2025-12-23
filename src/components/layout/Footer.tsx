const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="font-display text-xl font-bold gradient-text mb-4">
          Código do Euro
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          Transformando brasileiros em empresários internacionais
        </p>
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Código do Euro. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
