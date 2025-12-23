import { Globe, Wallet, TrendingUp, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "Nível de Sofisticação de Mercado Baixo",
    description: "Para quem vende no Brasil, adaptar sua oferta para outros países é largar na frente"
  },
  {
    icon: Wallet,
    title: "Ganhar em Moeda Forte",
    description: "Euro está batendo quase R$6,46. Você irá investir em real e ganhar em euro, uma das moedas mais fortes do mundo."
  },
  {
    icon: TrendingUp,
    title: "Alto Poder de Compra",
    description: "O salário mínimo na Espanha é cerca de €1.134/mês (~R$7.300). No Brasil: R$1.518/mês."
  },
  {
    icon: ShieldCheck,
    title: "Mercado Menos Saturado",
    description: "Menos competição significa mais oportunidades de lucro com ofertas validadas."
  }
];

const WhyEuropeSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-4"> {/* Reduzido de py-24 para py-16 md:py-24 */}
      <div className="max-w-6xl mx-auto">
        {/* Section header - com menor margin-bottom no mobile */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">
            Por que vender{" "}
            <span className="gradient-text">para fora do Brasil?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubra as vantagens de operar no mercado europeu
          </p>
        </div>

        {/* Reasons grid - com menor gap no mobile */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 md:gap-5">
                <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground transition-all duration-300">
                  <reason.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-semibold mb-2 md:mb-3 text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats highlight - com menor margin-top no mobile */}
        <div className="mt-8 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="glass-card rounded-xl p-4 md:p-6 text-center">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">€6,46</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-2">Cotação do Euro</p>
          </div>
          <div className="glass-card rounded-xl p-4 md:p-6 text-center">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">30%+</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-2">Margem de Lucro</p>
          </div>
          <div className="glass-card rounded-xl p-4 md:p-6 text-center">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">€5k+</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-2">Lucro Mensal</p>
          </div>
          <div className="glass-card rounded-xl p-4 md:p-6 text-center">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">R$9.5M</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-2">Faturamento Validado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEuropeSection;