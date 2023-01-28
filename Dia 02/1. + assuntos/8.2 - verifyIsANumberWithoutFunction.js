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
console.log(1*'dsa')
console.log(NaN)
console.log(typeof NaN)
console.log("is a number? -> typeof value === 'number'")
console.log(typeof (1*'dsa') === 'number');
console.log(typeof ('dasdasdas') === 'number');
console.log(typeof ('0') === 'number');
console.log(typeof ('1') === 'number');
console.log(typeof ({}) === 'number');
console.log(typeof (4) === 'number');
console.log(typeof (4.5) === 'number');
console.log(typeof (null) === 'number');
console.log(typeof (NaN) === 'number');
console.log(typeof (Infinity) === 'number');
console.log('--------------------');
console.log('is a number? -> !isNaN(value)')
console.log(!isNaN(1*'dsa'));
console.log(!isNaN('dasdasdas'));
console.log(!isNaN('0'));
console.log(!isNaN('1'));
console.log(!isNaN({}));
console.log(!isNaN(4));
console.log(!isNaN(4.5));
console.log(!isNaN(null));
console.log(!isNaN(NaN));
console.log(!isNaN(Infinity));
console.log('--------------------');
console.log('is a number? -> Number.isInteger(value)')
console.log(Number.isInteger(1*'dsa'));
console.log(Number.isInteger('dasdasdas'));
console.log(Number.isInteger('0'));
console.log(Number.isInteger('1'));
console.log(Number.isInteger({}));
console.log(Number.isInteger(4));
console.log(Number.isInteger(4.5));
console.log(Number.isInteger(null));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log('--------------------');
console.log('is a number? -> Number.isFinite(value)')
console.log(Number.isFinite(1*'dsa'));
console.log(Number.isFinite('dasdasdas'));
console.log(Number.isFinite('0'));
console.log(Number.isFinite('1'));
console.log(Number.isFinite({}));
console.log(Number.isFinite(4));
console.log(Number.isFinite(4.5));
console.log(Number.isFinite(null));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log('--------------------');
console.log('is a number? -> isFinite(value)')
console.log(isFinite(1*'dsa'));
console.log(isFinite('dasdasdas'));
console.log(isFinite('0'));
console.log(isFinite('1'));
console.log(isFinite({}));
console.log(isFinite(4));
console.log(isFinite(4.5));
console.log(isFinite(null));
console.log(isFinite(NaN));
console.log(isFinite(Infinity));

/*
In comparison to the global isFinite() function, the method Number.isFinite() 
doesn't first convert the parameter to a number. This means only values of the 
type number and are finite return true, and non-numbers always return false.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite
*/