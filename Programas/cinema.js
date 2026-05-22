//    Elaborar um programa para um cinema, que leia o título e a duração de um filme em minutos.
//    Exiba o título do filme e converta a duração para horas e minutos.
//    Crie o arquivo cinema.html e cinema.js

// adiciona pacotes node ao programa
const prompt = require("prompt-sync")();

const titulo = prompt("Digite o nome do Filme: ");
const duracao = Number(prompt("Digite a duraca do filme em horas: "));

const horas = Math.floor(duracao / 60);
const minutos = duracao % 60;

console.log(`Nome do filme: ${titulo}`);
console.log(`Durção: ${horas} hora(s) e ${minutos} minuto(s)`);

resp2.innerText = `Duração do Filme: ${horas} hora(s) 3 ${minutos} minuto(s)`;
