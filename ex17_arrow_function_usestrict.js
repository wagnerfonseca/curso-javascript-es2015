'use strict'

this.desc = 'funny arrow function strict';

console.log(this);

// com o uso estrito, o contexto do this é undefined
const func = function() {
	console.log(this === undefined);
}
func();

// com arrowfunc isso é ignorado, e o contexto aponta para module.exports
const arrowFunc = () => console.log(this, this === module.exports);
arrowFunc();