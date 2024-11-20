import React from "react";

interface ServiceCardProps {
  icon: React.ElementType; // Tipo genérico para ícones como componentes React
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = React.memo(({ icon: Icon, title, description }) => {
  return (
    <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
      {/* Ícone do serviço */}
      <div className="inline-block p-3 bg-green-100 rounded-full text-primary mb-4">
        <Icon size={24} aria-label={title} />
      </div>
      {/* Título do serviço */}
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
      {/* Descrição do serviço */}
      <p className="text-gray-600">{description}</p>
    </div>
  );
});

export default ServiceCard;
