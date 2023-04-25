/*
    Agora utilizando funções, faça:
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
    normal de etiqueta e a escolha da condição de pagamento.
    Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar
    o calculo adequado.

    Código condição de pagamento:
    - À vista débito, recebe 10% de desconto;
    - À vista no dinheiro ou pix, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

/* 
    1 - Debito
    2 - Pix ou à vista
    3 - 2x 
    4 - Parcelamento > 2x
*/

function formaPagamentoDesconto(tipo,valor){
    if(tipo === 1){
        const novoValor = valor - (valor*0.10);
        return novoValor;
    }else if(tipo == 2){
        const novoValor = valor - (valor*0.15);
        return novoValor;
    }else if(tipo === 3){
        return valor;
    }else{
        const novoValor = valor + (valor * 0.10);
        return novoValor;
    }
}

(function(){
    const tipoPagamento = 4;
    const valorProduto = 100;

    console.log(formaPagamentoDesconto(tipoPagamento, valorProduto));
})();