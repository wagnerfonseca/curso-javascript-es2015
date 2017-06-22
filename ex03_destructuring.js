/*
Exemplo de como desconstruir um objeto em variáveis
*/

// par de chaves do lado direito significa criar um nvo objeto
var pessoa = {nome: 'Ana', idade: 20};

// par de chaves do lado esquerdo de uma atribuição  signigica 'destructuring'
var {nome, idade} = pessoa;

console.log(nome, idade);

var {nome: n, idade: i} = pessoa;
console.log(n, i);

var {genero, situacao = 'Ativo'} = pessoa;

console.log(genero, situacao);

var empresa = {
	razao: 'Empresa X',
	endereco: { rua: 'Rua A', numero: 10 }
};
// extraindo o valores de endereço.
var { endereco: { rua, numero, cep }} = empresa;

console.log(rua, numero, cep);