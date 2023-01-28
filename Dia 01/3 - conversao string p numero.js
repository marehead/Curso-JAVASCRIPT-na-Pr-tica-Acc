let texto = "10";
console.log(Number(texto));
console.log(parseInt(texto));//console.log(parseInt("10", 10));
console.log(parseFloat(texto));

console.log(typeof texto);
console.log(typeof Number(texto));
console.log(typeof parseInt(texto));
console.log(typeof parseFloat(texto));

console.log("*************");

console.log(Number("34.5"));
console.log(parseInt("34.5"));//console.log(parseInt('123num', 10));
console.log(parseFloat("34.5"));

console.log("*************");

console.log(Number('123numx'));//NaN - Not A Number
console.log(parseInt('123ab'));//console.log(parseInt('123num',10));
console.log(parseFloat('123num'));
console.log(parseInt(' dasd as d123ab fsd fsd fsd f'));
console.log(parseFloat(' das as d123num sdf sfsd f '));


//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt