import React from "react";

const NotFound: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center">
    <h1 className="text-4xl font-bold mb-4">404</h1>
    <p className="text-lg">Página não encontrada.</p>
    <a href="/" className="text-primary mt-4">
      Voltar para o início
    </a>
  </div>
);

export default NotFound;
