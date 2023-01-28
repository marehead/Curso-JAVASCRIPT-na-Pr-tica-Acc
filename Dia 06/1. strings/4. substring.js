var str = "Apple, Banana, Kiwi";
//         0123456789012345678
// Qual o intervalo para obter somente a Banana
var res1 = str.substring(0,5);
var res2 = str.substring(7,6);//str.substring(6, 7); espaco vazio " " 
//var res2 = str.substring(6,6);//nada ""
var res3 = str.substring(15,4);//var res3 = str.substring(4, 15);
console.log('res1:' ,res1);
console.log('res2:' ,res2);
console.log('res3:' ,res3);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring