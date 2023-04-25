//const alunos = ['João', 'Maria', 'José'];

//const alunos = [];//declaração de uma array/lista

//alunos.push('Elba'); //push adiciona no final da lista

//alunos[1] = 'Vinicius';//também pode ser adicionado na posição direta

//console.log(alunos);

//alunos.pop(); //pop remove o ultimo da lista

//alunos.shift(); //shift remove o primeiro da lista

//delete alunos[1]; Se usar o delete, ele apaga apenas o conteudo da posição, nao a posicaoem si

//console.log(alunos);

const notas = [];
let soma = 0;

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

console.log(notas)

console.log(notas.length);

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

console.log(soma/notas.length);


