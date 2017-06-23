/*
	a = a || 1;
	o problema nesse pequeno pedaço de codigo, é que a tem que ser 'verdadeiro', não pode ser '0' zero
 */
// primeira forma
function soma(a, b) {
	a = a || 1;
	b = b || 1;
	return a + b;
}

console.log(soma(), soma(2,3), soma(0));

// segunda forma
function soma2(a, b) {
	a = a !== undefined ? a : 1;
	b = b !== undefined ? b : 1;
	return a + b;
}

console.log(soma2(), soma2(2,3), soma2(0));

// terceira forma
function soma3(a, b) {
	a = (0 in arguments) ? a : 1;
	b = (1 in arguments) ? b : 1;
	return a + b;
}

console.log(soma3(), soma3(2,3), soma3(0));