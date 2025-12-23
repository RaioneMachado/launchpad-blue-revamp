import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Shield } from "lucide-react";

const features = [
  { icon: Clock, text: "Consultoria 100% gratuita" },
  { icon: Users, text: "Acompanhamento individual" },
  { icon: Shield, text: "Plano personalizado" }
];

const FinalCtaSection = () => {
  const applicationUrl = "https://wotp63ycokg.typeform.com/to/gqPnS5YJ";

  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden"> {/* Reduzido py-24 para py-16 md:py-24 */}
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      <div className="hero-glow bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Urgency com menor margin-bottom no mobile */}
        <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
          </span>
          <span className="text-destructive font-semibold uppercase tracking-wide text-sm">
            Restam apenas 3 vagas essa semana
          </span>
        </div>

        {/* Headline com menor margin-bottom no mobile */}
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          Pronto para começar a{" "}
          <span className="gradient-text">lucrar em Euro?</span>
        </h2>

        {/* Texto com menor margin-bottom no mobile */}
        <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
          Se você for aprovado na aplicação, vai ter acesso a uma consultoria individual comigo — e juntos vamos traçar o plano de execução com base no que já está funcionando agora.
        </p>

        {/* Features com menor margin-bottom no mobile */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10">
          {features.map((feature, index) => (
            <div key={index} className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-card text-xs md:text-sm">
              <feature.icon className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span className="font-medium text-foreground">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="px-4">
          <a href={applicationUrl} target="_blank" rel="noopener noreferrer">
            <Button 
              variant="hero" 
              className="group w-full md:w-auto px-6 py-6 md:px-8 md:py-7 text-base md:text-lg font-semibold"
            >
              <span className="flex items-center justify-center gap-2">
                Aplique agora para sua vaga
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </a>
        </div>

        {/* Texto final com menor margin-top no mobile */}
        <p className="mt-4 md:mt-6 text-xs md:text-sm text-muted-foreground">
          ⚠️ Vagas limitadas — Não perca essa oportunidade
        </p>
      </div>
    </section>
  );
};

export default FinalCtaSection;