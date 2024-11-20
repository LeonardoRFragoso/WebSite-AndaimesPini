import { Target, Users, Award, LucideIcon } from "lucide-react";

/**
 * Centraliza e organiza os ícones utilizados no projeto.
 * Isso facilita a manutenção e promove a reutilização em diferentes componentes.
 */
export const Icons: Record<string, LucideIcon> = {
  /**
   * Ícone representando a missão da empresa.
   */
  Target,

  /**
   * Ícone representando os valores da empresa.
   */
  Users,

  /**
   * Ícone representando a experiência da empresa.
   */
  Award,
};
