import React, { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navLinks } from "./navbarLinks";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-primary text-white fixed w-full z-50 shadow-md"
      role="navigation"
      aria-label="Menu principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              className="text-xl font-bold hover:opacity-90 transition-opacity"
            >
              Andaimes Pini
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:bg-primary-dark px-3 py-2 rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ações no Header */}
          <div className="flex items-center gap-4">
            {/* Botão de telefone (Desktop) */}
            <a
              href="tel:+5522999999999"
              className="hidden md:flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <Phone size={18} />
              <span>(22) 99999-9999</span>
            </a>

            {/* Botão de menu (Mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                className="p-2 text-white focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        } bg-primary`}
        aria-hidden={!isOpen}
      >
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block px-3 py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
