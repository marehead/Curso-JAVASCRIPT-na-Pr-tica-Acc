function isValid(fruit){
  let fruitLowerCase = fruit.toLowerCase();
  return (
    fruitLowerCase==='maçã' 
      || fruitLowerCase==='banana' 
      || fruitLowerCase==='uva'
      || fruitLowerCase==='morango'
      || fruitLowerCase==='laranja'
  );
}

const isValid2 = (fruit) => {
  let fruitLowerCase = fruit.toLowerCase();

  switch(fruitLowerCase){
    case 'maçã':
    case 'banana':
    case 'uva':
    case 'morango':
    case 'laranja':
      return true;
    default:
      return false;
  }
}

const isValid3 = (fruit) => {
  const fruits = ['maçã', 'banana', 'uva', 'morango'];
  let fruitLowerCase = fruit.toLowerCase();

  return fruits.includes(fruitLowerCase);
}

console.log('IF');
console.log('123', isValid('123'))
console.log('UvA', isValid('UvA'))
console.log('BANANA', isValid('BANANA'))
console.log('-----------')
console.log('SWITCH');
console.log('123', isValid2('123'))
console.log('UvA', isValid2('UvA'))
console.log('BANANA', isValid2('BANANA'))
console.log('-----------')
console.log('INCLUDES');
console.log('123', isValid3('123'))
console.log('UvA', isValid3('UvA'))
console.log('BANANA', isValid3('BANANA'))