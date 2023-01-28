let variavel;
console.log(variavel);

/*
null e undefined são valores falsey, ou seja, são convertidos para false quando 
forçados para booleanos:
*/

if(null || undefined) { /* nunca executa */ }
console.log('!null === true:', !null === true);
console.log('!undefined === true:', !undefined === true);

let obj = {
  name: 'Manoel',
  age: 26,
  
}

console.log('obj.birthDate:', obj.birthDate);
if(obj.birthDate) {
  console.log('data de aniversario:',obj.birthDate);
  var address = {
    street: 'rua ex',
    number: 122
  }
}

console.log('address:', address);

//optional chaining

console.log('address?.street:', address?.street);

