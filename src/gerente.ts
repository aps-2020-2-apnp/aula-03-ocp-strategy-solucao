import { ICargo } from "./cargo";
import { Funcionario } from "./funcionario";

export class Gerente implements ICargo {
  readonly nome = 'Gerente de Projetos'

  calculaBeneficios(f: Funcionario): number {
    return f.base * 2
  }
}
