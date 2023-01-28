let today = new Date();
console.log('today = new Date():', today);
console.log(typeof today)
console.log('today.getMonth()+1:', today.getMonth()+1); //começa como 0
console.log('today.getDate():', today.getDate());
console.log('today.getFullYear():', today.getFullYear());
console.log('today.toLocaleString():', today.toLocaleString('pt-BR'));
console.log('today.toLocaleString():', today.toLocaleString('en-US'));
console.log(typeof today.toLocaleString())
console.log('today.toLocaleDateString():', today.toLocaleDateString('en-US'));
console.log('today.toLocaleTimeString():', today.toLocaleTimeString());
//timezones: https://stackoverflow.com/questions/38399465/how-to-get-list-of-all-timezones-in-javascript
//'Asia/Dubai'

const options = {
	timeZone: 'America/Sao_Paulo',
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric',
	year: 'numeric',
	month: 'numeric',
	day: 'numeric'
};
//	fractionalSecondDigits: 0~3
const date = new Intl.DateTimeFormat('pt-BR', options);
const dateFormatted = date.format(today);
console.log('dateFormatted = date.format(today): ', dateFormatted);
console.log(typeof dateFormatted);

var teste = new Date('2022-08-01');
console.log(teste)
console.log(typeof teste)

/*
const options = { // hora
	timeZone: 'America/Sao_Paulo',
	hour: 'numeric',
	minute: 'numeric'
};
*/