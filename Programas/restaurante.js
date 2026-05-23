// Elaborar um programa para um restaurante que leia o preço por kg e o consumo (em gramas) de um
// cliente. Exiba o valor a ser pago.

const prompt = require("prompt-sync")();

const quilo = Number(prompt("Digite o valor do quilo (Kg): "));
const consumo = Number(prompt("Digite o valor do consumo: "));

const valor = (quilo / 1000) * consumo;

console.log(`Valor a pagar R$: ${valor.toFixed(2)}`);
