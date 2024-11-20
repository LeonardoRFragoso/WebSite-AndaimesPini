import { LucideIcon } from "lucide-react";

/**
 * Interface que define os detalhes da seção "Sobre".
 */
export interface AboutDetail {
  /**
   * Componente do ícone que representa visualmente o detalhe.
   */
  icon: LucideIcon;

  /**
   * Título do detalhe, usado como cabeçalho do card.
   */
  title: string;

  /**
   * Descrição detalhada do detalhe.
   */
  description: string;

  /**
   * Identificador único do detalhe.
   * Útil para renderizações dinâmicas e manutenções futuras.
   */
  id: number;
}
