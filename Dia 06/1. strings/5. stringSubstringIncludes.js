var str = "Maça, Banana, Kiwi, Uva";
var strnew  = str.split(", ");
console.log('str.split(", "):', strnew);
console.log('strnew[2]:', strnew[2]);
console.log('-----------');
console.log('str.split(", "):', str.split(", "));
arrayString = str.split(", ");
console.log(arrayString[0]);
console.log(arrayString[1]);
console.log(arrayString[2]);
console.log(arrayString[3]);

console.log("\nUsando FOR:")
for(i=0; i<arrayString.length; i++){
  console.log(arrayString[i]);
}
console.log('------------')
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
console.log(str.substring(0,4));
console.log(str.substring(6,6)); //inicio: index 6, final: index 6 -> resulta em ''
console.log(str.substring(14,4));
console.log(str.substring(4,14));
console.log(str.substring(20,3));
console.log(str.substring(40,3));
console.log('------------')

string1 = 'es-BR';
string2 = 'es-ES';

console.log(string1.includes('es'));
console.log(string2.includes('es'));