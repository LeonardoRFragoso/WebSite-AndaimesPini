import React from "react";
import { CheckCircle2 } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  href?: string; // Link opcional para redirecionamento
}

const ProductCard: React.FC<ProductCardProps> = React.memo(({ name, description, href }) => {
  const Wrapper = href ? "a" : "div"; // Link dinâmico ou div simples

  return (
    <Wrapper
      href={href}
      className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-primary max-w-sm mx-auto ${
        href ? "cursor-pointer" : ""
      }`}
      role="article"
      aria-labelledby={`product-title-${name}`}
    >
      <div className="flex items-start gap-4">
        <CheckCircle2 className="text-primary flex-shrink-0" aria-hidden="true" />
        <div>
          <h3
            id={`product-title-${name}`}
            className="font-semibold text-lg text-primary mb-2"
          >
            {name}
          </h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Wrapper>
  );
});

export default ProductCard;
