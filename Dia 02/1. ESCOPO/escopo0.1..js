var x = 1;

function teste() {
  var y=3; //error
}

teste();//se comentar, tambem dispara erro (pq nao chamou funcao)

console.log('y:', y);