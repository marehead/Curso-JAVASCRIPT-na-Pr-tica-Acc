const house = {
  number: 1,
  address: 'abc',
  object: {
    cost: 100000
  }
};

let house2 = {};

console.log('house === house2: ', house === house2);

house2 = house;
//house2 = {...house}; //certo
console.log('house2 = house');

console.log('house === house2: ', house === house2);

house2.number = 2;
console.log('house2.number = 2');

console.log('house', house);
console.log('house2', house2);

console.log('house === house2: ', house === house2);
