/*
 Spread quebra o array em elementos
 */

var notasAlunos = [6.8, 7.9, 8,2];

var turmaES5 = notasAlunos.concat([6.7, 8.9, 9.1]);

/*
 neste exemplo abaixo quero concatenar um array, acrescentar mais numeros
 */
var turmaES6 = [...notasAlunos, 6.7, 8.9, 9.1];

console.log(turmaES5);
console.log(turmaES6);
