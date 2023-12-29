/*
4. O custo de um carro novo ao consumidor é a soma do custo de
fábrica com a porcentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%, escrever um
algoritmo para ler o custo de fábrica de um carro,calcular e escrever
o custo final ao consumidor.
*/

//let custoCarro = Number(prompt("Digite o custo do carro"));
//let custoFinal = custoCarro + custoCarro * 0.45 + custoCarro * 0.28;

//document.write("Custo final ", custoFinal);


let custoDeFabrica = parseFloat(prompt("Digite o custo de fábrica do carro:"));

// Define os percentuais do distribuidor e dos impostos
let percentualDistribuidor = 28;
let percentualImpostos = 45;

// Calcula o custo final ao consumidor
let custoDistribuidor = (percentualDistribuidor / 100) * custoDeFabrica;
let custoImpostos = (percentualImpostos / 100) * custoDeFabrica;
let custoFinal = custoDeFabrica + custoDistribuidor + custoImpostos;

// Exibe o resultado
console.log("Custo final ao consumidor: R$" + custoFinal.toFixed(2));
