/*copy with ObjectAssign
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
*/
const obj1 = { 
  a: 0, 
  b: { 
    c: 0 
  },
  d: () => console.log("chamou d") 
};

const obj2 = Object.assign({}, obj1);
console.log('obj1:', obj1);
console.log('obj2:', obj2); // { a: 0, b: { c: 0 } }
console.log('obj1 === obj2: ', obj1 === obj2);
console.log('obj1.b === obj2.b: ', obj1.b === obj2.b);
console.log('obj1.d === obj2.d: ', obj1.d === obj2.d);

console.log('obj1.a = 1');
obj1.a = 1;
console.log('obj1:', obj1); // { a: 1, b: { c: 0 } }
console.log('obj2:', obj2); // { a: 0, b: { c: 0 } }

console.log('obj2.a = 2');
obj2.a = 2;
console.log('obj1:', obj1); // { a: 1, b: { c: 0 } }
console.log('obj2:', obj2); // { a: 2, b: { c: 0 } }

console.log('obj2.b.c = 3');
obj2.b.c = 3;
console.log('obj1:', obj1); // { a: 1, b: { c: 3 } }
console.log('obj2:', obj2); // { a: 2, b: { c: 3 } }

console.log("obj2.d = 'aaaaaaa'");
obj2.d = 'aaaaaaa';
console.log('obj1:', obj1); 
console.log('obj2:', obj2); 
console.log('-------------');
//-------------------------------
// Deep Clone
console.log('JSON.parse(JSON.stringify()) - Deep Clone')
const obj3 = { 
  a: 0, 
  b: { 
    c: 0 
  }, 
  d: () => console.log("chamou d") 
};
const obj4 = JSON.parse(JSON.stringify(obj3));
console.log('obj3:', obj3);
console.log('obj4:', obj4);
console.log('obj3 === obj4: ', obj3 === obj4);
console.log('obj3.b === obj4.b: ', obj3.b === obj4.b);
console.log('obj3.d === obj4.d: ', obj3.d === obj4.d);
obj3.a = 4;
console.log('obj3.a = 4');
obj3.b.c = 4;
console.log('obj3.b.c = 4');
console.log('obj3:',obj3);
console.log('obj4:',obj4); // { a: 0, b: { c: 0 } }

/*
https://www.digitalocean.com/community/tutorials/js-json-parse-stringify
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
*/