//dado estrutural {propriedade: "valor"}
/*
const carro = 'ford';
carro = 'chev';
console.log(carro);
*/

const obj = {
  casa: "Mansão",
  numero: 44
}

console.log(obj);
console.log(obj.casa);
console.log(obj.numero);

obj.rapel = "perigoso";
obj.numero = 100;

console.log(obj);
console.log(obj.casa);
console.log(obj["casa"]);

console.log("*********************");
// let casaObj = obj["casa"];
// let numero = obj.numero;
// let fraseRapel = obj.rapel;

//({casa, numero, rapel:fraseRapel} = obj)
let { casa, numero, rapel:fraseRapel } = obj//desestruturação
console.log(casa);
console.log(numero);
console.log(fraseRapel);
console.log('--------------')
const objExemplo = {
  casa: "Mansão",
  numero: 44,
  rapel: 'Perigoso'
}

let { rapel:outrorapel, ...restante } = objExemplo; //spread operator ...
console.log(outrorapel);
console.log(restante);
console.log(restante.casa);

//percorrendo um objeto
var pessoas = {
  name: 'Manoel',
  lastName: 'Prado',
  idade: 26
}
console.log("*********************"); 
//['name', 'lastName', 'idade']
Object.keys(pessoas).forEach((key) => {
  console.log(key + " = " + pessoas[key]);
});
console.log("*********************");
for(let key in pessoas) {
  console.log(`${key} = ${pessoas[key]}`)
}

const aluno = {
  nome: "Pedro",
  idade: 12,
  cpf: "2312312312",
  address: 'dasdas',
  street: 'dasdas'
}

//const {nome, idade, cpf} = aluno;//desestruturação
//console.log(nome);
console.log('--------------------------------------');

const objetoAleatorio = {
  chave1: 1,
  chave2: 2,
  chave3: 3,
}

const novonovoObjeto = {
  chaveNova1: 4,
  chaveNova2: 5,
  ...objetoAleatorio
}

console.log('--------------------------------------');
console.log('spread operator');
const { nome, ...rest } = aluno;//desestruturação & spread operator

console.log(rest)

const newObjetc = {
  apartamento: 55,
  ...rest
}

console.log('newObjetc: ')
console.log(newObjetc)

console.log('delete newObjetc.address')
delete newObjetc.address;
console.log(newObjetc);

const cadastro = {
  fullname: "Manoel Prado",
  age: 26,
  address: {
    postalCode: 312312,
    street: "Rua 1",
    city: "Belo Horizonte"
  }
}
console.log('--------------------------------------');
console.log(cadastro.fullname);
console.log(cadastro.address);
console.log(cadastro.address.postalCode);
console.log('--------------------------------------');
console.log('optional chaining')
//Optional Chaining (?.)
console.log(cadastro.naotem);
// if(cadastro.naotem){
//   cadastro.naotem.exemplo
// }
console.log(cadastro.naotem?.exemplo);//retorna undefined
//console.log(aluno.naotem.exemplo); //erro - tentando acessar uma prop de um undefined

 //funcao e OBJETO
function teste({ firstName, lastName, desc }) {
  console.log(firstName, lastName, desc);
}

props = {
  firstName: 'Manoel',
  lastName: 'Prado',
  desc: 'olha lá vc aqui!'
}

teste({
  desc: 'olaaa',
  firstName: 'Manoel',
  lastName: 'Prado'
});
teste(props);
teste({...props});

//...props

function isPositive(n1) {
  if((n1%2)===0) {
    return true;
  }else {
    return false;
  }
}

function isPositive2(n1) { //forma tradicional
  return n1%2===0;
}

const isPositive3 = function(n1) { //funcao anonima
  return n1%2===0;
}

const isPositive4 = (n1) => { //arrow function
  return n1%2===0;
}

const isPositive5 = n1 => n1%2===0;

console.log(isPositive(2));
console.log(isPositive(3));
console.log(isPositive2(2));
console.log(isPositive2(3));
console.log(isPositive3(3));
console.log(isPositive4(3));
console.log(isPositive5(3));

console.log('---------------------?.')

const products = {
  name: 'Coca',
  price: 7.5,
  type: 2,
  // special: {
  //   offer: true
  // }
};

const objetoNovo = {
  name: products.name,
  id: 'teste'
}

products?.special?.offer && (objetoNovo.hasOffer = products.special.offer);

console.log(objetoNovo.hasOffer)

console.log('---------------------')

const exemploObj = {
  nome: 'fulano',
  admin: false,
  age: 25,
  height: 1.87
}

if(exemploObj.admin===true) {
  console.log(`${exemploObj.nome} é admin`);
}else {
  `${exemploObj.nome} NÃO é admin`
}

console.log(exemploObj.admin===true ? `${exemploObj.nome} é admin` : `${exemploObj.nome} NÃO é admin`);
console.log(exemploObj.admin ? `${exemploObj.nome} é admin` : `${exemploObj.nome} NÃO é admin`);
console.log(
  ((exemploObj.admin) && (exemploObj.age>30)) 
    ? `${exemploObj.nome} é admin válido` 
    : `${exemploObj.nome} NÃO é admin`);

console.log('-----------------');
console.log(exemploObj.admin && `${exemploObj.nome} é admin`);

console.log(
  ((exemploObj.admin) && (exemploObj.age>30)) 
    ? `${exemploObj.nome} é admin válido` 
    : (exemploObj.height>1.70) 
      ? `${exemploObj.nome} alto`
      : `${exemploObj.nome} NÃO é alto`);