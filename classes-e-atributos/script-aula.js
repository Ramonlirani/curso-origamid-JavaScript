const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');
menu.classList.toggle('azul');

if(menu.classList.contains('azul')){  //se possuir azul ele add uma classe
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}

const animais = document.querySelector('.animais');

console.log(animais.attributes);

const img = document.querySelector('img');

const srcImg = img.getAttribute('src')

console.log(img.getAttribute('src'));