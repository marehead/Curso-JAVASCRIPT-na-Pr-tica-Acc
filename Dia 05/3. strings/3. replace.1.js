/*String.prototype.replace()
Resumo
O método replace() retorna uma nova string com algumas ou todas 
as correspondências de um padrão substituídas por um determinado 
caractere (ou caracteres). O padrão pode ser uma string ou uma RegExp, 
e a substituição pode ser uma string ou uma função a ser chamada para 
cada correspondência. Se o padrão for uma string, 
apenas a primeira ocorrência será substituída.

A string original não é modificada.

Sintaxe: str.replace(regexp|substr, newSubStr|function)*/
var str = "Apple, Banana, Kiwi, Banana, Laranja, Banana";
let stringNew = str.replace(' ', '');
console.log('str:', str);
console.log('stringNew:', stringNew);
var novoText = str.replace(/\s/g, "|");
console.log('novoText:', novoText);
/*acima -> se eu colocasse somente " " no 1º parâmetro do replace, ele só iria trocar
a primeira ocorrencia. Mas se vc coloca uma expressao regular que refencia p espaço vazio, 
ele pega todas as ocorrencias*/

var novoText2 = str.replace(/\s/g, "\n");
console.log('novoText2:', novoText2);