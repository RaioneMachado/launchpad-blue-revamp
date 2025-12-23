import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    question: "O que é o Código do Euro?",
    answer: "É um modelo validado de operação que já gerou mais de R$9,5 milhões em faturamento vendendo para países da Europa. Um sistema completo que ensina como lucrar em euro com baixa concorrência e alto ticket médio."
  },
  {
    question: "A consultoria é realmente gratuita?",
    answer: "Sim, 100% gratuita. Se você for aprovado na aplicação, terá acesso a uma reunião individual comigo (Cabeça) ou com minha equipe, onde vamos desenhar seu plano personalizado para aplicar o modelo."
  },
  {
    question: "Preciso ter experiência prévia?",
    answer: "Não precisa. O modelo foi construído para ser replicado por qualquer pessoa séria, independente de experiência anterior. Eu já fiz todos os testes e validações, você só precisa seguir o plano."
  },
  {
    question: "Quantas vagas estão disponíveis?",
    answer: "Abrimos apenas 3 vagas por semana para garantir qualidade no acompanhamento. Por isso é importante aplicar o quanto antes para não perder a oportunidade."
  },
  {
    question: "Quanto tempo leva para começar a ter resultados?",
    answer: "Depende da sua execução. Alunos que aplicaram o método corretamente começaram a ver resultados significativos nos primeiros 30-60 dias. O importante é seguir o plano passo a passo."
  },
  {
    question: "Preciso aparecer ou mostrar o rosto?",
    answer: "Não. Todo o modelo foi construído para operar no anonimato completo. Você não precisa mostrar rosto, fazer vídeos ou se expor de qualquer forma."
  },
  {
    question: "Qual o investimento inicial necessário?",
    answer: "Vamos detalhar isso na consultoria gratuita, mas basicamente você precisa de recursos para testar ofertas e escalar o que funciona. O valor varia conforme sua disponibilidade, mas é acessível para quem está começando."
  },
  {
    question: "Consigo lucrar realmente 5 mil euros por mês?",
    answer: "Sim, esse é o potencial mínimo do modelo. Já temos alunos alcançando e superando essa marca. O importante é a execução consistente do que foi validado."
  }
];

const FAQSection = () => {
  const applicationUrl = "https://wotp63ycokg.typeform.com/to/gqPnS5YJ";
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      {/* Background effects - mesmo estilo das outras seções */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="hero-glow top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 opacity-30" />
      <div className="hero-glow bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2 opacity-20" />
      
      <div className="relative max-w-4xl mx-auto">
        {/* Section header - mesmo estilo das outras seções */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Perguntas{" "}
            <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre o Código do Euro
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-10 md:mb-12">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-xl md:rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-xl"
              >
                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground pr-4">
                  {item.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - mesmo estilo das outras seções */}
        <div className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-center border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
            </span>
            <span className="text-destructive font-semibold uppercase tracking-wide text-sm">
              Últimas Vagas da Semana
            </span>
          </div>
          
          <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold mb-6">
            Ainda com dúvidas?{" "}
            <span className="gradient-text">Aplique para a consultoria gratuita</span>{" "}
            e tire todas as suas perguntas diretamente comigo.
          </h3>
          
          <div className="px-4">
            <a href={applicationUrl} target="_blank" rel="noopener noreferrer">
              <Button 
                variant="hero" 
                className="group w-full md:w-auto px-6 py-6 md:px-8 md:py-7 text-base md:text-lg font-semibold"
              >
                <span className="flex items-center justify-center gap-2">
                  Aplicar para consultoria gratuita
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </a>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            ⚠️ Apenas 3 vagas disponíveis essa semana
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;