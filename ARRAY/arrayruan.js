//EXERCÍCIO 1

// let notas = [] 
// let media, notaMenor = 11, notaMaior = 0, soma = 0

// for(i=0; i<6; i++){
//    let  nota = parseFloat(prompt(`Digite uma nota:`))
//    notas.push(nota)
//    notas.sort((atual, proximo) => atual - proximo)
//    console.log(notas);

// if(nota < notaMenor){
//     notaMenor = nota    
// } 
// if(nota > notaMaior){
//     notaMaior = nota
// }
//     soma += nota
// }

// media = (soma - notaMaior - notaMenor) / 4
// console.log(`As notas digitadas foram  ${notas.join(', ')}. A nota maior é ${notaMaior} e a nota menor é ${notaMenor}. A média das notas é igual a ${media.toFixed(2)}`);
    





// EXERCÍCIO 2
// let num = []
// let soma = 0

// for(let i= 0; i<5; i++){
//     let numero = Number(prompt("Digite 5 números inteiros:"))
//     if(numero % 2 != 0){
//         num.push(numero)
//         soma += numero
//     }
//     console.log(num);
//     console.log(soma);
// }

//EXERCÍCIO 3
let filaloterica = []
let nome
while(filaloterica.length < 5){
     let escolha = Number(prompt(`Digite:\n1 para entrar na fila\n2 - para sair da fila`))
    switch(escolha){
        case 1:
            nome = prompt(`Digite seu nome:`)
            filaloterica.push(nome)
            break
        case 2:
            filaloterica.shift(nome)
            break
        default:
            alert(`Opção inválida`)

        }
        
    }
    alert(`A fila ao final está assim:\n${filaloterica.join('\n ')}`);

//EXERCÍCIO 4

// let ano = []
// let ultimoAlistamento = []

// for(i=2010; i<=2019; i++){
//     let alistamento = Number(prompt(`Houve alistamento no ano de ${i}? Digite 1 para 'sim' e 2 para 'não'`))
//     switch(alistamento){
//         case 1:
//             console.log(`Houve alistamento em ${i}`)
//             ano.push(alistamento)
//             break
//         case 2:
//             console.log(`Não houve alistamento em ${i}`);
//             break
//         default:
//             (`Opção inválida`)
        
//         }
//         console.log(alistamento);
// }

// for(let contador = 0; contador < ultimoAlistamento.length; contador++ ){

// }

//EXERCÍCIO 5

// let listaDoença = []
// let transmissaoVirus = []
// let transmissaoBacteria = []
// let transmissaoAmbos = []

// let numeroDoencas = Number(prompt(`Quantas doenças quer cadastrar?`))

//  for(i=0; i<numeroDoencas; i++){
//     let nomeDoenca = prompt(`Digite o nome da doença a ser cadastrada:\n`)
//     let transmissao = prompt(`A transmissão da doença ${nomeDoenca} se dá por qual meio?\nA - vírus\nB - bactéria\nC - vírus e bactéria`)
//     switch(transmissao){
//         case "A":
//             listaDoença.push(nomeDoenca)
//             transmissaoVirus.push(nomeDoenca)
//             break
//         case "B":
//             listaDoença.push(nomeDoenca)
//             transmissaoBacteria.push(nomeDoenca)
//             break
//         case "C":
//             listaDoença.push(nomeDoenca)
//             // transmissaoVirus.push(nomeDoenca)
//             // transmissaoBacteria.push(nomeDoenca)
//             transmissaoAmbos.push(listaDoença)
//             break
//         default:
//             alert(`Opção inválida`)

//     }
//     console.log(`Lista de todas as doenças`);
//     console.log(listaDoença);
//     console.log(`As doenças transmitidas por bactérias são ${transmissaoBacteria.join(', ')}`)
//     console.log(transmissaoBacteria);
//     console.log(`As doenças transmitidas por vírus são ${transmissaoVirus.join(', ')}`);
//     console.log(`Doenças transmitias por ambos`);
//     console.log(transmissaoAmbos)

//  }