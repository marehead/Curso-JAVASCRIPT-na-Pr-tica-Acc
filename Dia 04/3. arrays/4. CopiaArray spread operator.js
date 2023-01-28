console.log('------------------')

let arr = ['a', 'b', 'c']; //endereco = 1234

let arr2 = arr;  //endereco = 1234

console.log('arr2 === arr', arr2 === arr);

console.log(arr)
console.log(arr2)

arr2[0] = 'z';

console.log(arr2)
console.log(arr)

console.log('------------------')

let arrNew = ['a', 'b', 'c'];

let arrNew2 = [...arrNew]; 

console.log(arrNew2 === arrNew);

console.log(arrNew)
console.log(arrNew2)

arrNew2[0] = 'z';

console.log(arrNew2)
console.log(arrNew)