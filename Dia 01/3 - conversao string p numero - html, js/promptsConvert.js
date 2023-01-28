//parseInt(); //converter para INTEIRO
//parseFloat(); //converter para REAL
//prompt(); //receber dado do usuário
//.toFixed(2) //fixar numero de casas após a vírgula
var numero1 = parseFloat(prompt("Digite o 1º número"));
var numero2 = parseFloat(prompt("Digite o 2º número"));

console.log("Adição: " + (numero1+numero2));
console.log("Subtração: " + (numero1-numero2));
console.log("Multiplicação: " +  (numero1*numero2));
console.log("Divisão: " + (numero1/numero2));
console.log("Potenciação: " + (numero1**numero2));
console.log("Divisão (fixando nº de casas decimais após a vírgula): " + (numero1/numero2).toFixed(2));

console.log(6789+"0");
console.log(6789+123);
console.log("Olá " + "mundo");
console.log(200-58);
console.log(2*245);
console.log(6789/3);
console.log(6789**2);