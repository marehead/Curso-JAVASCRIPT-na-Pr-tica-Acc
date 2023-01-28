let message1 = "sam";
let message2 = ", how are you?";

let finalmessage = message1.concat(message2, ' Bom dia!!!!');
let finalmessage2 = `${message1}${message2} Bom dia!!!!`;

console.log(finalmessage);
console.log(finalmessage2);

const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str)
console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(0, 4));

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice