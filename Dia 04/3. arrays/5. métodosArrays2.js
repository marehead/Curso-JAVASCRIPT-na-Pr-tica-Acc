const spreadableOne = [1, 2, 3, 4];
const spreadableTwo = [5, 6, 7, 8];
const juntado = [...spreadableOne, ...spreadableTwo];

console.log(juntado);

console.log('-------------');
console.log('EVERY')
// function checkAge(age) {
//   if(age >= 18){
//     return true
//   }else {
//     return false
//   }
// }
function checkAge(age) {
  console.log(age)
  return age >= 18;
}

const ages = [32, 33, 16, 40];
//             0   1   2   3

let todosSao = true;

for(let i=0; i<ages.length; i++) {
  console.log(ages[i])
  if(ages[i] < 18) {
    todosSao = false;
    break;
  }
}
console.log(`Todos são maiores de idade? ${todosSao}`)

//console.log(`is adult? ${ages.every(checkAge)}`);
console.log(`is adult? ${ages.every((age) => checkAge(age))}`);
// console.log(`is adult? ${ages.every((age) => {
//   console.log(age)
//   return age >= 18;
// })}`);

console.log('-------------');
console.log('SOME');

console.log(`is adult? ${ages.some(checkAge)}`)

console.log('-------------');
console.log('FILTER');
function buscarNumerosPares(value) {
  if (value % 2 === 0) {
    return value;
  };
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const numerosPares = numeros.filter(buscarNumerosPares);
const numerosPares = numeros.filter((numero) => buscarNumerosPares(numero));
console.log(numerosPares);

console.log('-------------');
console.log('FOREACH');
function myFunctionForEach(value, index, array) {
  txt = `${txt} ${index+1}º - ${value} | `; 
}
let txt = "";
const numbersForEach = [45, 4, 9, 16, 25];
//numbersForEach.forEach(myFunctionForEach);
numbersForEach.forEach((value, index, array) => myFunctionForEach(value, index, array));
console.log(txt);

console.log('-------------');
console.log('MAP');
/*O método map não modifica o array original. 
No entanto, a função callback invocada por ele pode fazê-lo.
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map*/
function myFunction(num) {
  return num * 10;
}

const numbers = [65, 44, 12, 4];
console.log('numbers: ' + numbers);


const newArr = numbers.map((num, indice, arrayOrig) => {
  return num * 10;
});

console.log('newArr: ' + newArr);
console.log('numbers:' + numbers);
//-----------------------------------

/*O método map não modifica o array original. No entanto, 
a função callback invocada por ele pode fazê-lo.
A sintaxe do método map() é a seguinte: arr.map(function(elemento, índice, array){  }, this);*/
function myFunction2(num, indice) {
  let newValue = num * 10;
  numbers[indice] = num - 10;
  return newValue;
}

//const newArr2 = numbers.map((elemento, índice, array) => myFunction2(elementom, índice));
const newArr2 = numbers.map(myFunction2);

console.log('newArr2: ' + newArr2);
console.log('numbers: ' + numbers);


const numbers2 = [65, 33, 12, 4, 16];
console.log('numbers2: ' + numbers2);

numbers2.map((num, indice, arrayOrig) => {
  if(num%2===0) {
    numbers2[indice] = num*2;
  }
});

console.log('numbers2: ' + numbers2);

console.log('-------------');
console.log('POP');

const fruits = ["Banana", "Orange", "Apple", "Mango"];
			
console.log(fruits);

fruits.pop();

console.log(fruits);

console.log('-------------');
console.log('SHIFT')

console.log(fruits);

fruits.shift();

console.log(fruits);

console.log('-------------');
console.log('REDUCE')
function getSum(acumulador, valor) {
  console.log(Math.round(valor));
  return acumulador + Math.round(valor);
}

const numbersEx = [15.5, 2.3, 1.1, 4.7];

console.log(`Total: ${numbersEx.reduce(getSum, 0)}`);
//console.log(`Total: ${numbersEx.reduce((acumulador, number) => getSum(acumulador, number), 0)}`);

// let acumulador = 0;
// for(let i=0; i<numbersEx.length; i++) {
// 	acumulador += Math.round(numbersEx[i]);
// 	//acumulador = acumulador + Math.round(numbersEx[i]);
// }

console.log('-------------');
console.log('FIND');
function checkAge2(age) {
  console.log(age)
  return age >= 18;
}
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const numbersExemplo2 = [4, 9, 16, 25, 29];
const first = numbersExemplo2.find(checkAge2);

console.log("First number over 18 is " + first);


console.log('-------------');
console.log('SORT');

const items = [
  { name: 'Edward', value: 21 },//0
  { name: 'Sharpe', value: 37 },//1
  { name: 'And', value: 45 },//2
  { name: 'The', value: -12 },//3
  { name: 'Magnetic' },//4
  { name: 'Zeros', value: 37 }//5
];

items.sort((a, b) => {
  if (a.name > b.name) {//a é maior que b em algum critério de ordenação
    return 1;
  }
  if (a.name < b.name) {//a é menor que b em algum critério de ordenação
    return -1;
  }
  return 0;//a deve ser igual a b
});

console.log(items);

const list = [
  'Anthony Peixoto',
  'Yasmin Costa',
  'Rafaela Aragão',
  'Dr. Raul da Rosa',
  'Juliana Vieira',
  'Otávio Jesus',
  'Heitor Oliveira',
  'Ana Beatriz da Cunha',
  'Dra. Maria Julia Costa',
  'Pedro Rezende',
  'Heloísa Nogueira',
  'Ana Carolina Nascimento',
  'Caroline Fogaça',
  'Dr. Heitor da Conceição',
  'Ryan Alves',
  'André Barbosa',
  'Davi Lucca Araújo',
  'Ana Sophia Silveira',
  'Kaique da Luz',
  'Isadora Cunha',
];
list.sort();
list.forEach(
  (name, index) => console.log(`(${index+1}) ${name}`)
);