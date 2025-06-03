"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { toast } from "react-toastify";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  interface ContactInfoItem {
    icon: React.ComponentType<{ className?: string; size?: number }>;
    title: string;
    info: string;
    link: string;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/felipecadena.dev@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result.success === "true") {
        toast.success("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Erro ao enviar. Tente novamente.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Erro ao enviar. Verifique sua conexão.");
    }
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      info: "felipecadena.dev@gmail.com",
      link: "mailto:felipecadena.dev@gmail.com",
    },
    {
      icon: Phone,
      title: "Whatsapp",
      info: "(21) 98152-1368",
      link: "https://wa.me/5521981521368?text=Ol%C3%A1,%20tenho%20um%20projeto%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento.",
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "Rio de Janeiro, Brasil",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entre{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              em contato
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para começar seu próximo projeto? Vamos trabalhar juntos para
            criar algo incrível!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Contact Information
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <a
                      href={item.link}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {item.info}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30">
              <h4 className="text-white font-semibold mb-3">
                Vamos trabalhar juntos!
              </h4>
              <p className="text-gray-300 text-sm">
                Estou sempre interessado em novas oportunidades e projetos
                interessantes. Se você tem um projeto em mente, sinta-se à
                vontade para entrar em contato!
              </p>
            </div>
          </div>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-slate-700 border-slate-600 text-white focus:border-purple-400"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-slate-700 border-slate-600 text-white focus:border-purple-400"
                    placeholder="exemplo@gmail.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-slate-700 border-slate-600 text-white focus:border-purple-400 min-h-[120px]"
                    placeholder="Me fale sobre o seu projeto..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                >
                  <Send size={16} className="mr-2" />
                  Enviar
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
