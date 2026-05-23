// Elaborar um programa para uma lan house de um aeroporto, o programa deve ler o valor de cada
// 15 minutos de uso de um computador e o tempo de uso por um cliente em minutos.
// Informe o valor a ser pago pelo cliente, sabendo que as frações extras de 15 minutos devem ser
// cobradas de forma integral.

const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite valor de cada 15 minutos de uso: "));
const tempo = Number(prompt("Digite o tempo de uso por um cliente em minutos: "));

const calc = Math.ceil(tempo / 15) * valor;

console.log(`Valor total a pagar R$: ${calc.toFixed(2)}`);