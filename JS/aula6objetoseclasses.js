// Objeto é uma estrutura dinamica de chaves e valores separados por :, parecido com dicionario em python e struct em c
//uma variavel pode receber um objeto sendo declarado entre {} os valores que quer, separados
//por virgula, dentro de um objeto também, pode conter um valor do tipo função, famoso metodo
//é só declarar uma chave e depois uma function(), this é uma forma de representar o proprio
//objeto e pegar suas chaves para uso dentro de um metodo dentro do objeto, alias, para declarar
//assim, pode se usar o `` paraque seja possivel usar o ${}, parecido com o f'{}' no python.
//Existe duas formas de acessar o conteudo dentro de um objeto:
//o primeiro é parecido com struct -> objeto.atributo
//o segundo é passando a chave como string entre colchetes -> objeto['atributo']


const marcos = {
    nome: 'Marcos V B Sampaio',
    idade: 23,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

marcos.descrever();

class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descreer(){
        console.log(`meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
}

//const vinicius = new Pessoa;
//vinicius.nome = 'Vinicius Sampaio';
//vinicius.idade = 23;

//const batista = new Pessoa;
//batista.nome = 'Marcos Batista';
//batista.idade = 24;

//batista.descreer();
//vinicius.descreer();

const vinicius = new Pessoa('Vinicius Sampaio', 24)

console.log(vinicius)

//classe é uma definição como uma struct, e pode ter ocorrencias do tipo dela, veja nos exemplos
//que as variaveis vinicius e batista recebem essa clase como padrão atraves do new 'nome da classe'
//quando declarada como tal classe, pode entao atribui valores.
//classe é uma definição do objeto e a instancia uma ocorrencia do objeto.
//assim como o objeto, é possivel ter uma função dentro, porem diferente do objeto, nao precisa
//declarar com o function, apenas na forma -> 'nomefuncao'(){} <- o nome da funcao e parentes
//seguido do abre e fecha chaves, consequentemente o que se quer dentro.

function compararPessoas(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    }else if(p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    }else{
        console.log(`${p2.nome} e ${p1.nome} tem a mesma idade`);
    }
}

const alex = new Pessoa('Alex', 21);
const sam = new Pessoa('Sam', 22);

compararPessoas(alex, sam);