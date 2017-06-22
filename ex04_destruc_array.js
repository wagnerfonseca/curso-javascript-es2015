var [a] = [10];
console.log(a);

var [n1,,n3,,n5,n6 = 0] = [3,2,7,18];

console.log(n1, n3, n5, n6);
/*
 n1 = 3
 n3 = 7
 n5 = undefined
 n6 = 0
*/
var [,[,nota]] = [[7,8,6],[8,7,17]];
console.log(nota);
/*
 [  ,                       ] 1 nivel
     [, (segundo elemento)] 2 array
*/
