minhafuncaoExemplo();

function minhafuncaoExemplo() {
  let a = 1;
  let b = 2;
  console.log(a+b)
}

function minhafuncao() {
  console.log('executei minha funcao');
}

minhafuncao();

function exemploFunction(num1, num2=5) {
  console.log(num1*num2);
}

exemploFunction(31);

function somatorio(n1, n2) {
  n1 = n1*10;
  n2 = n2*15;
  return n1+n2;
}

let resultado = somatorio(10, 24);

console.log('return somatorio:', resultado);

//soma(10, 24); -> ERROR
//funcao anonima (function expression)
const soma = function(n1, n2) {
  console.log(n1+n2);
}

soma(10, 24);

//toda funcao retorna undefined por padrao
//ao menos se vc colocar um return manualmente

function multiplicacao(num1, num2) {
  var totalMult = num1*num2;
  return totalMult;
}
console.log(multiplicacao(2,4));
console.log(totalMult);//ERRO - variaveis definidas em uma funcao, so funcionam naquele escopo


//console.log(total);//ERRO - antes de ser chamada a funcao
function subtracao(num1, num2) {
  total = num1-num2;
  return total
}

console.log(subtracao(2,1));
console.log('total:', total); //exceção à regra - assim nao vai dar erro pq nao definido uma palavra chave na varivel total


//hoisting de função (funciona, mas nao nas funcoes anonimas)
console.log('hoisting:');
console.log(divisao(10, 5));

//funcao
function divisao(num1, num2) {
  return num1/num2;
}

// console.log(divisaoFunc(10, 5)); //Erro - hoisting de funcao anonima nao funciona
// const divisaoFunc = function(num1, num2) {
//  return num1/num2;
// }

const divisaoFunc2 = (num1, num2) => {
  return num1/num2;
}

const divisaoFunc3 = () => {
  return 5/2;
}
