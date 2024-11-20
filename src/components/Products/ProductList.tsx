import React from "react";
import ProductCard from "./ProductCard";

// Dados dos produtos
const products = [
  { name: "Andaimes", description: "Estruturas modulares para trabalho em altura" },
  { name: "Escoras", description: "Suporte vertical para lajes e vigas" },
  { name: "Forcados", description: "Suportes para travamento lateral" },
  { name: "Pranchões", description: "Plataformas de trabalho resistentes" },
  { name: "Rodízios", description: "Mobilidade para estruturas temporárias" },
  { name: "Sapatas", description: "Base de apoio para distribuição de carga" },
];

const ProductList: React.FC = () => {
  return (
    <section
      id="products"
      className="py-20 bg-gray-50"
      role="region"
      aria-labelledby="products-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <h2
          id="products-title"
          className="text-3xl font-bold text-primary text-center mb-12"
        >
          Nossos Produtos
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Oferecemos uma linha completa de equipamentos para sua obra, com qualidade e segurança garantidas.
        </p>

        {/* Grid de Produtos */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default ProductList;
