/*
JSON.parse()
JSON.parse() takes a JSON string and transforms it into a JavaScript object.
note: JSON.parse() can take a function as a second argument that can transform the object values before they are returned.
*/
//let userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro",}';  -> ERROR (trailing commas)
let userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';

let userObj = JSON.parse(userStr);

console.log(userObj);
console.log(userObj.name);
console.log(userObj.email);
console.log(userObj.plan);
console.log(typeof userObj);

let userStrArr = '[{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}]';

let userArr = JSON.parse(userStrArr);

console.log(userArr)
console.log(Array.isArray(userArr))
console.log(userArr[0])
console.log(userArr[0].name)

console.log('-------------------------');

let userStr2 = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';

let userObj2 = JSON.parse(userStr2, (key, value) => {
  if ((typeof value) === 'string') {
    return value.toUpperCase();
  }
  return value;
});

console.log(userObj2);

/*
https://www.digitalocean.com/community/tutorials/js-json-parse-stringify
*/