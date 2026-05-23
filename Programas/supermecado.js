// Um supermercado está com uma promoção para aumentar suas vendas no setor de higiene, cada etiqueta
// de produto deve exibir uma mensagem anunciando 50% de desconto (para um item) na compra de três
// unidades do produto. Elaborar um programa que leia descrição e preço de um produto.
// Após, apresente as mensagens indicando a promoção.


const prompt = require("prompt-sync")();

const produto = prompt("Digite o nome do produto: ");
const valor = Number(prompt("Digite o preço do produto: "));

const calc = valor * 2.5;
const prod = valor / 2;

console.log(`Na compra de três unidades do produto ${produto}`);
console.log(`O produto sai R$: ${calc.toFixed(2)}`);
console.log(`O terceiro produto custa R$: ${prod.toFixed(2)}`);
