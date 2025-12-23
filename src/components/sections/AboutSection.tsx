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
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://xn--cabeadrop-t3a.com/banner3.png"
                alt="Cabeça - Mentor do Código do Euro"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 glass-card rounded-2xl p-6 animate-float">
              <p className="font-display text-3xl font-bold gradient-text">R$9,5M+</p>
              <p className="text-sm text-muted-foreground">Faturamento Validado</p>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-6">
              Quem sou eu pra te{" "}
              <span className="gradient-text">prometer isso?</span>
            </h2>

            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
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
            <div className="flex flex-wrap gap-3 mt-8 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href={applicationUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="group">
                Quero minha consultoria gratuita
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
