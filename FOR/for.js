//let exFor = document.getElementById("exFor1")
// let numero, soma = 0

// for (let i = 0; i < 5; i++) {
//    numero = Number(prompt(`Digite um número aleatório 5x:`))
//     if (numero > 7) {
//         soma += numero
//     }
// }
//  exFor1.innerHTML += (`A soma dos números maiores que 7 é ${soma}`);


// let exFor2 = document.getElementById("exFor2")
// let i
// for(let i = 1; i < 201; i++){
//     if(i % 2 == 0){
//         exFor2.innerHTML = (i);
//     }
// }


// let soma = 0
// for(let i = 10; i < 21; i++){
//     soma += i
//     console.log(soma)
// }


// let soma = 0
// let numero = Number(prompt(`Digite um numero:`))
// for(let i = 0; i <= numero; i++){
//     soma += i
// }
// alert(`A soma de todos os número entre 0 e ${numero} é:  ${soma}`);

// for(let numero = Number(prompt(`Digite um numero:`)); numero > 0; numero--){
//     soma += numero
//     alert(`A soma de todos os número entre 0 e ${numero} é:  ${soma}`)
// }

// let somaMulta = 0
// let somaPontos = 0
// let quantidadeMultas = Number(prompt(`Digite quantas multas deseja cadastrar:`))

// for (let i = 1; i <= quantidadeMultas; i++) {
//     let valorMulta = parseFloat(prompt(`Digite o valor da multa: R$`))
//     let pontoPerdido = Number(prompt(`Digite o número de pontos perdidos:`))
//     somaMulta += valorMulta
//     somaPontos += pontoPerdido

// }
// alert(`O valor total das multas é R$${somaMulta} e o total de pontos perdidos é ${somaPontos}.`)

// if (somaPontos >= 21) {
//     alert(`Você está irregular.`)
// } else {
//     alert(`Você está regular`)
// }

// if (somaMulta > 5000) {
//     alert(`Com o valor que você terá que pagar em multas, poderia comprar um Gol 1980`)
// }


let soma = 0

for (let i = 1; i <= 5; i++) {
    let numero = Number(prompt(`Digite 5 numeros`))
}
if (numero % 2 == 0) {
    soma += numero
    console.log(`A média dos números digitados é ${soma / 5}.`)
} else {
    console.log(`Um dos números digitados não é ímpar.`)
    
}
