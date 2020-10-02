import { ICargo } from "./cargo"
import { Nivel } from './nivel'

export class Funcionario {
  readonly nome: string
  base: number
  nivel: Nivel
  cargo: ICargo

  constructor(nome: string, cargo: ICargo,
    base: number, nivel: Nivel = Nivel.Junior) {
    this.nome = nome
    this.cargo = cargo
    this.base = base
    this.nivel = nivel
  }

  calculaProdutividade():void{}

  get salario() { // getter/propriedade
    return this.base +
      this.cargo.calculaBeneficios(this)
  }
}
