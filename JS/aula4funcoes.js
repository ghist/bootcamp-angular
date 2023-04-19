/*
    Para criar uma função, é usado o "function", seguido do nome da
    função "teste" por exemplo, no fim ficaria como function teste(){}
    Entre os parenteses da função "()", devem ser colocado os parametros
    que deseja passar, no caso da função sayMyName, querenos o nome, entao
    temos sayMyName(nome){}.
    + apos as aspas simples '' serve como concatenação da saida, juntando
    o que está entre aspas e o que está na variavel.
    Caso seja necessario que a função devolva uma valor, é usado o return.
    É possivel declarar variaveis const e let dento da função.
    Uma função também pode ser chamada diretamente de dentro de um
    console.log para que seja imprimido na tela o seu valor de retorno.
*/


function sayMyName(name){
    console.log('Seu nome é ' + name);
}

function teste(){
    console.log('teste');
}

teste();
sayMyName('Marcos');


function calcularImc(peso, altura){
    return peso / (altura*altura);
}

function classificarImc(imc){
    if(imc > 40){
        return 'Obesidade Grave' ;
    }else if(imc >= 30){
        return 'Obeso' ;
    }else if(imc >= 25){
        return 'Acima do Peso' ;
    }else if(imc >= 18.5){
        return 'Peso Normal' ;
    }else{
        return 'Abaixo do peso' ;
    }
}

/* 
    as funcoes em js podem ser manipuladas como se fossem objetivos e atribuidos novos valores tipo
    -> main = function(){console.log(10);}
    as funções podem ser isoladas com o () no inicio e no fim, e depois se invocar propria com ();, é chamado de função imediatamente invocada
    nao precisando do main(); mais a frente para ser chamada.
    um exemplo seria:
    (function main(){
        const peso = 87;
        const altura = 1.78;

        console.log('Programa principal');
        const imc = calcularImc(peso, altura);
        console.log(classificarImc(imc));
    })();
    Com isso a função não necessariamente precisa de um nome, sendo apenas function(){}
*/ 

function main(){
    const peso = 87;
    const altura = 1.78;

    console.log('Programa principal');
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}
console.log(main);
main();
const main2 = main;
console.log(main2);
main2();