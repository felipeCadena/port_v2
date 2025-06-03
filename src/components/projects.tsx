import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import Link from "next/link";

export const Projects = () => {
  const projects = [
    {
      title: "B2 Adventure",
      description:
        "Plataforma que conecta pessoas aventureiras a guias qualificados para realização de aventuras ao ar livre, com agendamento e pagamento pela plataforma. Neste projeto atuei como Front-end",
      image: "/projects/b2.png",
      technologies: ["Next.js", "Zustand", "Tailwind", "React Query"],
      live: "https://www.b2adventure.com/",
    },
    {
      title: "E-commerce 123Projetei",
      description:
        "O case 123Projetei, envolve mais de 10 projetos desenvolvidos. Website que permite compras de projetos prontos e personalizados, integrando diretamente com o sistema administrativo da 123Projetei. Neste projeto fizemos a manutenção e criação de novos features envolvendo tanto Front-end como Back-end.",
      image: "/projects/123ecom.png",
      technologies: ["Next.js", "Node.js", "MySQL", "Tailwind", "Pagarme"],
      live: "https://www.123projetei.com/",
    },
    {
      title: "123Projetei Business",
      description:
        "Sistema de contratação de Projetos de construção civil da 123Projetei. Neste projeto fizemos a manutenção e criação de novos features envolvendo tanto Front-end como Back-end.",
      image: "/projects/business.png",
      technologies: ["Next.js", "Node.js", "MySQL", "Tailwind", "Pagarme"],
      live: "https://business.123projetei.com/",
    },
    {
      title: "Admin 123Projetei",
      description:
        "Sistema administrativo. Aqui há integração com quase todas as aplicações da empresa. Os SDRs podem criar orçamentos personalizados, projetos do 123Projetei Business ou projetos especiais. É possivel criar promoções, acompanhar as vendas e criar novos projetos para o E-commerce da 123Projetei. Neste projeto fizemos a manutenção e criação de novos features envolvendo tanto Front-end como Back-end.",
      image: "/projects/admin.png",
      technologies: ["Next.js", "Node.js", "MySQL", "Tailwind", "Asaas"],
      live: "https://admin.123projetei.com/",
    },
    {
      title: "Kids2Gether",
      description:
        "Plataforma criada no Wordpress. A api do Wordpress foi usada para criar um aplicativo mobile em React Native. A Kids2gether é um site e aplicativo com dicas de viagens em família. Há postagens com as dicas, venda de e-books, formulários de contato e uma área de membros com conteúdo exclusivo.",
      image: "/projects/kids.png",
      technologies: ["Wordpress", "React Native", "Stripe"],
      live: "https://www.kids2gether.com.br/",
    },
    {
      title: "IGO Tickets",
      description:
        "Plataforma de venda de ingressos para eventos. O IGO Tickets é um sistema de venda de ingressos online, onde os usuários podem comprar ingressos para eventos variados. A plataforma oferece uma interface amigável e segura para transações.",
      image: "/projects/igo.png",
      technologies: ["PHP", "Laravel", "MySQL", "Stripe"],
      live: "https://www.igoticket.com.br/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projetos{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              em destaque
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aqui estão alguns dos meus projetos recentes que demonstram minhas
            habilidades e paixão pelo desenvolvimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {/* {project.github && (
                    <Link href={project.github || "#"} target="_blank">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </Link>
                  )} */}
                  <Link href={project.live || "#"} target="_blank">
                    <Button
                      size="sm"
                      className="cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Em Produção
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
