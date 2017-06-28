this.desc = 'sample with bind! context is module.exports';

const obj = { desc: 'Object, I am' };

const func = function() {
	console.log('O contexto é module.exports?', this === module.exports);
	console.log('O contexto é global?', this === global);
	console.log('O contexto é undefined?', this === undefined);
	console.log('O contexto é null?', this === null);
	console.log('O contexto é obj?', this === obj);
}
func();

console.log('Realizando o bind()')
const funcBind = func.bind(obj);
funcBind();

// com arrow function o module.exports continua sendo o this
const arrowFunc = () => console.log('Arrow function o contexto do this é module.exports?', this === module.exports);
arrowFunc();

// mesmo realizando o bind o contexto do this continua sendo module.exports
console.log('Realizando bind -  Arrow function')
const arrowFuncBind = arrowFunc.bind(obj);
arrowFuncBind();
