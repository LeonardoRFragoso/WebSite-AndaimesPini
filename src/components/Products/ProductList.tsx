import React from "react";
import ProductCard from "./ProductCard";
import { products } from "./ProductsData"; // Importando os dados de um arquivo separado

interface ProductListProps {
  customProducts?: { name: string; description: string }[]; // Prop opcional para produtos personalizados
}

const ProductList: React.FC<ProductListProps> = ({ customProducts }) => {
  const displayProducts = customProducts || products; // Usa produtos personalizados ou os padrão

  return (
    <section
      id="products"
      className="py-20 bg-gray-50"
      role="region"
      aria-labelledby="products-title"
      aria-describedby="products-description"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <h2
          id="products-title"
          className="text-3xl font-bold text-primary text-center mb-6"
        >
          Nossos Produtos
        </h2>
        <p
          id="products-description"
          className="text-gray-600 text-center max-w-2xl mx-auto mb-12"
        >
          Oferecemos uma linha completa de equipamentos para sua obra, com qualidade e segurança garantidas.
        </p>

        {/* Grid de Produtos */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product, index) => (
            <ProductCard
              key={`${product.name}-${index}`} // Garantir unicidade do key
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
