const entradas = [5, 50, 10, 98, 23];
let i = 0;


function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = {
    gets,
    print
//    gets: gets, 
//    print: print
}; //É necessário exportar para conseguir importar em outra aba do codigo
                            //Para isso é usado o module.exports, como uma classe e objeto e
                            //recebendo isso pode se fazer como um objeto passando o gets e print de uma vez
//Como as funções tem o mesmo nome, não precisa repetir como está marcado como comentario