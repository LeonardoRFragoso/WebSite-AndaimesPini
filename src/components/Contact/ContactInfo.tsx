import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-primary mb-4">Informações de Contato</h3>
      <ul className="space-y-6">
        {/* Telefone */}
        <li className="flex items-center gap-4">
          <Phone className="text-primary flex-shrink-0" size={24} />
          <div>
            <p className="text-sm font-medium text-gray-700">Telefone</p>
            <a
              href="tel:+5522999999999"
              className="text-primary hover:text-primary-dark transition"
            >
              (22) 99999-9999
            </a>
          </div>
        </li>

        {/* E-mail */}
        <li className="flex items-center gap-4">
          <Mail className="text-primary flex-shrink-0" size={24} />
          <div>
            <p className="text-sm font-medium text-gray-700">E-mail</p>
            <a
              href="mailto:contato@andaimespini.com.br"
              className="text-primary hover:text-primary-dark transition"
            >
              contato@andaimespini.com.br
            </a>
          </div>
        </li>

        {/* Endereço */}
        <li className="flex items-center gap-4">
          <MapPin className="text-primary flex-shrink-0" size={24} />
          <div>
            <p className="text-sm font-medium text-gray-700">Endereço</p>
            <p className="text-gray-600">
              Unamar, Cabo Frio - RJ, Brasil
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
