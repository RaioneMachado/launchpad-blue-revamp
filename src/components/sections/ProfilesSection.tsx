import { Target, TrendingUp, GraduationCap, Euro } from "lucide-react";
import profilesHero from "@/assets/profiles-hero.png";

const profiles = [
  {
    icon: Target,
    title: "Já tentou várias coisas no digital",
    description: "Dropshipping, afiliados, PLR, mas não ganhou dinheiro como gostaria e está buscando resultados expressivos"
  },
  {
    icon: TrendingUp,
    title: "Já fatura bem com Marketing Digital",
    description: "Mas quer construir um negócio mais sólido e ganhar em Euro"
  },
  {
    icon: GraduationCap,
    title: "Já fez inúmeros cursos",
    description: "Em outras áreas do digital e não teve resultado"
  },
  {
    icon: Euro,
    title: "Quer lucrar no mínimo 5 mil euros",
    description: "Todos os meses com um modelo validado e comprovado"
  }
];

const ProfilesSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden"> {/* Reduzi o padding vertical no mobile */}
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section header - com menor margem no mobile */}
        <div className="text-center mb-8 md:mb-16"> {/* Reduzi o margin-bottom no mobile */}
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight px-4">
            Se você se encaixa em um desses perfis,{" "}
            <span className="gradient-text">o Código do Euro é para você!</span>
          </h2>
        </div>

        {/* Content grid - Image + Cards */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"> {/* Reduzi o gap no mobile */}
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl shadow-primary/20">
              <img
                src={profilesHero}
                alt="Pedro Antônio com placas de conquistas"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            {/* Decorative elements - menores no mobile */}
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 bg-primary/20 rounded-full blur-xl md:blur-2xl" />
            <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-20 h-20 md:w-32 md:h-32 bg-accent/20 rounded-full blur-xl md:blur-2xl" />
          </div>

          {/* Cards side */}
          <div className="order-1 lg:order-2 space-y-3 md:space-y-4"> {/* Reduzi o espaço entre cards no mobile */}
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="glass-card rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                    <profile.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-base md:text-lg lg:text-xl font-semibold mb-1 md:mb-2 text-foreground">
                      {profile.title}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm lg:text-base">
                      {profile.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;