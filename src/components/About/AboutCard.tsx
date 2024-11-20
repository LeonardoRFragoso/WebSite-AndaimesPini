import React from "react";

interface AboutCardProps {
  /**
   * Componente do ícone a ser exibido no card.
   * Deve ser um componente React, como um ícone do `lucide-react`.
   */
  icon: React.ElementType;

  /**
   * Título do card.
   */
  title: string;

  /**
   * Descrição do card.
   */
  description: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ icon: Icon, title, description }) => {
  // Gerar ID seguro para aria-labelledby e aria-describedby
  const id = title.replace(/\s+/g, '-').toLowerCase();

  return (
    <div
      className="text-center p-6 bg-primary-dark rounded-lg hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg max-w-[300px] sm:max-w-none mx-auto"
      role="article"
      aria-labelledby={`about-card-title-${id}`}
      aria-describedby={`about-card-description-${id}`}
    >
      {/* Ícone */}
      <div className="inline-block p-3 bg-white/10 rounded-full mb-4">
        <Icon size={24} aria-hidden="true" />
      </div>

      {/* Título */}
      <h3
        id={`about-card-title-${id}`}
        className="text-xl font-semibold mb-2"
      >
        {title}
      </h3>

      {/* Descrição */}
      <p
        id={`about-card-description-${id}`}
        className="text-gray-100"
      >
        {description}
      </p>
    </div>
  );
};

export default AboutCard;
