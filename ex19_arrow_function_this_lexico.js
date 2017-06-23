function Pessoa() {
	// para garantir que o this sempre aponte para o objeto Pessoa
	// que o this sempre seja do construtor da classe
	//var self = this;
	this.idade = 0;

	// com arrow function podemos garantir que o this pertence ao contexto do contrutor da classe
	setInterval(() => {
		//self.idade++;
		this.idade++;
		//console.log(self.idade);
		console.log(this.idade);
	}, 1000);
}

new Pessoa();