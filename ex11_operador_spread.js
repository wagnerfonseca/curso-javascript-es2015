function mediaAluno(p1, p2, p3) {
	return ((p1, p2, p3) / 3).toFixed(2);
}

var notasAluno = [7.7, 7.3, 6.1, 0.0];

/*
 apply() <=  pega um array e distribui os valores nos parametros da função
 */

// es5
console.log(mediaAluno.apply(null, notasAluno));

// es6 com spread
console.log(mediaAluno(...notasAluno));