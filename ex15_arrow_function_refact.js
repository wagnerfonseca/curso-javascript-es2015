var estoque = [
  {nome: 'Resma De Papel A4', preco: 19.90, qtde: 300, fragil: false},
  {nome: 'Monitor LG 29 IPS', preco: 1699, qtde: 15, fragil: true},
  {nome: 'Ovos Brancos - 30 Unid.', preco: 18.99, qtde: 21, fragil: true},
  {nome: 'Pneu Pirelli Scorpion Aro 19', preco: 1027.34, qtde: 16, fragil: false},
  {nome: 'Apple Ipad Pro 32gb - Tela 12,9', preco: 3999, qtde: 17, fragil: true}
];

// utilizando arrow function
const isPrecoAlto = item => item.preco >= 1000;
const isItemFragil = item => item.fragil;
const quantidade = item => item.qtde;
const somatorio = (total, qtde) => total + qtde;

const qtdeProdutosCarosEFrageis = 
	estoque
		.filter(isPrecoAlto)
		.filter(isItemFragil)
		// map utilizado para transformar os elementos do array 
		.map(quantidade)
		// acumulador - chamado para cada item do array
		.reduce(somatorio);

console.log(qtdeProdutosCarosEFrageis);	