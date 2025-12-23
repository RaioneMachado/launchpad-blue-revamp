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
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">
            Por que vender{" "}
            <span className="gradient-text">para fora do Brasil?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubra as vantagens de operar no mercado europeu
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground transition-all duration-300">
                  <reason.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats highlight */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card rounded-xl p-6 text-center">
            <p className="font-display text-3xl md:text-4xl font-bold gradient-text">€6,46</p>
            <p className="text-sm text-muted-foreground mt-2">Cotação do Euro</p>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <p className="font-display text-3xl md:text-4xl font-bold gradient-text">30%+</p>
            <p className="text-sm text-muted-foreground mt-2">Margem de Lucro</p>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <p className="font-display text-3xl md:text-4xl font-bold gradient-text">€5k+</p>
            <p className="text-sm text-muted-foreground mt-2">Lucro Mensal</p>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <p className="font-display text-3xl md:text-4xl font-bold gradient-text">R$9.5M</p>
            <p className="text-sm text-muted-foreground mt-2">Faturamento Validado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEuropeSection;
