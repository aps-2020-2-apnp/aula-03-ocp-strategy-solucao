import { ICargo } from "./cargo";
import { Funcionario } from "./funcionario";

export class Analista implements ICargo {
  readonly nome: string = 'Analista'

  calculaBeneficios(f: Funcionario): number {
    return f.base * 0.5 + (f.nivel * 0.2 * f.base)
  }

}
