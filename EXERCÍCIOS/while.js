let nota
let quantidadeNotas = 0
let soma = 0

while (nota != -1) {
    nota = parseFloat(prompt("Digite sua nota:"))
    if(nota >=0){
        soma += nota
        quantidadeNotas++
    }
    
}
let media = soma / quantidadeNotas
alert(`A média de suas notas é ${media.toFixed(2)}`) 