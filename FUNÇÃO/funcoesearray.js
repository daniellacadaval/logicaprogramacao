// let mostrarConvite = function(nomeCovidado, data, horario, local, nomeNoivos){
//     alert(`Prezado(a) ${nomeCovidado},\nvenho através deste convida-lo(a) para no dia ${data}, às ${horario}, no endereço${local}, prestigiar o casamentdo dos noivos ${nomeNoivos}.`)
// }

// let nome = prompt("Digite o nome do convidado:")

// mostrarConvite(nome, '25/05/2024', '20h', 'Igreja', 'Romeu e Julieta')
// mostrarConvite(nome, '25/05/2024', '20h', 'Igreja', 'Romeu e Julieta')
// mostrarConvite(nome, '25/05/2024', '20h', 'Igreja', 'Romeu e Julieta')


// let jogadores = []


// //laço de repetição para olicitar 10 números
// for(let i=1;i<=10;i++){

//     let inscricao = Number(prompt(`Digite o numero de inscrição do ${i}º jogador`))
//     jogadores.push(inscricao)

// }

// //analisar a lista de jogadores
// let timeImpar = jogadores.filter(jogador => jogador % 2 != 0)
// alert(`O time ímpar tem ${timeImpar.length} jogadores`)
// let timePar = jogadores.filter(jogador => jogador % 2 == 0) 
// alert(`O time par tem ${timePar.length} jogadores`)

// //comparar quantidade de cada lista (tamanho/length)
// if(timeImpar.length == timePar.length){
//     alert("Os times estão equilibrados")
// }else{
//     alert("Os times não estão equilibrados")
// }

// let numeros = [1, 5, 4, 3, 8, 3, 7, 9, 6, 2]
// let verificacaoImpares = numeros.every(numero => numero % 2 != 0)
// alert(`Verificação de ímpares: ${verificacaoImpares}`)

let numeros = [1, 5, 4, 3, 8, 3, 7, 9, 6, 2]
let numeroAoQuadrado = numeros.map(numero => numero * numero)
alert(`Os número elevados ao quadrado são: ${numeroAoQuadrado}`)