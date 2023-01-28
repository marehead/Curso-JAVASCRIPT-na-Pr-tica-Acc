let nome = 'Cintia';

// if(nome==='Manoel') {
//   console.log('asddasd')
// }else if(nome==='Cintia'){
//   console.log('asddasd')
// }else if(nome==='João'){
//   console.log('dasd asdas d')
// }else {
//   console.log('default')
// }

switch(nome) {
  case 'Manoel Junior asd':
  case 'Manoel':
    console.log('Manoel');
    break;
  case 'Cintia':
    console.log('Cintia é asdas d asd ');
    break;
  case 'Joao':
    console.log('Joao é asd asd  ');
    break;
  default:
    console.log('default')
    break;
}

console.log('------------')

switch(nome) {
  case 'Manoel':
    console.log('O nome dele é Manoel');
    break;
  case 'Cintia':
    console.log('O nome dele é Cintia');
    break;
  default:
    console.log('Opção inválida!');
    break;
}

let numero = 10;

switch(numero) {
  case 10:
    console.log('O número é 10');
    break;
  case 20:
    console.log('O número é 20');
    break;
  default:
    console.log('Opção inválida!');
    break;
}