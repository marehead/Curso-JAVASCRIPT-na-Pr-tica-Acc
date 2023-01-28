class Conta{
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    this.saldo -= valor;
  }

  transferir(outraConta, valor) {
    this.sacar(valor);
    outraConta.depositar(valor)
  }
}
//console.log(Object.getPrototypeOf(Conta))
var c1 = new Conta("Pedro");
var c2 = new Conta("Maria");
console.log(c1);
console.log(c2);

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