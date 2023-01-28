const house = {
  number: 1,
  address: 'abc',
  objectX: {
    cost: 100000
  },
  functionX: () => console.log("Hello World!")
};

const houseCopy = house;

console.log('house: ', house);
console.log('houseCopy: ', houseCopy);
console.log('house === houseCopy: ', house === houseCopy);

console.log('house.objectX === houseCopy.objectX: ', house.objectX === houseCopy.objectX);
console.log('house.functionX === houseCopy.functionX: ', house.functionX === houseCopy.functionX);
console.log('----------------');
house.number = 4;
console.log("house.number = 4;");
console.log('house: ', house);
console.log('houseCopy: ', houseCopy);
console.log('----------------');
house.objectX = { cost: 100000 };
console.log("house.objectX = {cost: 100000};");
console.log('house: ', house);
console.log('houseCopy: ', houseCopy);
console.log('house.objectX === houseCopy.objectX: ', house.objectX === houseCopy.objectX);
console.log('----------------');
house.objectX.cost = 500;
console.log("house.objectX = {cost: 500};");
console.log('house: ', house);
console.log('houseCopy: ', houseCopy);
console.log('house.objectX === houseCopy.objectX: ', house.objectX === houseCopy.objectX);
console.log('----------------');
houseCopy.objectX = 'bb';
console.log("houseCopy.objectX = 'bb';");
console.log('house: ', house);
console.log('houseCopy: ', houseCopy);
console.log('----------------');
house.functionX = 'aaaaaaaaaaa';
console.log("house.functionX = 'aaaaaaaaaaa';");
console.log('house: ', house);
console.log('houseCopy: ', houseCopy);
console.log('----------------');
houseCopy.functionX = 'bbbbbbbbbbbbb';
console.log("houseCopy.functionX = 'bbbbbbbbbbbbb';");
console.log('house: ', house);
console.log('houseCopy: ', houseCopy);