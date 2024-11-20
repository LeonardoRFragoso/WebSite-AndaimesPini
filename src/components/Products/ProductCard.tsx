import React from "react";
import { CheckCircle2 } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(
  ({ name, description }) => {
    return (
      <div
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-primary max-w-sm mx-auto"
        role="article"
        aria-labelledby={`product-title-${name}`}
      >
        <div className="flex items-start gap-4">
          {/* Ícone representativo */}
          <CheckCircle2
            className="text-primary flex-shrink-0"
            aria-hidden="true"
          />
          <div>
            {/* Título do Produto */}
            <h3
              id={`product-title-${name}`}
              className="font-semibold text-lg text-primary mb-2"
            >
              {name}
            </h3>
            {/* Descrição do Produto */}
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Evita re-renderização se as props não mudarem
    return (
      prevProps.name === nextProps.name &&
      prevProps.description === nextProps.description
    );
  }
);

export default ProductCard;
