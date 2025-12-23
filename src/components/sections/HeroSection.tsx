import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const HeroSection = () => {
  const applicationUrl = "https://wotp63ycokg.typeform.com/to/gqPnS5YJ";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background glow effects */}
      <div className="hero-glow top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="hero-glow bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Consultoria 100% Gratuita</span>
          </div>
        </div>

        {/* Logo/Brand */}
        <div className="animate-fade-up mb-6" style={{ animationDelay: '0.2s' }}>
          <h2 className="font-display text-xl md:text-2xl tracking-widest text-primary uppercase">
            Código do Euro
          </h2>
        </div>

        {/* Main Headline */}
        <h1 className="animate-fade-up font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ animationDelay: '0.3s' }}>
          Descubra o modelo secreto que me gerou{" "}
          <span className="gradient-text">mais de R$9,5 milhões</span>{" "}
          vendendo para a Europa no completo anonimato
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8" style={{ animationDelay: '0.4s' }}>
          E que qualquer pessoa pode replicar para lucrar mais de{" "}
          <span className="text-foreground font-semibold">5 mil euros</span> todos os meses.
        </p>

        {/* Urgency indicator */}
        <div className="animate-fade-up flex items-center justify-center gap-2 mb-8" style={{ animationDelay: '0.5s' }}>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
          </span>
          <span className="text-destructive font-semibold uppercase tracking-wide text-sm">
            Restam apenas 3 vagas essa semana
          </span>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <a href={applicationUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl" className="group">
              Aplique agora para uma vaga
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>

        {/* Trust indicator */}
        <p className="animate-fade-up mt-6 text-sm text-muted-foreground" style={{ animationDelay: '0.7s' }}>
          Reunião 100% gratuita com o Cabeça ou equipe
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
