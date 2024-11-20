import React from "react";
import ProductCard from "./ProductCard";
import { products } from "./ProductsData";

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
        <div className="text-center mb-12">
          <h2
            id="products-title"
            className="text-3xl font-bold text-primary mb-4"
          >
            Nossos Produtos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma linha completa de equipamentos para sua obra, com
            qualidade e segurança garantidas.
          </p>
        </div>

        {/* Grid de Produtos */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
              href={product.href} // Link opcional
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
