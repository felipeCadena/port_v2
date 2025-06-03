import { Card, CardContent } from "./card";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Next.js", level: 90 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 82 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 78 },
      ],
    },
    {
      title: "Outras ferramentas",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Google Cloud", level: 60 },
        { name: "Figma", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Minhas{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aqui estão as tecnologias e ferramentas que já utilizei em meus
            projetos, organizadas por categorias. Cada habilidade é acompanhada
            de um nível de proficiência, representado em porcentagem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-purple-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
