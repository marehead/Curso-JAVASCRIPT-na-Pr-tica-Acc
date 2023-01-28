function validateCpf(strCPF) {
  try{
    var soma = 0;
    var resto;
    if (strCPF == "00000000000") return false;

    for (i=1; i<=9; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(strCPF.substring(9, 10)) ) return false;

    soma = 0;
    for (i = 1; i <= 10; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
  } catch(e){
    return false;
  }
};

const arrayCpf = [
  '68874744501',
  '48488528620',
  '99393939393',//invalido
  '54150194998',
  '99393939223',//invalido
]

console.log("Array de CPFs: ", arrayCpf);

const arrayCpfsInvalidos = arrayCpf.filter((item) => !validateCpf(item))
console.log("Array de CPFs inválidos: ", arrayCpfsInvalidos);

const arrayCpfsInvalidos2 = arrayCpf.map((item) => {
  if(!validateCpf(item)) {
    return item
  }
});
console.log("Array de CPFs inválidos: ", arrayCpfsInvalidos2);

const arrayCpfsInvalidos3 = [];
arrayCpf.map((item) => {
  if(!validateCpf(item)) {
    arrayCpfsInvalidos3.push(item)
  }
});
console.log("Array de CPFs inválidos: ", arrayCpfsInvalidos3);

const arrayCpfsInvalidos4 = []
arrayCpf.forEach((item) => {
  if(!validateCpf(item)) {
    arrayCpfsInvalidos4.push(item)
  }
});
console.log("Array de CPFs inválidos: ", arrayCpfsInvalidos4);