/*
    1 - Crie uma classe para representar carros.
    Os carros posuem uma marca, uma cor e um gasto medio de combustivel por kilometro rodado.
    Crie um método que dado a quantidade de quilometros e o preço do combustivel nos dê o
    valor gasto em reais para realizar este percurso,
*/

class Carro{
    marca;
    cor;
    autonomia;

    constructor(marca, cor, autonomia){
        this.marca = marca;
        this.cor = cor;
        this. autonomia = autonomia;
    }

    calculoViagem(distancia, preco){
        return (distancia * this.autonomia) * preco;
        //const litrosNecessarios = distancia * this.autonomia;
        //const valorTotal = litrosNecessarios * preco;
        //console.log(`O valor total é de ${valorTotal.toFixed(2)} reais para percorrer a distancia de ${distancia} KM`);
    }
}

/*
    2 - Crie uma classe para representar pessoas.
    Para cada pessoa teremos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC(IMC = peso / altura^2);
    Instancie uma pessoa chamada jose que tenha 70kg de peso e 1.75 de altura e peça para dizer
    o valor do seu IMC.
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(imc){
        if(imc > 40){
            return 'Obesidade grave';
        }else if(imc >= 30){
            return 'Obesidade';
        }else if(imc >= 25){
            return 'Sobrepeso';
        }else if(imc >= 18.5){
            return 'Normal'
        }else{
            return 'Magreza'
        }
    }
}

(function(){
    const tt = new Carro('audi','prata',1/10);
    console.log(tt);
    console.log(tt.calculoViagem(100,5.77).toFixed(2));

    const uno = new Carro('Fiat', 'Branco', 1/12);
    console.log(uno);
    console.log(uno.calculoViagem(70,5).toFixed(2));

    const jose = new Pessoa('Jose', 70, 1.75);
    console.log(jose.calcularIMC());

    const marcos = new Pessoa('Marcos', 88, 1.78);
    console.log(marcos.classificarImc(marcos.calcularIMC()));
})();