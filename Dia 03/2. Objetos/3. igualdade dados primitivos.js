/*
Os valores primitivos no JavaScript são: String , Number , Boolean , 
Null (primitivo especial), undefined e Symbol . Esses valores são imutáveis, 
então quando alteramos alguma variável com algum desses dados é criado uma 
nova referência em memória, o mesmo acontece quando atribuímos uma variável a outra.
*/
let string1 = 'abc';
let string2;

console.log('string1 === string2:', string1 === string2);
console.log('string2 = string1');
string2 = string1;
console.log('string1 === string2:', string1 === string2);
console.log("string1 = 'abcdef'");
string1 = 'abcdef';
console.log('string1: ', string1);
console.log('string2: ', string2);
console.log('string1 === string2:', string1 === string2);

const number1 = 1;
const number2 = 1;

console.log(number1 === number2);

const stringnumb1 = '1';

console.log(stringnumb1 === number1);

console.log(stringnumb1 == number1);

