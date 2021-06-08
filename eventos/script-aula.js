const img = document.querySelector('img');

function callback() {
    console.log('clicou');
}

//img.addEventListener('click', callback);
 

const AnimaisLista = document.querySelector('.animais-lista');

function callbackLista(event){
    console.log(event.currentTarget);
    console.log(event.target);
}

//AnimaisLista.addEventListener('click', callbackLista);

console.log(AnimaisLista);


const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event){
    event.preventDefault();
    console.log('clicou')
    console.log(this.getAttribute('href'));
    console.log(event.currentTarget);
}

linkExterno.addEventListener('click', handleLinkExterno)

const h1  = document.querySelector('h1');

function handleEvent(event){
    console.log(event.type,event);
}

/*h1.addEventListener('click',handleEvent);
h1.addEventListener('mouseenter',handleEvent);
h1.addEventListener('mousemove',handleEvent);

window.addEventListener('scroll',handleEvent);
window.addEventListener('resize',handleEvent);*/

function handleKeyboard(event){
    if(event.key === 'a'){
        document.body.classList.toggle('azul')
    }
}

window.addEventListener('keydown',handleKeyboard);

const imgs = document.querySelectorAll('img');

function handleImg(event) {
    console.log(event.currentTarget.getAttribute('src'))
}

imgs.forEach((img) =>{
    img.addEventListener('click', handleImg)
});