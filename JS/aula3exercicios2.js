/*
    2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde
    para dar uma indicação sobre a condição de peso de uma pessoa adulta.

    Formula do IMC:
    IMC = peso / (altura * altura);

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com
    a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5, abaixo do peso;
    - Entre 18.5 e 25, peso normal;
    - Entre 25 e 30, acima do peso;
    - Entre 30 e 40, obeso;
    - Acima de 40, obesidade grave; 
*/

const peso = 87;
const altura = 1.78;

const imc = peso / (altura * altura);
console.log(imc);

if(imc > 40){
    console.log('Obesidade Grave');
}else if(imc >= 30){
    console.log('Obeso');
}else if(imc >= 25){
    console.log('Acima do Peso');
}else if(imc >= 18.5){
    console.log('Peso Normal');
}else{
    console.log('Abaixo do peso');
}