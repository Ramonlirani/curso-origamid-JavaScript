// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome,sobrenome,idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

const andre = new Pessoa('André', 'Rafael', 28);

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLAllCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLIELEMENT
li.click; // function
li.innerText; //string
li.value;  //number 
li.hidden;  //boolean
li.offsetLeft; //number
li.click(); //undefined 

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //string pq o "name" que contou como constructor