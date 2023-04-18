// const camisetaMinhaAzul = true; -> variaveis booleanas true
// const camisetaDeleAzul = false; -> variaveis booleanas false
// == para comparar ele ignora e converte a condição para o tipo comparado
// === compara sem converter o tipo como está na condição
// para ter um resultado boolean pode colocar === apos a divisao por exemplo
// ! serve para negar uma variavel/condição
// condicional -> if()

const numero = 5;

// const eNumeroPar2 = numero % 2;
const eNumeroPar = (numero % 2) === 0;

// console.log(eNumeroPar2);
console.log(eNumeroPar);

//if (eNumeroPar){
//    console.log('Sou par');
//}

//if (!eNumeroPar){
//    console.log('Sou impar');
//}
if ( numero === 0){
    console.log('O numero é invalido');
}else if (eNumeroPar){
    console.log("Sou par");
}else {
    console.log('Sou impar');
}