/*
 Pegar um conjunto de parametros e convertelo em um array
 */

 function media(...notas) {
 	// array function 
 	// reduce uma função para arrays
 	var total = notas.reduce((soma, nota) => soma + nota);
 	return total / notas.length;
 }

//  converte uma quantidade de parametros em um array
 console.log(media(7.3,7.7,6.0));