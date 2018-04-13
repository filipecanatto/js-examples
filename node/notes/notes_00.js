/** examples of the article conhecendo-o-operator-new-e-os-prototipos-no-javascript and 
	http://blog.caelum.com.br/conhecendo-o-operator-new-e-os-prototipos-no-javascript/

	fonts: http://blog.caelum.com.br/conhecendo-o-operator-new-e-os-prototipos-no-javascript,
		   http://blog.caelum.com.br/criacao-de-objetos-em-javascript/ **/

/** porpouse: understand the operator "this" in js and some manners of build objects **/


// builder functions

// this builder function uses the 'Constructor paradigm' by Nicholas Zakas in his book 'Professional JavaScript for Web Developers'
var Pessoa = function(nome, email) {
	console.log(this === global);
	console.log(typeof(this));
    this.nome =  nome;
    this.email = email;
	
	/** it is not a good idea to use this function like above, because there will be one method to each instance of the object in the ram memory,
		otherwise we can solve this problem using prototypes **/
	this.speak = function(){
		console.log("my name is "+this.nome+" and my email is "+this.email);
	}
}

var Curso = function(nome) {
    this.nome = nome;
    return "curso "+ nome;
}

var Curso = function(nome, duracao) {
    this.duracao = duracao;
    var novoCurso = {"nome" :  nome, "horario" : duracao};
    return novoCurso;
}

var Carro = function(nome, chassi){
     return {
         nome : nome,
         chassi: chassi,
         getDesc: function(){
             console.log("The car is called "+this.nome+" and its chassi number is "+this.chassi);
         }
     };
};

// testing the "this" operator

// prototypes
Pessoa.prototype.sayHello = function(){
	console.log("Hello, my name is "+this.nome);
}

//override using one alternative syntax. it is called Pseudo-classical pattern by Douglas Crockford 
Pessoa.prototype = {
	
	// constructor function
	constructor: Pessoa,
	
	sayGoodBye : function(){
		console.log("Bye"); 
	},
	
	eat : function(){
		console.log("eat");
	},
	
	sayHello : function() {
		console.log("Hello, my email is "+this.email);
	}
}


// ex1
console.log("\n creating new objects");
var joao = new Pessoa("João da Silva",  "joao@da.silva"); // criando nova pessoa, object
console.log(joao.nome); // João da Silva
console.log(joao.email); // joao@da.silva
joao.speak();
// using prototype
joao.sayHello();

// ex2
var ads = new Curso("Analysis and system development\n", 20);
typeof(ads); // object
typeof(ads.duracao); // undefined (internal function variable)
console.log(ads.horario);


// creating onlny news attributes (without new)
console.log("creating onlny news attributes (without new)\n");
Pessoa('filipe', 'filipe@filipe@gmail.com');

console.log(global.nome);
console.log(global.email);

// creating objects with clousures, it look like more with java
var hb20 = Carro('hb20', '21654654');
hb20.getDesc();










