var dados = {
 nome: 'Ramon',
 sobrenome: 'Lirani',
 idade: 24,
 cidade: 'Curitiba',
}


dados.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}

var carro = {
  preco:1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  latir(pessoa) {
    if(pessoa === 'homem'){
      return 'Latir'
    } else {
      return 'Nada'
    }
  }
}


