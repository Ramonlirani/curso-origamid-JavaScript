const img = document.querySelectorAll('img');
console.log(img);

const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);

const h2Animais = document.querySelector('.animais-descricao h2');
console.log(h2Animais);

const paragrafos = document.querySelectorAll('p');

console.log(paragrafos[paragrafos.length - 1]);
//ou
console.log(paragrafos[--paragrafos.length]);