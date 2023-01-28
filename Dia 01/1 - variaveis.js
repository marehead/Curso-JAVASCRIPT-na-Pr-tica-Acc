clima = true;
console.log(typeof clima);

clima = "quente";
console.log(typeof clima);

clima = 12;
console.log(typeof clima);

clima = {};
console.log(typeof clima);

// const nao pode alterar o valor nem o tipo
const variavel = true;

//variavel = "quente";//erro

console.log(typeof variavel);


//escopo (var é global - hoisting = elevação)
//const e let sao locais
console.log(a); //undefined
var a = 1;
console.log(a);

// console.log(b);
// let b = 5; // error

// console.log(c);
// let c = 5; // error

//o codigo acima nao da erro (imprime undefined) pq a variavel a é elevada e declarada acima:
/**
 var a;
 console.log(a);//undefined
 a = 1;
 */

//concatenacao - interpolação
//a = 1
let b = 2

console.log("Casa amarela, número " + a);//concatenação
console.log("Casa amarela, número",a);//concatenação
console.log("Casa amarela, número", a, '******');//concatenação
console.log(`Casa amarela, número ${a-b}`);//interpolação

num1 = 1;
num2 = 2;

console.log(num1+num2);
console.log("Soma: " + num1+num2);
console.log("Soma: " + (num1+num2));
console.log(`Soma: ${num1+num2}`);//interpolação ${}

const valor = 100_000_000;//100000000

//valor = 100_000_000_000;//error

