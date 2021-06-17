/*const Dom = {
    seletor: 'li',
    element() {   // mesma coisa que element: function (){}
      return document.querySelector(this.seletor);
    },
    ativo() {
      this.element().classList.add('ativo');
    },
  }*/


  const Dom = {
    seletor: 'li',
    element() {   // mesma coisa que element: function (){}
      return document.querySelector(this.seletor);
    },
    ativo() {
      this.element().classList.add('ativo');
    },
  }
  
  Dom.ativo(); // adiciona ativo ao li
  Dom.seletor = 'ul';
  Dom.ativo(); // adiciona ativo ao ul
  

function Dom(seletor){
    this.element = function() {
        return document.querySelector(seletor);
    }
    this.ativar = function(classe) {
       this.element().classList.add(classe);
}
}

const li = new Dom('li');
const ul = new Dom('ul');

const lastLi = new Dom('li:last-child');
lastLi.ativar('ativar');

/*  
function Dom() {
    this.seletor = 'li';
    const element = document.querySelector(this.seletor);
    this.ativo = function() {
      element.classList.add('ativo');
    };
  }
  
  const lista = new Dom();
  lista.seletor = 'ul';
  lista.ativo();
  
  const lastLi = new Dom();
  lastLi.seletor = 'li:last-child';
  lastLi.ativo();
  */