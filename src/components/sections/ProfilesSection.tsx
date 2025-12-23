import { Target, TrendingUp, GraduationCap, Euro } from "lucide-react";

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
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">
            Se você se encaixa em um desses perfis,{" "}
            <span className="gradient-text">o Código do Euro é para você!</span>
          </h2>
        </div>

        {/* Profile cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <profile.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                    {profile.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {profile.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
