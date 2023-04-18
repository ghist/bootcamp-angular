/* Faça um programa para calcular o valor de uma viagem.

    Você terá 5 variaveis de entrada. Sendo elas:
    1 - Preço do etanol.
    2 - Preço da gasolina.
    3 - O tipo de combustivel que está no seu carro;
    4 = Gasto médio de combustivel do carro por KM.
    5 - Distância em KM da viagem;

    Imprima no console o valor que será gasto para realizar esta viagem.
*/

const etanolPrecoLitro = 5.79;
const gasolinaPrecoLitro = 6.66;
const tipoDeCombustivel = 'gasolina';
const gastoLitroPorKM = 10;
const distanciaViagemKM = 100;

const litrosTotaisParaViagem = distanciaViagemKM / gastoLitroPorKM;
let valorTotalCombustivel = 0;

if (tipoDeCombustivel === 'etanol'){
    valorTotalCombustivel = litrosTotaisParaViagem * etanolPrecoLitro;
    console.log(valorTotalCombustivel.toFixed(2));
}else{
    valorTotalCombustivel = litrosTotaisParaViagem * gasolinaPrecoLitro;
    console.log(valorTotalCombustivel.toFixed(2));
}