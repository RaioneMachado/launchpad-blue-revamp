import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import resultsBg from "@/assets/results-bg.webp";

const HeroSection = () => {
  const applicationUrl = "https://wotp63ycokg.typeform.com/to/gqPnS5YJ";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16 md:py-20"> {/* Reduzido py-20 para py-16 md:py-20 */}
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={resultsBg}
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/20" />
      </div>
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge com menor margin-bottom no mobile */}
        <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm border border-primary/30 mb-6 md:mb-8 shadow-lg">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Consultoria 100% Gratuita</span>
          </div>
        </div>

        {/* Logo/Brand com menor margin-bottom no mobile */}
        <div className="animate-fade-up mb-4 md:mb-6" style={{ animationDelay: '0.2s' }}>
          <h2 className="font-display text-xl md:text-2xl tracking-widest text-primary uppercase">
            Código do Euro
          </h2>
        </div>

        {/* Main Headline com menor margin-bottom no mobile */}
        <h1 className="animate-fade-up font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6" style={{ animationDelay: '0.3s' }}>
          Descubra o modelo secreto que me gerou{" "}
          <span className="gradient-text">mais de R$9,5 milhões</span>{" "}
          vendendo para a Europa no completo anonimato
        </h1>

        {/* Subtitle com menor margin-bottom no mobile */}
        <p className="animate-fade-up text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8" style={{ animationDelay: '0.4s' }}>
          E que qualquer pessoa pode replicar para lucrar mais de{" "}
          <span className="text-foreground font-semibold">5 mil euros</span> todos os meses.
        </p>

        {/* Urgency indicator com menor margin-bottom no mobile */}
        <div className="animate-fade-up flex items-center justify-center gap-2 mb-6 md:mb-8" style={{ animationDelay: '0.5s' }}>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
          </span>
          <span className="text-destructive font-semibold uppercase tracking-wide text-sm">
            Restam apenas 3 vagas essa semana
          </span>
        </div>

        {/* CTA Button - RESPONSIVO */}
        <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <a href={applicationUrl} target="_blank" rel="noopener noreferrer">
            <Button 
              variant="hero" 
              className="group w-full md:w-auto px-6 py-6 md:px-8 md:py-7 text-base md:text-lg font-semibold"
            >
              <span className="flex items-center justify-center gap-2">
                Aplique agora para uma vaga
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </a>
        </div>

        {/* Trust indicator com menor margin-top no mobile */}
        <p className="animate-fade-up mt-4 md:mt-6 text-sm text-muted-foreground" style={{ animationDelay: '0.7s' }}>
          Reunião 100% gratuita com o Cabeça ou equipe
        </p>
      </div>
    </section>
  );
};

export default HeroSection;