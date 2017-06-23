var sequencia = {
	__id: 1,
	get id() {return this.__id++;},
	set id(id) {this.__id = id;}
}

console.log(sequencia.id, sequencia.id);
sequencia.id=100;
console.log(sequencia.id, sequencia.id);