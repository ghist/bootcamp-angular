function meuNome(nome){
    return 'meu nome é: ' + nome;
}

meuNome('marcos vinicius');

function maiorIdade(idade){
    if(idade >= 18){
        console.log(meuNome('Marcos ') + 'E sou maior de idade');
    }else{
        console.log(meuNome('Marcos ') + 'E sou menor de idade');
    }
}

maiorIdade(23);