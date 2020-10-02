import { Analista } from './analista'
import { Desenvolvedor } from './desenvolvedor'
import { Estagiario } from './estagiario'
import { Funcionario } from './funcionario'
import { Gerente } from './gerente'
import { Nivel } from './nivel'

console.log('ok')

const desenvolvedor = new Desenvolvedor()
const analista = new Analista()
const gerente = new Gerente()

const f1 = new Funcionario('Mark', desenvolvedor, 1200, Nivel.Pleno)
console.log(f1)
console.log(f1.salario)
const f2 = new Funcionario('Bill', analista, 2000, 2)
console.log(f2.salario)

// const f3 = new Funcionario('Barbara', Cargo.CEO, 5000, 1)
const f4 = new Funcionario('James', new Estagiario(), 600, 2)

console.log(f4.salario)
// a estratégia é intercambiável
f4.cargo = desenvolvedor
console.log(f4.salario)
f4.cargo = gerente
console.log(f4.salario)
// https://refactoring.guru/pt-br/design-patterns/strategy

