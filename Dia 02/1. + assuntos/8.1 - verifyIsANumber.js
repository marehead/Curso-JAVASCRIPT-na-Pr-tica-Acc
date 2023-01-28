function verifyIsNumber(method, value) {
  let isNumber = false;

  switch(method) {
    case 'typeof':
      isNumber = typeof value === 'number';
      break;

    case 'isNaN':
      isNumber = !isNaN(value);//isNaN  -> NaN -> Not a Number; true -> se for um 'NaN'
      break;

    case 'isInteger':
      isNumber = Number.isInteger(value);
      break;

    case 'isFinite':
      isNumber = Number.isFinite(value);
      break;

    case 'isFinite()':
      isNumber = isFinite(value);
      break;

    default:
      return console.log(`method: ${method} | Opção inválida!`);
  }

  console.log(`method: ${method} | isNumber: ${isNumber} | value: ${value} | type of: ${typeof value}`);
}

console.log(typeof 'Manoel');
console.log(typeof 123);
console.log(typeof {});
console.log(typeof []);

console.log(1+1);
console.log(typeof (1+1));
console.log(1+'dsa');
console.log(typeof (1+'dsa'));

console.log(1*'dsa');
console.log(typeof (1*'dsa'));

console.log('--------------------');

let resultado = 1*'dsa';

if(typeof resultado === 'number') {
  console.log("if (typeof resultado === 'number') -> resultado/100 =  ", resultado / 100);
}

console.log('parseInt(resultado) -> ', parseInt(resultado));

console.log('--------------------');
console.log("isNumber = typeof value === 'number'")
verifyIsNumber('typeof', 1*'dsa');
verifyIsNumber('typeof', 'dasdasdas');
verifyIsNumber('typeof', '0');
verifyIsNumber('typeof', '1');
verifyIsNumber('typeof', {});
verifyIsNumber('typeof', 4);
verifyIsNumber('typeof', 4.5);
verifyIsNumber('typeof', null);
verifyIsNumber('typeof', NaN);
verifyIsNumber('typeof', Infinity);
console.log('--------------------');
console.log('isNumber = !isNaN(value);')
verifyIsNumber('isNaN', 1*'dsa');
verifyIsNumber('isNaN', 'dasdasdas');
verifyIsNumber('isNaN', '0');
verifyIsNumber('isNaN', '1');
verifyIsNumber('isNaN', {});
verifyIsNumber('isNaN', 4);
verifyIsNumber('isNaN', 4.5);
verifyIsNumber('isNaN', null);
verifyIsNumber('isNaN', NaN);
verifyIsNumber('isNaN', Infinity);
console.log('--------------------');
console.log('isNumber = Number.isInteger(value);')
verifyIsNumber('isInteger', 1*'dsa');
verifyIsNumber('isInteger', 'dasdasdas');
verifyIsNumber('isInteger', '0');
verifyIsNumber('isInteger', '1');
verifyIsNumber('isInteger', {});
verifyIsNumber('isInteger', 4);
verifyIsNumber('isInteger', 4.5);
verifyIsNumber('isInteger', null);
verifyIsNumber('isInteger', NaN);
verifyIsNumber('isInteger', Infinity);
console.log('--------------------');
console.log('isNumber = Number.isFinite(value);')
verifyIsNumber('isFinite', 1*'dsa');
verifyIsNumber('isFinite', 'dasdasdas');
verifyIsNumber('isFinite', '0');
verifyIsNumber('isFinite', '1');
verifyIsNumber('isFinite', {});
verifyIsNumber('isFinite', 4);
verifyIsNumber('isFinite', 4.5);
verifyIsNumber('isFinite', null);
verifyIsNumber('isFinite', NaN);
verifyIsNumber('isFinite', Infinity);
console.log('--------------------');
console.log('isNumber = isFinite(value);')
verifyIsNumber('isFinite()', 1*'dsa');
verifyIsNumber('isFinite()', 'dasdasdas');
verifyIsNumber('isFinite()', '0');
verifyIsNumber('isFinite()', '1');
verifyIsNumber('isFinite()', {});
verifyIsNumber('isFinite()', 4);
verifyIsNumber('isFinite()', 4.5);
verifyIsNumber('isFinite()', null);
verifyIsNumber('isFinite()', NaN);
verifyIsNumber('isFinite()', Infinity);
console.log('--------------------');
verifyIsNumber('teste', 4);

/*
In comparison to the global isFinite() function, the method Number.isFinite() 
doesn't first convert the parameter to a number. This means only values of the 
type number and are finite return true, and non-numbers always return false.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite
*/