import React from "react";
import { Clock, Truck, Shield, HeartHandshake } from "lucide-react";
import ServiceCard from "./ServiceCard";

// Lista de serviços com os dados
const features = [
  {
    icon: Clock,
    title: "Atendimento Rápido",
    description: "Entrega e retirada ágil para não atrasar sua obra",
  },
  {
    icon: Truck,
    title: "Entrega em Toda Região",
    description: "Atendemos Unamar e região de Cabo Frio",
  },
  {
    icon: Shield,
    title: "Equipamentos Seguros",
    description: "Material de qualidade e em ótimo estado",
  },
  {
    icon: HeartHandshake,
    title: "Suporte Completo",
    description: "Assessoria técnica durante toda a locação",
  },
];

// Componente principal
const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em locação de equipamentos para construção,
            com foco na qualidade e satisfação do cliente.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <ServiceCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
