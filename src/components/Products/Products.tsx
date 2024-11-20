import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { name: "Andaimes", description: "Estruturas modulares para trabalho em altura" },
  { name: "Escoras", description: "Suporte vertical para lajes e vigas" },
  { name: "Forcados", description: "Suportes para travamento lateral" },
  { name: "Pranchões", description: "Plataformas de trabalho resistentes" },
  { name: "Sapatas", description: "Base de apoio para distribuição de carga" },
  { name: "Rodízios", description: "Mobilidade para estruturas temporárias" },
  { name: "Ferros", description: "Materiais metálicos diversos" },
  { name: "Madeiras", description: "Materiais em madeira para construção" },
];

const Products: React.FC = () => {
  return (
    <section
      id="products"
      className="py-20 bg-gray-50"
      role="region"
      aria-labelledby="products-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 id="products-title" className="text-3xl font-bold text-primary mb-4">
            Nossos Produtos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma linha completa de equipamentos para sua obra, com qualidade e segurança garantidas.
          </p>
        </div>

        {/* Grid de Produtos */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
