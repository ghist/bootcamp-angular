/*
    1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculade calcule
    e imprima a sua media e a sua classificação conforme a tabela abaixo.

    Media = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Media entre 5 e 7, recuperação;
    - Media acima de 7, passou de semestre;
*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 7;

/*
const media = ((nota1 + nota2 + nota3) / 3) < 5;
const media1 = ((nota1 + nota2 + nota3) / 3) >= 5;
const media3 = ((nota1 + nota2 + nota3) / 3) >= 7;
*/
const mediaNota =(nota1 + nota2 + nota3) / 3;

/*
if(media3){
    console.log('Passou de semestre, media: ', mediaNota.toFixed(2));
}else if(media1){
    console.log('Aluno em recuperação, media: ', mediaNota.toFixed(2));
}else{
    console.log('Aluno reprovado, media: ', mediaNota.toFixed(2));
}
*/

console.log(mediaNota);

if(mediaNota > 7){
    console.log('Passou de semestre');
}else if(mediaNota >= 5){
    console.log('Recuperação');
}else{
    console.log('Reprovado');
}