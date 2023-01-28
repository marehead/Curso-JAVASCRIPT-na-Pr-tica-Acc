var a = 10;
var b = 5;

console.log("a^b: " + (a**b));//exponenciacao
console.log("a%b: " + (a%b));//resto da divisao

var c = 0;

//atribuição
console.log("Atribuição");
c += a; // c = c + a = 0 + 10 = 10
c += a; // c = c + a = 10 + 10 = 20
c += a; // c = c + a = 20 + 10 = 30
console.log("c=" + c);
c *= 2; // c = c * 2 = 30 * 2 = 60
c *= 2; // c = c * 2 = 60 * 2 = 120
console.log("c=" + c);

//incremento
console.log("Incremento");
var x = 0;
var y = 0;
var z = 0;
console.log("x: " + (++x));// x = x + 1 = 0 + 1 = 1
console.log("x: " + x);
console.log("y: " + (y++));// y = y + 1 = 0 + 1 = 1
console.log("y: " + y);

console.log("z: " + (--z));// z = z - 1 = 0 - 1 = -1
console.log("z: " + z);

/*
quando se utiliza ++variavel é inicialmente incrementada a variável e depois utilizado o conteúdo.
quando se utiliza variavel++ é inicialmente utilizado o conteúdo da variável e depois incrementada a variável.
*/
//variaval  -> x  --->  x = 3
// = =(igual)   e  = = = (estritamente igual - no tipo e valor)
// ! =(diferente)   e  ! = = (estritamente diferente - no tipo e valor)

/**
 // De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 
 */

let var1 = 20;
let var2 = '20';

console.log('var1==var2', var1==var2);
console.log('var1===var2', var1===var2);

console.log("*************");
console.log('true==1', true==1);
console.log('true===1', true===1);
console.log('false==0', false==0);
console.log('false===0', false===0);
console.log("*************");
console.log('3>2>1===false', 3>2>1===false);//(3>2) = true  -> true>1 = false -> false === false = true
console.log('3>2>1', 3>2>1); //(3>2) = true  -> true>1 = false
console.log('3>2==1', 3>2==1); //(3>2) = true  -> true==1 = true
console.log('3>2===1', 3>2===1); //(3>2) = true  -> true===1 = false

console.log('true && 2>1', 3>2 && 2>1); //true && true = true

condicao = 'verde';//azul, amarela, verde

if(condicao==='azul'){//se for verdadeiro
  console.log('condicao azul')
} else {
  console.log('condicao amarela')
} 

var w = 40;

if(w%10===0) {
  console.log("Divisível por 10")
} else {
  console.log("Não é divisível por 10")
}

(w%10===0) ? console.log("Divisível por 10") : console.log("Não é divisível por 10");

if(condicao==='azul'){//se for verdadeiro
  console.log('condicao azul')
} else if(condicao==='amarela'){
  console.log('condicao amarela')
} else {
  console.log('condicao verde')
}

(condicao==='azul') 
  ? console.log('condicao azul') 
  : (
      (condicao==='amarela') 
        ? console.log('condicao amarela') 
        : console.log('condicao verde')
    );