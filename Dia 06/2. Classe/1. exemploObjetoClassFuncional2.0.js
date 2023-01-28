function Conta(titular){
  this.titular = titular;
  this.saldo = 0;
}

//https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes
/*
Protótipos são o mecanismo pelo qual objetos JavaScript 
herdam recursos uns dos outros. A propriedade prototype
pode ser usada para adicionar métodos aos construtores 
existentes.
*/
Conta.prototype.depositar = function(valor) {
  this.saldo += valor; //saldo = saldo + valor
}
console.log(Conta.prototype.depositar)
Conta.prototype.sacar = function(valor) {
  this.saldo -= valor;//saldo = saldo - valor
}
console.log(Conta.prototype.sacar)
Conta.prototype.transferir = function(outraConta, valor) {
  this.sacar(valor);
  outraConta.depositar(valor)
}
console.log(Conta.prototype.transferir)

var c1 = new Conta("Pedro");
var c2 = new Conta("Maria");

console.log('c1.saldo:', c1.saldo);
console.log('c1.depositar(100):');
c1.depositar(100);
console.log('c1.saldo:', c1.saldo);
console.log('c2.saldo:', c2.saldo);
console.log('c2.depositar(50):');
c2.depositar(50);
console.log('c2.saldo:', c2.saldo);
console.log('c1.transferir(c2, 60):');
c1.transferir(c2, 60);
console.log('c1.saldo:', c1.saldo);
console.log('c2.saldo:', c2.saldo);