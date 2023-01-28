let str = "apple, banana, kiwi";
console.log("tira ',': ", str.replace(",", ""));//tira uma ',' apenas
console.log("tira ',': ", str.replace(/\,/g, ""));//tira ','
console.log("tira 'a': ", str.replace(/\a/g, ""));//tira 'a'
console.log("tira 'A': ", str.replace(/\A/g, ""));//tira 'a'
console.log("tira 'pp': ", str.replace(/\pp/g, ""));//tira 'pp'
console.log("tira 'Apple': ", str.replace(/\Apple,/g, ""));//tira 'Apple'
console.log("tira 'apple': ", str.replace(/\apple,/g, ""));//tira 'apple'

console.log('---------------');

let str2 = "Apple, Banana, Kiwi";
console.log("tira 'apple': ", str2.toLowerCase().replace(/\apple,/g, ""));

