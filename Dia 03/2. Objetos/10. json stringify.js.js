/*
JSON.stringify()
JSON.stringify() takes a JavaScript object and transforms it into a JSON string.
note: JSON.stringify() can take two additional arguments. The first one is a replacer function. 
The second is a String or Number value to use as a space in the returned string -> (example: 1 for break 1 line per key/value)
*/

let userObj = {
  name: "Sammy",
  email: "sammy@example.com",
  plan: "Pro"
};

console.log('typeof userObj: ', typeof userObj);
console.log('userObj:', userObj);

let userStr = JSON.stringify(userObj);
console.log('typeof userStr: ', typeof userStr);
console.log('userStr:', userStr);

console.log('-------------------------');

let userObj2 = {
  name: "Sammy",
  email: "sammy@example.com",
  plan: "Pro"
};

function replacer(key, value) {
  if (key === 'email') {
    return undefined;
  }
  return value;
}

//let userStrReplacer = JSON.stringify(userObj2, replacer);
let userStrReplacer = JSON.stringify(userObj2, (key, value) => replacer(key, value));
// let userStrReplacer = JSON.stringify(userObj2, (key, value) => {
//   if (key === 'email') {
//     return undefined;
//   }
//   return value;
// });

console.log('userStrReplacer:', userStrReplacer);

console.log('-------------------------');

let userObj3 = {
  name: "Sammy",
  email: "sammy@example.com",
  plan: "Pro"
};

let userStrSpace = JSON.stringify(userObj3, null, '...');
let userStrSpace2 = JSON.stringify(userObj3, null, 1);

console.log('userStrSpace:', userStrSpace);
console.log('userStrSpace:', userStrSpace2);

/*
https://www.digitalocean.com/community/tutorials/js-json-parse-stringify
https://www.w3schools.com/js/js_json_stringify.asp
*/