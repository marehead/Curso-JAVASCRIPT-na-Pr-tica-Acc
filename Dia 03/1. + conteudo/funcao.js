//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions#diferen%C3%A7as
//https://blog.matheuscastiglioni.com.br/definindo-funcoes-em-javascript/#:~:text=O%20jeito%20mais%20b%C3%A1sico%20de,v%C3%ADrgula%20e%20encapsulados%20em%20parenteses%20(

function minhaFuncao() {
  console.log('minha Funcao')
}

let minhaFuncaoAnonima = function() {
  console.log('minha Funcao anonima')
}

let minhaFuncaoAnonimaClone = minhaFuncaoAnonima;

minhaFuncaoAnonima();

minhaFuncaoAnonimaClone();

console.log('---------------')

minhaFuncaoAnonimaClone = function() {
  console.log('minha Funcao anonima clonada e alterada mudada')
}

minhaFuncaoAnonima();

minhaFuncaoAnonimaClone();

console.log('---------------')

const minhaArrowFunction = () => {
  console.log('minhaArrowFunction')
}
minhaArrowFunction()

const minhaArrowFunction2 = () => console.log('minhaArrowFunction2')
minhaArrowFunction2()

const minhaArrowFunction3 = () => {
  return 'minhaArrowFunction3'
}
console.log(minhaArrowFunction3())

const minhaArrowFunction4 = () => 'minhaArrowFunction4';
console.log(minhaArrowFunction4())

const minhaArrowFunction5 = nome => nome;
console.log(minhaArrowFunction5('Manoel'))

const minhaArrowFunction6 = (nome, age) => `Nome: ${nome} | Idade: ${age}`;
console.log(minhaArrowFunction6('Manoel', 26))
