var x = 1;

function teste() {
  y=3;
}

teste();//se comentar, dispara erro (pq nao chamou funcao)

function teste2() {
  console.log('y:', y);
}

teste2();