import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Baixa concorrência",
  "Alto ticket médio",
  "Margens de lucro acima de 30%",
  "Sem aparecer, sem estoque"
];

const ModelSection = () => {
  const applicationUrl = "https://wotp63ycokg.typeform.com/to/gqPnS5YJ";

  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="relative max-w-5xl mx-auto">
        {/* Alert badge */}
        <div className="text-center mb-6 md:mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
            ⚠️ VAGAS LIMITADAS
          </span>
        </div>

        {/* Main content */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="text-muted-foreground">Mandando a real:</span>{" "}
            Tem um novo modelo que poucas pessoas sabem —{" "}
            <span className="gradient-text">e que irá formar os próximos milionários digitais muito rápido.</span>
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8">
            Não é mais questão de sorte, timing ou arriscar tudo. Eu testei, validei e escalei um modelo de operação que fatura vendendo para países da Europa com margens muito acima do que se consegue no Brasil.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-3 md:p-4 text-center hover:border-primary/50 transition-all"
            >
              <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-1 md:mb-2" />
              <p className="text-xs md:text-sm font-medium text-foreground">{benefit}</p>
            </div>
          ))}
        </div>

        {/* Key message */}
        <div className="glass-card rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-center mb-6 md:mb-8">
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-3 md:mb-4">
            Você não precisa reinventar nada.
          </p>
          <p className="font-display text-xl md:text-2xl lg:text-3xl font-bold gradient-text mb-4 md:mt-6">
            EU JÁ FIZ ISSO POR VOCÊ.
          </p>
          <p className="text-sm md:text-base text-muted-foreground mt-4 md:mt-6 max-w-2xl mx-auto">
            Agora, se for aprovado na aplicação, você vai ter acesso a uma consultoria 1:1 comigo, onde vou desenhar seu plano personalizado para aplicar esse modelo e começar a construir uma operação de €5.000 a €15.000 mensais.
          </p>
        </div>

        {/* CTA - BOTÃO CORRIGIDO */}
        <div className="text-center">
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
      </div>
    </section>
  );
};

export default ModelSection;