const x = 1;

function teste() {
  let y=3;
  console.log('x:', x);
}

teste();//se comentar, dispara erro (pq nao chamou funcao)

console.log('y:', y);//Error. y existe somente em teste()