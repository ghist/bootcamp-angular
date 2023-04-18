/*
faça um programa para calcular o valor uma viagem.

Você terá 3 variaveis. Sendo elas: 
    1 Preço do combustivel.
    2 Gasto médio de combustivel do carro por KM.
    3 Distância em KM da viagem.

Imprema no console o valor que será gasto de combustivel 
para realizar esta viagem
*/

// .toFixed() para mostrar o total de casas apos o ponto

const preco = 4.80;
const distancia = 100;
const gasto = 11;

let resultadoMedio = distancia / gasto;
let total = resultadoMedio * preco;

console.log(total.toFixed(3));

