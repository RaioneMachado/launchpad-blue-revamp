import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import resultsBg from "@/assets/results-bg.webp";

const results = [
  { src: "https://xn--cabeadrop-t3a.com/1.png", alt: "Resultado Euro 1" },
  { src: "https://xn--cabeadrop-t3a.com/6.jpg", alt: "Resultado Euro 2" },
  { src: "https://xn--cabeadrop-t3a.com/7.jpg", alt: "Resultado Euro 3" },
  { src: "https://xn--cabeadrop-t3a.com/8.jpg", alt: "Resultado Euro 4" },
  { src: "https://xn--cabeadrop-t3a.com/9.jpg", alt: "Resultado Euro 5" },
  { src: "https://xn--cabeadrop-t3a.com/10.jpg", alt: "Resultado Euro 6" }
];

const ResultsSection = () => {
  const applicationUrl = "https://wotp63ycokg.typeform.com/to/gqPnS5YJ";

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={resultsBg}
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Resultados Comprovados</span>
          </div>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Você vai descobrir como ter esses resultados,{" "}
            <span className="gradient-text">lucrando em euro</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Resultados reais de alunos aplicando o método do Código do Euro
          </p>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
          {results.map((result, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden glass-card hover:border-primary/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/20"
            >
              <img
                src={result.src}
                alt={result.alt}
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="p-2 rounded-full bg-primary/90 backdrop-blur-sm">
                  <ExternalLink className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
            </span>
            <span className="text-destructive font-semibold uppercase tracking-wide text-sm">
              Vagas Limitadas
            </span>
          </div>
          
          <h3 className="font-display text-xl md:text-3xl font-bold mb-6">
            Faça a aplicação para a consultoria gratuita agora,{" "}
            <span className="gradient-text">antes que as vagas acabem.</span>
          </h3>
          
          <a href={applicationUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl" className="group">
              Aplique agora para uma vaga!
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
