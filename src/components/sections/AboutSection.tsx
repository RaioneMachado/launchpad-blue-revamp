import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Shield, Target } from "lucide-react";

const highlights = [
  { icon: Award, text: "R$9,5 milhões em faturamento" },
  { icon: Shield, text: "Operação no anonimato" },
  { icon: Target, text: "Modelo testado e validado" }
];

const AboutSection = () => {
  const applicationUrl = "https://wotp63ycokg.typeform.com/to/gqPnS5YJ";

  return (
    <section className="relative py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src="https://xn--cabeadrop-t3a.com/banner3.png"
                alt="Cabeça - Mentor do Código do Euro"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 lg:bottom-8 lg:-right-8 glass-card rounded-xl md:rounded-2xl p-4 md:p-6 animate-float">
              <p className="font-display text-xl md:text-2xl lg:text-3xl font-bold gradient-text">R$9,5M+</p>
              <p className="text-xs md:text-sm text-muted-foreground">Faturamento Validado</p>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Quem sou eu pra te{" "}
              <span className="gradient-text">prometer isso?</span>
            </h2>

            <div className="space-y-4 md:space-y-6 text-muted-foreground text-sm md:text-base">
              <p>
                Sou o <span className="text-foreground font-semibold">Cabeça</span>, o tipo de pessoa que sempre construiu no silêncio.
              </p>
              
              <p>
                <strong className="text-foreground">Nunca precisei aparecer, fazer barulho ou vender promessa vazia.</strong>
              </p>
              
              <p>
                Enquanto muitos estavam tentando "fazer mil coisas", eu estava focado em executar um único modelo — que hoje já me gerou mais de <span className="gradient-text font-semibold">R$9,5 milhões em faturamento real.</span>
              </p>
              
              <p>
                Até aqui, mantive tudo no mais absoluto anonimato. Mas depois de ver falsos gurus vendendo coisas que nunca funcionaram, decidi abrir:
              </p>
              
              <p className="text-foreground font-medium">
                Revelar, pela primeira vez, o modelo exato que eu uso — e mostrar como qualquer pessoa séria pode simplesmente replicar.
              </p>
              
              <p>
                Você não precisa criar nada do zero, nem ficar testando fórmula milagrosa. <strong className="text-foreground">Eu já fiz todos os testes, errei, otimizei e validei.</strong>
              </p>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 md:gap-3 mt-6 md:mt-8 mb-6 md:mb-8">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="inline-flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-card text-xs md:text-sm"
                >
                  <item.icon className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  <span className="font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA - Botão responsivo */}
            <div className="text-center md:text-left">
              <a href={applicationUrl} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="hero" 
                  className="group w-full md:w-auto px-6 py-6 md:px-8 md:py-7 text-base md:text-lg font-semibold"
                >
                  <span className="flex items-center justify-center gap-2">
                    Quero minha consultoria gratuita
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;