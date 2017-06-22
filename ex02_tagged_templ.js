function tag(strings, ...values) {
	console.log(strings);
	console.log(values);
	return 'Outro valor';
}

var aluno = 'Joao';
var status = 'Aprovado';

console.log(tag `${aluno} esta ${status}`);

function real(strings, ...values) {
	const resultado = [];
	values.forEach(function(value, index){
		value = (typeof value == 'number') ? `R$${value.toFixed(2)}` : value;

		// realizo a insercao dos valores informados dentro da strings
		resultado.push(strings[index], value);
	});
	return resultado.join('');
}

var preco = 29.99, parcela = 11;
console.log(real `1x de ${preco} ou 3x de ${parcela}`);