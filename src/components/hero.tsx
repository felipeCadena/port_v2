"use client";

import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";

export const Hero = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="relative w-52 h-52 rounded-full mx-auto mb-8 border-4 border-purple-400/50 shadow-2xl"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Olá, sou{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Felipe Cadena
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
          Full Stack Web Developer
        </p>

        <p className="text-lg text-gray-400 mb-1 max-w-2xl mx-auto animate-fade-in">
          Apaixonado por tecnologia!
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in">
          Com experiência em React.js, Next.js, TypeScript, React Native, Node e
          sempre me aprimorando.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
          >
            <a href="#projects">Conheça meu trabalho</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
          >
            <Link
              href="/felipeCadenaCv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </Link>
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/felipeCadena"
            target="_blank"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/felipe-caden/"
            target="_blank"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="animate-bounce">
          <a href="#about">
            <ArrowDown className="text-purple-400 mx-auto" size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};
