import React from "react";

// Componente principal do Footer
const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12" aria-label="Rodapé do site">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Conteúdo principal do rodapé */}
        <div className="grid md:grid-cols-3 gap-8">
          <FooterSection title="Andaimes Pini">
            <p className="text-gray-100">
              Qualidade e segurança em equipamentos para construção.
            </p>
          </FooterSection>

          <FooterSection title="Links Rápidos">
            <QuickLinks />
          </FooterSection>

          <FooterSection title="Contato">
            <ContactInfo />
          </FooterSection>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-gray-100">
            © {new Date().getFullYear()} Andaimes Pini. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Componente para seções do rodapé
interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    {children}
  </div>
);

// Componente para links rápidos
const QuickLinks: React.FC = () => {
  const links = [
    { href: "#home", label: "Início" },
    { href: "#services", label: "Serviços" },
    { href: "#products", label: "Produtos" },
    { href: "#about", label: "Sobre" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} className="text-gray-100 hover:text-white" aria-label={`Navegar para ${link.label}`}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

// Componente para informações de contato
const ContactInfo: React.FC = () => (
  <div>
    <p className="text-gray-100">Unamar, Cabo Frio - RJ</p>
    <p className="text-gray-100">(22) 99999-9999</p>
    <p className="text-gray-100">contato@andaimespini.com.br</p>
  </div>
);

export default Footer;
