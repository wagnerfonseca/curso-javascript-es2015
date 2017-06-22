function rand({min = 0, max = 1000}) {
	var value = Math.random() * (max - min);
	return Math.floor(value) + min;
}

console.log(rand({max: 50, min: 30}));
console.log(rand({min: 930}));
console.log(rand({}));
// error
//console.log(rand();

function rand2([min = 0, max = 1000]) {
	// se o valor do minimo for maior que o valor do maximo
	if (min > max)
		[min, max] = [max, min]; //substitui o valor pelo outro
	var value = Math.random() * (max - min);
	return Math.floor(value) + min;
}

console.log(rand2([50,40]));
console.log(rand2([991]));
console.log(rand2([,10]));
console.log(rand2([]));
// error
// console.log(rand2());
