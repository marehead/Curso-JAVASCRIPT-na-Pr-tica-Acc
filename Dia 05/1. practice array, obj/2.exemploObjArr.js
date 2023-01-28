const obj = {
  name: 'Manoel',
  arr: []
}

console.log(obj);
//obj['arr'] = obj['arr'] || [];
// if (!obj4['arr']) {
//   obj4['arr'] = []
// }
obj['arr'].push(1);
console.log(obj);

console.log('--------------------')

const obj2 = {
  name: 'Manoel',
  arr : [10]
}

console.log(obj2);
//obj2['arr'] = obj2['arr'] || [];
obj2['arr'].push(1);
console.log(obj2);

console.log('--------------------')

const obj3 = {
  name: 'Manoel'
}

console.log(obj3);
obj3['arr'] = obj3['arr'] || [];
obj3['arr'].push(1);
console.log(obj3);

console.log('--------------------')
console.log('obj4')

const obj4 = {
  name: 'Manoel'
}

console.log(obj4);
if (!obj4['arr']) {
  obj4['arr'] = []
}
obj4['arr'].push(1);
console.log(obj4);

console.log('--------------------')

const obj5 = {
  name: 'Manoel'
}

console.log(obj5);
!obj5['arr'] && (obj5['arr'] = []);
obj5['arr'].push(1);
console.log(obj5);