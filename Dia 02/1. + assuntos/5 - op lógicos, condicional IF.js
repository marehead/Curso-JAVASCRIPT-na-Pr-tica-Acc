let numero = 50;

//dasdasda
/* 
&& -> AND (e) //TODOS PRECISAM SER VERDADEIROS p resultar num TRUE
|| -> OR (ou) //PELO MENOS UM PRECISA SER VERDADEIRO p resultar num TRUE
! -> NOT (não)
!true = false
!false = true
*/

if(numero>=0) {
  console.log(`${numero} >= 0`);
}

if((numero>=0) && (numero<=10)) {
  console.log('num >= 0 && <=10');
}else if((numero>20) && (numero<30)) {
  console.log('num >= 20 && <=30');
}else {
  console.log('outro intervalo');
}

for(let i=0; i<10; i++) {
  console.log(`Estou no loop for - ${i}`);
}
console.log('--------------')

for(let i=10; i>0; i--) {
  console.log(`Estou no loop for - ${i}`);
}
console.log('--------------')
// for(let i ){ ao ver Array
  
// }

let i = 0;
while(i>=0 && i<=5) {
  console.log(`Estou no loop while - ${i}`);
  i++;//i = i + 1;
}

i = 0;
do {//faz primeiro
  console.log(`Estou no loop do while - ${i}`);
  i++;//i = i + 1;
}while(i>=0 && i<=5);