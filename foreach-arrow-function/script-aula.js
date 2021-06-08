const imgs = document.querySelectorAll('img');


imgs.forEach(function(item, index, array){  //item é colocado p mostrar cada item, e index é para mostrar aonde ta a o item, e o array é a propria array(imgs)
   //console.log(item, index, array)
});

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});

const imgs = document.querySelectorAll('img');

let i = 0;
img.forEach(function(){    //versao function extendida
   console.log(i++)
});

img.forEach(() => console.log(i++));  //versao function curta
