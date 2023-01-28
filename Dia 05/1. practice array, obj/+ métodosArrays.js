let names = ['sophie', 'george', 'waldo', 'stephen', 'henry'];

let includesWaldo = names.includes('waldo');

console.log(includesWaldo);

console.log('---------------------')

let fruits = ['ban', 'mac', 'melancia'];

console.log(fruits.push('laranja'));
console.log(fruits);

console.log(fruits.pop());
console.log(fruits);

console.log(fruits.shift());
console.log(fruits);

fruits = ['ban', 'mac', 'melancia'];

console.log(fruits.indexOf('melancia'));
console.log(fruits.indexOf('melanciacccc'));//-1

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);

const months23 = ['Jan', 'March', 'April', 'June',];

console.log(months23.join());//"Jan,March,April,June"
console.log(months23.join(''));//"JanMarchAprilJune"
console.log(months23.join(' | '));//"Jan | March | April | June"

console.log(Array.isArray(months));

let palavra = 'nao sou um array';

console.log(Array.isArray(palavra));

console.log('---------------------')

let studentsAge = [17, 16, 18, 19, 21, 17];

let ableToDrink = studentsAge.filter(age => age >= 18);

console.log(ableToDrink);

// function verifyAge(age) {
//   return age >= 18
// }
function verifyAge(age) {
  if(age >= 18) {
    return true;
  }else {
    return false;
  }
}

let ableToDrink2 = studentsAge.filter(verifyAge);
//let ableToDrink2 = studentsAge.filter((age) => verifyAge(age));

console.log(ableToDrink2);

let ableToDrink3 = studentsAge.filter((age, index, arrayOriginal) => {
  return age >= 18
});

console.log(ableToDrink3);

console.log('---------------------');

const months2 = ['Jan', 'March', 'April', 'June'];

for(let i=0; i<months2.length; i++) {
  console.log(months2[i]);
  if(months2[i] === 'April'){
    break; //or return
  }
}