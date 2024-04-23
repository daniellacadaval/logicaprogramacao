// 6- Faça um programa que simule um jogo de adivinhação. O computador
// escolherá um número aleatório entre 1 e 100, e o jogador deve adivinhar
// qual é o número. O jogador tem um número limitado de 10 tentativas. A cada
// tentativa, o programa deve informar se o número digitado é maior ou menor
// que o número escolhido pelo computador. No final, o programa deve informar
// se o jogador ganhou (adivinhou o número) ou perdeu (esgotou todas as
// tentativas).

let numeroAleatorio = Math.round(Math.random() * 100)
let numero

console.log(numeroAleatorio);

for (i = 1; i <= 10 && numero != numeroAleatorio; i++) {

    numero = parseFloat(prompt(`Digite um número entre 1 e 100:`))


    if (numero > numeroAleatorio) {
        alert(`${numero}: você chutou alto.`)
    } else if (numero < numeroAleatorio) {
        alert(`${numero}: você chutou baixo`)
    }else{
        alert(`Você acertou o número depois de ${i} tentativa(s)`)

    }
    
}
if(i == 10){
    alert(`Chances esgotadas.`)
}
