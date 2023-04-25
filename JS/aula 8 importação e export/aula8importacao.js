//const funcoes = require('./funcoes-auxiliares');//para importar algo de outro arquivo, usa o require e o nome do arquivo
//para importar voce tem que exportar também
//funcoes.print('Olá Mundo!');


const {gets, print} = require('./funcoes-auxiliares');

print('Olá Mundo!');
print(gets());


//quando tem um objeto, Há uma forma chamada desconstruint que destroi o objeto em mais de
//uma variavel, funciona da seguinte maneira:
//se temos um: const pessoa = { nome: 'vitor'}; podemos fazer só const {nome} = pessoa;
// que é a mesma coisa que const nome = pessoa.nome;
//é mais faciol pois nao precisa ficar tipo 'nome.nome', só 'nome' já que ela tem o objeto nome dentro.
//mesma coisa com a funcoes que criei, no caso ficaria
//const {gets, print} = require('./funcoes-auxiliares');, entao pode se usar 'gets()' e 'print()' direto
//sem ter que usar 'funcoes.gets()' ou 'funcoes.print()'