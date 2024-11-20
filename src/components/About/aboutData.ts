import { Icons } from "./icons";
import { AboutDetail } from "./aboutDetails.types";

/**
 * Dados da seção "Sobre".
 * Cada item representa um detalhe sobre a empresa.
 */
export const aboutDetails: AboutDetail[] = [
  {
    icon: Icons.Target,
    title: "Missão",
    description:
      "Fornecer soluções de qualidade em equipamentos para construção, garantindo segurança e satisfação aos nossos clientes.",
  },
  {
    icon: Icons.Users,
    title: "Valores",
    description:
      "Comprometimento, qualidade, segurança e respeito são os pilares que guiam nossa atuação no mercado.",
  },
  {
    icon: Icons.Award,
    title: "Experiência",
    description:
      "Anos de experiência no mercado nos permitem oferecer o melhor serviço e suporte técnico aos nossos clientes.",
  },
];
