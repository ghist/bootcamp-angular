/*
    1 - crie um programa que dado um numero imprima a sua tabuada
*/

//const numero = 7;

//for (let i = 1; i <= 10; i++){
//    console.log(numero + ' x ' + i + ' = ' + (numero*i));
//}

/*
    2 - Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada
    numero par encontrado.
*/

const listaNumero = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < listaNumero.length; i++){
    if(listaNumero[i]%2===0){
        const numPar = listaNumero[i];
        console.log(numPar);
    }
}