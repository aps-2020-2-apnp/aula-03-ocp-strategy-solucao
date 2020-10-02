import { ICargo } from "./cargo";
import { Funcionario } from "./funcionario";

export class Desenvolvedor implements ICargo {
  readonly nome: string = 'Desenvolvedor'

  calculaBeneficios(f: Funcionario): number {
    return f.nivel * 0.1 * f.base
  }
}
