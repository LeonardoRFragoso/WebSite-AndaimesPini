import React from "react";
import { aboutDetails } from "./aboutData";
import AboutCard from "./AboutCard";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-primary text-white"
      role="region"
      aria-labelledby="about-title"
      aria-describedby="about-description"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 id="about-title" className="text-3xl font-bold mb-4">
            Sobre a Andaimes Pini
          </h2>
          <p
            id="about-description"
            className="text-gray-200 max-w-2xl mx-auto"
          >
            Há anos servindo a região de Unamar e Cabo Frio com excelência em locação de equipamentos para construção.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {aboutDetails.map(({ icon, title, description }) => (
            <AboutCard
              key={title}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;