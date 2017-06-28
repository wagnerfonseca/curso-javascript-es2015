this.desc = 'funny arrow function';

console.log(this);

// em uma funcao normal o this aponta para a variavel 'global'
const func = function() {
	console.log(this === global);
}
func();

// em um arrow function aponta para 'module.exports'
const arrowFunc = () => console.log(this, this === module.exports);
arrowFunc();

// fora do escopo de uma funcao o this aponta para 'module.exports' idêntico ao arrow function
console.log(this === global)
console.log(this === undefined)
console.log(this === module.exports)