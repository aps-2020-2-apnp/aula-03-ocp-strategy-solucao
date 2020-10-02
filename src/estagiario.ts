import { ICargo } from "./cargo";
import { Funcionario } from "./funcionario";

export class Estagiario implements ICargo {
  readonly nome = 'Estagiário'

  calculaBeneficios(f: Funcionario): number {
    return (f.nivel - 1) * 100
  }
}
