//  Escreva uma função que apresente como resultado os quadrados dos números inteiros existentes na faixa de valores de 15 a 200.
//  Exemplo:
//  chamada da função: nome_da_sua_funcao()
//  Saída: 225, 256, 289 ...40000

function inteirosAoQuadrado () {
    for (let panda = 15; panda <= 200; panda++) {
        console.log(panda*panda)
    }
}

//inteirosAoQuadrado ()

//  Escreva uma função que apresente a soma dos cem primeiros números naturais.
//  (1+2+3+...+98+99+100).
//  Exemplo:
//  chamada da função: nome_da_sua_funcao()
//  Saída: 5.050

function somaNaturais () {
    let somaNaturais = 0;
    for (let panda = panda; panda <= 100; panda++) {
        somaNaturais = somaNaturais + panda;
    }
    return somaNaturais;
}

//somaNaturais()

//  Escreva uma função que apresente todos os valores numéricos menores que 200 que são divisíveis por 4.
//  Exemplo:
//  chamada da função: nome_da_sua_funcao()
//  Saída: 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 ...196

function divisiveisQuatro () {
    for (let panda = 0; panda < 200; panda++) {
        if (panda % 4 === 0) {
            console.log(panda)
        }
    }
}

//divisiveisQuatro()

//  Escreva uma função que calcule o resultado da soma e da média aritmética dos valores pares situados na faixa numérica de 50 até 70.
//  soma = 50+52+54...+70
//  média_aritmética = soma / qtd_numeros_pares_no_intervalo⁠⁠ Exemplo:
//  chamada da função: funcao_o_nome_da_sua_funcao()
//  Saída: A soma é 660 e a média é 60.

function somaMediaPares () {
    let soma = 0; 
    let qtdNumerosPares = 0;

    for (let panda = 50; panda <= 70; panda++) {
        if (panda % 2 === 0) {
            soma = soma + panda;
            qtdNumerosPares++;
        }
    }
    const mediaAritmetica = soma / qtdNumerosPares;

    return `A soma é ${soma} e a média é ${mediaAritmetica}.`
}

console.log(somaMediaPares())

