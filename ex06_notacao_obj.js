var nome = 'Jose', anoNascimento = 1983;

function idade() {
	return new Date().getFullYear() - this.anoNascimento;
}

var pessoa = {
	nome, 
	anoNascimento,
	idade,
	toString(){return `${this.nome} = ${this.idade()}`;}
}

pessoa.anoNascimento = 2000;
console.log(pessoa.toString());