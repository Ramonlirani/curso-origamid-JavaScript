function isTruthy(dado) {
  return !!dado;
}

function perimetroQuadrado(lado){
  return lado * 4;
}

function nomeCompleto(nome, sobrenome){
  return `${nome} ${sobrenome}`;
}

function isEven(numero) {
  var modulo = numero % 2;
  if(modulo ===0) {
    return true;
  } else {
    return false;
  }
}

function tipoDeDado(dado) {
  return typeof dado;
}

addEventListener('click', function(){
  console.log('Ramon Lirani')
})