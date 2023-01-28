//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
/*
1º param: indice
Índice o qual deve iniciar a alterar a lista. 
Se maior que o tamanho total da mesma, nenhum 
elemento será alterado. Se negativo, irá iniciar 
a partir daquele número de elementos a partir do fim.

2º param: deleteCount
- Um inteiro indicando o número de antigos elementos 
que devem ser removidos.
- Se o parâmetro deleteCount não é especificado, 
ou se é maior que o número de elementos restantes na 
lista iniciando pelo índice, então todos os elementos 
até o fim da lista serão deletados.
- Se deleteCount é 0, nenhum elemento é removido. 
Neste caso você deve especificar pelo menos um novo elemento.

3º param: elemento1, ..., elementoN
Os elementos a adicionar na lista. Se você não especificar 
nenhum elemento, splice simplesmente removerá elementos da 
mesma.
*/

const months = ['Jan', 'March', 'April', 'June'];
console.log(months);
console.log("months.splice(1, 0, 'Feb'):");
months.splice(1, 0, 'Feb');
console.log(months);
console.log('-------------------')
const months0 = ['Jan', 'March', 'April', 'June'];
console.log(months0);
console.log("months0.splice(0, 0, 'Feb'):");
months0.splice(0, 0, 'Feb');
console.log(months0);
console.log('-------------------')
const months2 = ['Jan', 'March', 'April', 'June'];
console.log(months2);
console.log("months2.splice(1, 0, 'Feb', 'Feb', 'Feb'):");
months2.splice(1, 0, 'Feb', 'Feb', 'Feb');
console.log(months2);
console.log('-------------------')
const months3 = ['Jan', 'March', 'April', 'June'];
console.log(months3);
console.log("months3.splice(1, 1, 'Feb'):");
months3.splice(1, 1, 'Feb');
console.log(months3);
console.log('-------------------')
const months4 = ['Jan', 'March', 'April', 'June'];
console.log(months4);
console.log("months4.splice(1, 2, 'Feb'):");
months4.splice(1, 2, 'Feb');
console.log(months4);
console.log('-------------------')
const months5 = ['Jan', 'March', 'April', 'June'];
console.log(months5);
console.log("months5.splice(1, 10, 'Feb'):");
months5.splice(1, 10, 'Feb');
console.log(months5);
console.log('-------------------')
const months6 = ['Jan', 'March', 'April', 'June'];
console.log(months6);
console.log("months6.splice(10, 0, 'Feb'):");
months6.splice(10, 0, 'Feb');
console.log(months6);
console.log('-------------------')
const months7 = ['Jan', 'March', 'April', 'June'];
console.log(months7);
console.log("months7.splice(10, 1, 'Feb'):");
months7.splice(10, 1, 'Feb');
console.log(months7);
console.log('-------------------')
const months8 = ['Jan', 'March', 'April', 'June'];
console.log(months8);
console.log("months8.splice(-1, 0, 'Feb'):");
months8.splice(-1, 0, 'Feb');
console.log(months8);
console.log('-------------------')
const months9 = ['Jan', 'March', 'April', 'June'];
console.log(months9);
console.log("months9.splice(-1, 1, 'Feb'):");
months9.splice(-1, 1, 'Feb');
console.log(months9);