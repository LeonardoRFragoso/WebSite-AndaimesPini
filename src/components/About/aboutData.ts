import { Icons } from "./icons";
import { AboutDetail } from "./aboutDetails.types";

/**
 * Dados da seção "Sobre".
 * Cada item representa um detalhe sobre a empresa.
 * Inclui:
 * - `id` para identificar itens únicos (útil em iterações e animações).
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
