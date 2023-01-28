var str = "Apple, Banana, Kiwi";
var arrayString = str.split(", ");
console.log(arrayString);

var stringfinal='';
for(i=0; i<arrayString.length; i++){
  stringfinal = stringfinal + arrayString[i] + " | ";
}
console.log('stringfinal:', stringfinal);