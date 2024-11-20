import { Icons } from "./icons";
import { AboutDetail } from "./aboutDetails.types";

/**
 * Lista de detalhes sobre a seção "Sobre".
 * 
 * Cada item contém:
 * - `id`: Identificador único do item.
 * - `icon`: Ícone representando o detalhe.
 * - `title`: Título do detalhe.
 * - `description`: Descrição detalhada.
 */
export const aboutDetails: AboutDetail[] = [
  {
    id: 1,
    icon: Icons.Target,
    title: "Missão",
    description:
      "Fornecer soluções de qualidade em equipamentos para construção, garantindo segurança e satisfação aos nossos clientes.",
  },
  {
    id: 2,
    icon: Icons.Users,
    title: "Valores",
    description:
      "Comprometimento, qualidade, segurança e respeito são os pilares que guiam nossa atuação no mercado.",
  },
  {
    id: 3,
    icon: Icons.Award,
    title: "Experiência",
    description:
      "Anos de experiência no mercado nos permitem oferecer o melhor serviço e suporte técnico aos nossos clientes.",
  },
];
