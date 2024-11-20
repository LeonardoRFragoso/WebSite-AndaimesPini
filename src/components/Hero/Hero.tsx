import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-primary text-white pt-24 pb-16"
      aria-labelledby="hero-title"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80"
          alt="Construção civil com andaimes ao fundo"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <h1
              id="hero-title"
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Equipamentos de Qualidade para sua Obra
            </h1>
            <p className="text-lg mb-8 text-gray-100">
              Locação de andaimes e equipamentos para construção em Unamar, Cabo
              Frio-RJ. Qualidade, segurança e o melhor atendimento para sua
              obra.
            </p>

            {/* Call-to-Actions */}
            <div className="flex flex-wrap gap-4">
              <CTAButton
                href="#contact"
                text="Solicitar Orçamento"
                icon={<ArrowRight size={20} />}
                type="primary"
              />
              <CTAButton href="#products" text="Ver Produtos" type="secondary" />
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80"
              alt="Estruturas de andaimes em construção"
              className="rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

/** Componente de Botão Reutilizável */
interface CTAButtonProps {
  href: string;
  text: string;
  icon?: React.ReactNode;
  type?: "primary" | "secondary";
}

const CTAButton: React.FC<CTAButtonProps> = ({ href, text, icon, type }) => {
  const baseStyles =
    "px-6 py-3 rounded-md font-semibold flex items-center gap-2 transition-colors";
  const primaryStyles = "bg-white text-primary hover:bg-gray-100";
  const secondaryStyles = "bg-primary-dark hover:bg-primary-light";

  return (
    <a
      href={href}
      aria-label={text}
      className={`${baseStyles} ${
        type === "primary" ? primaryStyles : secondaryStyles
      }`}
    >
      {text} {icon}
    </a>
  );
};
