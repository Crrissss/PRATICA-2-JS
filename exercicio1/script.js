/*
1. Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit.
*/

let celsius = parseFloat(prompt("Digite a temperatura em graus Celsius"));
let fahrenheit = (celsius * 9) / 5 + 32;

console.log("A temperatura em fahrenheit é ", fahrenheit);