function soma(a = 1, b = 1) {
	return a + b;
}

console.log(soma(), soma(2,3), soma(0));

// no valor padrão, aceita tanto expressão, quanto função
function defVal() {
	return 2;
}

function subtrai(a = defVal() + 1, b = defVal()) {
	return a - b;
}

console.log(subtrai(), subtrai(5,3), subtrai(0));


// chamando uma funcao de callback
function click(callback = function() {}) {
	callback();
}

click();
click(undefined);
// click(null); // error