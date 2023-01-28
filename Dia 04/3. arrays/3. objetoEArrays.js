console.log('***********************');
props = {
  firstName: 'Manoel',
  lastName: 'Prado',
  desc: 'olha lá vc aqui!'
}

console.log('object hasOwnProperty firstName: ', props.hasOwnProperty('lastName'));
console.log('props[firstName]: ', props['firstName']);
console.log('props[naotem]: ', props['naotem']);

console.log('***********************');

console.log('Object.keys(props):', Object.keys(props));

console.log('***********************');

console.log('Object.entries(props):', Object.entries(props));

arrayEntries = Object.entries(props);

console.log('array includes Manoel: ', arrayEntries[0].includes('Manoel')); //[ 'firstName', 'Manoel' ]
console.log('array includes Manoel: ', ['Paulo', 'Manoel', 'André'].includes('Manoel')); //

array = ['Paulo', 'Manoel', 'André'];

// let firstEx = array[0];
// let secondEx = array[1];
let [firstEx, secondEx] = array;

console.log('firstEx:', firstEx);
console.log('secondEx:', secondEx);

array = [ 123, 456, 789 ];

let [prim, , terc] = array;

console.log('prim:', prim);
console.log('terc:', terc);

array = [ 123, 456, 789, 1011, 1213, 1415 ];

let [primeiro, ...rest] = array;
console.log(array);
console.log(primeiro);
console.log(rest);
console.log(Array.isArray(rest));
console.log(rest[0]);