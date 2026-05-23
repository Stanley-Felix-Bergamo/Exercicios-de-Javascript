// Elaborar um programa para uma revenda de veículos. O programa deve ler modelo e preço do veículo. 
// Apresentar como resposta o valor da entrada (50%) e o saldo em 12x.



// adiciona pacotes node ao programa
const prompt = require("prompt-sync")();

// le o nome do veiculo
const veiculo = prompt("Digite o modelo do veiculo:");

// le o preço do veiculo
const preco = Number(prompt("Digite o Preço:"));

// calcula o valor da entrada
const entrada = preco * 0.5;

// calcula o valor da parcela
const parcela = (preco * 0.5) / 12;

// exibe o nome do veiculo e demais saidas
console.log(`Promoção:${veiculo}`);
console.log(`Entrada de: R$ ${entrada.toFixed(2)}`);
console.log(`+ 12x de: R$ ${parcela.toFixed(2)}`);
