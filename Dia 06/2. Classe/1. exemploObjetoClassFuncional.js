function Conta(titular){
  this.titular = titular;
  this.saldo = 0;

  this.depositar = (valor) => {
    this.saldo += valor; //saldo = saldo + valor
  }

  this.sacar = function(valor) {
    this.saldo -= valor;//saldo = saldo - valor
  }

  this.transferir = function(outraConta, valor) {
    this.sacar(valor);
    outraConta.depositar(valor);
  }
}

console.log('Conta.prototype.sacar:')
console.log(Conta.prototype.sacar)

var c1 = new Conta("Pedro");
var c2 = new Conta("Maria");

console.log('c1.titular:', c1.titular);
console.log('c1.saldo:', c1.saldo);
console.log('c1.depositar(100):');
c1.depositar(100);
console.log('c1.saldo:', c1.saldo);

console.log('c2.titular:', c2.titular);
console.log('c2.saldo:', c2.saldo);
console.log('c2.depositar(50):');
c2.depositar(50);
console.log('c2.saldo:', c2.saldo);
console.log('c1.transferir(c2, 60):');
c1.transferir(c2, 60);
console.log('c1.saldo:', c1.saldo);
console.log('c2.saldo:', c2.saldo);