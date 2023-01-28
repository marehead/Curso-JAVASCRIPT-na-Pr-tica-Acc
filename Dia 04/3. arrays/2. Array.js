let objeto = {
  dsd: 'asdas',
  dasd: 232
}

let variavel = 12;

//              0        1        2
let array = ['Manoel', 'Jose', 'Maria'];//array.length = 3
let array2 = [1, 2, 3, 155];
//            0  1  2   3
let array3 = [
  {
    case: 1,
    comodos: 34,
    rua: 'asda'
  },
  {
    case: 2,
    comodos: 21,
    rua: 'a das d aa'
  },
  {
    case: 3,
    comodos: 45,
    rua: 'fdf  df'
  }
];
console.log(typeof array);
console.log(Array.isArray(array));
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

console.log(array3[0].case);
console.log(array3[1]);
console.log(array3[2]);
console.log('--------------')
for(let i=0; i<3; i++){
  console.log(array[0]);
}
console.log('--------------')
for(let i=0; i<3; i++){
  console.log(array[i]);
}
console.log('--------------')
for(let i=0; i<array.length; i++){
  console.log(array[i]);
}
console.log('--------------')
for(let index in array){
  console.log(array[index]);
}

console.log('--------------');

let array4 = [ 
  [1, 2, 3, 4, 5], 
  [6, 7, 8, 9, 10], 
  [11, 12, 13, 14, 15] 
];

console.log(array4[0]);
console.log(array4[1]);
console.log(array4[2]);
console.log('--------------');
console.log(array4[0][0]);
console.log(array4[0][2]);

// let array4 = [ 
//   [1, 2, 3, 4, 5],//0
//   [6, 7, 8, 9, 10],//1 
//   [11, 12, 13, 14, 15]//2 
// ];

console.log('--------------')
for(let i=0; i<array4.length; i++){
  console.log(`início do loop i=${i}`)
  console.log(`percorrendo o array interno ${array4[i]}`)
  for(let y=0; y<array4[i].length; y++){
    console.log(`array4[i][y] = array4[${i}][${y}] = ${array4[i][y]}`)
  }
  console.log(`final do loop i=${i}`)
}
