this.desc = 'sample with bind! context is module.exports';

const obj = { desc: 'Object, I am' };

const func = function() {
	console.log(this);
}
func();

const funcBind = func.bind(obj);
funcBind();

const arrowFunc = () => console.log(this);
arrowFunc();

const arrowFuncBind = arrowFunc.bind(obj);
arrowFuncBind();
