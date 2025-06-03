import { Code, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "./card";

export const About = () => {
  const features = [
    {
      icon: Code,
      title: "Código Limpo",
      description:
        "Escrita de código legível e escalável, seguindo as boas práticas",
    },
    // {
    //   icon: Palette,
    //   title: "Design UI/UX",
    //   description:
    //     "Criação de interfaces e experiências de usuário bonitas e intuitivas",
    // },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Desenvolvimento de aplicações rápidas e otimizadas para a melhor experiência do usuário",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mim
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sou um desenvolvedor web apaixonado com mais de 2 anos de
            experiência na criação de soluções digitais que fazem a diferença.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
              alt="Coding workspace"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Com formação em Turismo e uma década de experiência como consultor
              de viagens, desenvolvi habilidades sólidas em lidar com pessoas e
              trabalho em equipe. Além disso, fui proprietário de uma empresa de
              marketing digital por 3 anos, onde adquiri insights valiosos sobre
              o universo digital. Há mais de dois ano, iniciei a transição para
              me tornar um desenvolvedor, me formando em desenvolvimento web.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Minha atuação abrange tanto o front-end quanto o back-end,
              englobando tecnologias como JavaScript, React.js, Next.js, React
              Native, Node.js, Wordpress, Java e outras. Atualmente sou
              desenvolvedor fullstack na 123Projetei.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
