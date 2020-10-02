import { Funcionario } from "./funcionario";

export interface ICargo { // Estratégia Abstrata
  readonly nome: string
  calculaBeneficios(f: Funcionario): number
}

