import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-50"
      role="region"
      aria-labelledby="contact-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2
            id="contact-title"
            className="text-3xl font-bold text-primary mb-4"
          >
            Entre em Contato
          </h2>
          <p
            id="contact-description"
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Fale conosco para solicitar um orçamento ou tirar suas dúvidas.
            Estamos prontos para ajudar!
          </p>
        </div>

        {/* Grid: Formulário e Informações */}
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
