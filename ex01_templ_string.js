var nome = 'Wagner';
var es6 = `
	Olá ${nome}!`;

console.log(es6);

function upper(s) {
	return s.toUpperCase();
}

console.log(`1 + 1 = ${ 1 + 1 }`);
console.log(`Ola... ${upper(nome)}`);
