
// let idade = prompt('Digite sua idade:')

// if(idade < 16){
//     alert('Não pode votar')
// } else if (idade <= 17 || idade >= 70) {
//     alert('Voto opcional')
// } else
//     alert('Voto obrigatório.')

// EXERCÍCIO 1 - MÉDIA

// let nota1 = prompt('Digite a primeira nota:')
// nota1 = parseFloat(nota1)
// let nota2 = prompt('Digite a segunda nota:')
// nota2 = parseFloat(nota2)
// let nota3 = prompt('Digite a terceira nota:')
// nota3 = parseFloat(nota3)
// let media = (nota1 + nota2 + nota3) / 3
// media = parseFloat(media)

// if(media < 7){
//     alert(`Sua média é ${media.toFixed(2)}, vocês está REPROVADO.`)
// } else {
//     alert(`Sua média é ${media.toFixed(2)}. Parabuains, você está APROVADO!!`)
// }

// EXERCÍCIO 3 - CALCULADORA DE IMC

// let altura = prompt('Digite sua altura:')
// altura = parseFloat(altura)
// let peso = prompt('Digite seu peso:')
// peso = parseFloat(peso)
// let imc = peso / (altura ** 2)
// imc = parseFloat(imc)

// if(imc < 18){
//     alert(`Sua massa de índice corporal é ${imc.toFixed(2)}. Você está abaixo do peso`)
// } else if(imc >= 18 && imc <= 25){
//     alert(`Sua massa de índice corporal é ${imc.toFixed(2)}. Você está na faixa de peso ideal `)
// } else{
//     alert(`Sua massa de índice corporal é ${imc.toFixed(2)}.Você está acima do peso`)
// }

// EXERCICIO 3 - DENSIDADE DEMOGRAFICA

// let populacao = Number(prompt('Digite o número de habitantes na região:'))
// let area = prompt('Digite o tamanho da área (m²)')
// area = parseFloat(area)
// let densidade = populacao / area
// let nivelDensidade 

// if(densidade < 25){
//     alert(`Densidade baixa`)
// } else if( densidade >= 25 && densidade <= 100){
//     alert(`Densidade média`)
// } else{
//     alert(`Densidade alta`)
// }

//OUTRA FORMA 

// if(densidade < 25){
//     nivelDensidade = 'baixa'
// } else if( densidade >= 25 && densidade <= 100){
//    nivelDensidade = 'media'
// } else{
//    nivelDensidade = 'alta'
// }
// alert(`A densidade demográfica é ${nivelDensidade.toFixed(2)}\n Densidade demográfica = ${densidade.toFixed(2)}`)

// let mes = Number(prompt('Digite o mês em forma de número (1-12):'))
// switch (mes){
//     case 1:
//         alert("janeiro")
//         break
//     case 2:
//         alert("fevereiro")
//         break
//     case 3:
//         alert("março")
//         break
//     case 4:
//         alert("abril")
//         break
//     case 5:
//         alert("maio")
//         break
//     case 6:
//         alert("junho")
//         break
//     case 7:
//         alert("julho")
//         break
//     case 8:
//         alert("agosto")
//         break
//     case 9:
//         alert("setembro")
//         break
//     case 10:
//         alert("outubro")
//         break
//     case 11:
//         alert("novembro")
//         break
//     case 12:
//         alert("dezembro")
//         break
//     default:
//         alert("Mês inválido.")
// }

//EXERCÍCIO - CALCULADORA

// let num1 = Number(prompt("Digite o primeiro número:"))
// let num2 = Number(prompt("Digite o segundo número:"))
// let operacao = Number(prompt("Escolha uma operação:\n1 = soma\n2 = subtração\n3 = multiplicação\n4 = divisão"))
// switch(operacao){
//     case 1: 
//         let soma = num1 + num2
//         alert(`A soma dos dois números é ${soma}.`)
//         break
//     case 2:
//         let subtraçao = num1 - num2
//         alert(`A diferença dos dois números é ${subtraçao}.`)
//         break
//     case 3:
//         let multiplicacao = num1 * num2
//         alert(`O produto dos dois números é ${multiplicacao}.`)
//         break
//     case 4:
//         let divisao = num1 / num2
//         alert(`A divisão dos dois números é ${divisao}.`)
//         break
//     default:
//         alert("Número inválido")
        
// }


// // EXERCÍCIO - GERAÇÕES

// let anoNascimento = Number(prompt("Digite seu ano de nascimento:"))
// switch(true){
//     case anoNascimento < 1946:
//         alert("Geração Baby Boomers")
//         break
//     case anoNascimento < 1965 :
//         alert("Geração X")
//         break
//     case anoNascimento < 1981 :
//         alert("Geração Y ou Geração Millennials")
//         break
//     case anoNascimento < 1997:
//         alert("Geração Z")
//         break
//     case anoNascimento <= 2010 && anoNascimento < 2026:
//         alert("Geração Alfa")
//         break
//     default:
//         alert("Data inválida.")
    
// }


//EXERCÍCIO  - Quantos dias tem?
// let mes = prompt("Informe o mês desejado:\n1 - janeiro\n2 - fevereiro\n3 - março\n4 - abril\n5 - maio\n6 - junho\n7 - julho\n8 - agosto\n9 - setembro\n10 - outubro\n11 - novembro\n12 - dezembro")
// switch(mes){
//     case '1':
//     case '3':
//     case '5':
//     case '7':
//     case '8':
//     case '10':
//     case '12':
//         alert("O mês possui 31 dias.")
//         break
//     case '2':
//         alert("O mês possui 28 dias.")
//         break
//     case '4':
//     case '6':
//     case '9':
//     case '11':
//         alert("O mês possui 30 dias.")
//         break
//     default:
//         alert("Mês inválido")
        
// }

//ECERCÍCIO 4 - Passa a grana
// let contaBancaria = Number(prompt("Digite o número da sua conta bancária:"))
// let saldoInicial = 1300
// let novoSaldo = 0
// let operacao = Number(prompt("Dgite a operação que deseja realizar:\n(1) Saldo\n(2)Depósito\n(3) Saque"))
// novoSaldo += saldoInicial
// switch(operacao){
//     case 1:
        
//         alert("Seu saldo é R$" + saldoInicial + ".")
//         break
//     case 2:
//         novoSaldo = prompt("Qual o valor do depósito: R$")
//         novoSaldo = parseFloat(novoSaldo)
//         alert("Seu saldo atual é R$" + novoSaldo)
//         break
//     case 3:
//         let saque = prompt("Qual o valor deseja sacar: R$")
//         saque = parseFloat(saque)
//         novoSaldo -= saque

//         if(saque <= novoSaldo){
//             alert("Seu saldo atual é R$", novoSaldo)
//         }else{
//             alert("Saldo insuficiente.")
//         }
//         break
//     default:
//         alert("Opção inválida!")
    

// }

//EXERCÍCIO 5 - E-COMEMERCE


// let valorCompra = parseFloat(prompt("Digite o valor do produto: R$"))
// let assinante = Number(prompt("Você possui algum benefício para assinante? Digite o número:\n1 - Assinante Premium\n2 - Assinante Gold\n3 - Assinante Silver\n4 - Não assinante "))
// let frete = 12.5

// switch(assinante){
//     case 1:
//         alert(`O valor total da sua compra é R$${valorCompra - (valorCompra * 0.2)}.`)
//         break
//     case 2:
//         alert(`O valor total da sua compra é R$${valorCompra - (valorCompra * 0.2) + frete}.`)
//         break
//     case 3:
//         alert(`O valor total da sua compra é R$${valorCompra - (valorCompra * 0.1) + frete}.`)
//         break
//     case 4:
//         alert(`O valor total da sua compra é R$${valorCompra}.`)
//         break
//     default:
//         alert(`Opção inválida`)
// }

//EXERCÍCIO 6 - Peteca

// let arremesso = 0
// let soma = 0

// while (arremesso < 3) {
//     let pontos = Number(prompt(`Arremesse a peteca.\nQuantos pontos marcou:`))
//     soma += pontos
//     arremesso++
    
// }
//     switch(true){
//         case soma == 15:
//             alert("Deus da peteca")
//             break
//         case soma <= 14:
//             alert("Petequeiro profissa")
//             break
//         case soma <= 9:
//             alert("Petequeiro de final de semana")
//             break
//         case soma <= 4:
//             alert("Pseudo-petequeiro")
//             break
//         case soma == 0:
//             alert("Avaí das petecas")
//             break
//         default:
//             alert("Pontuação inválida")

//     }

//EXERCÍCIO 7

// let genero = Number(prompt("Escolha o genêro de sua preferência:\n(1) Comédia\n(2) Drama\n(3) Ação "))
// switch(genero){
//     case 1:
//         alert("Se beber não case")
//         break
//     case 2:
//         alert("Grays Anathomy")
//         break
//     case 3:
//         alert("Velozes e furiosos")
//         break
//     default:
//         alert("Opção inválida.")
// }

//EXTRA 1 - IDH

// let local = prompt("Digite a localidade para encontrar o IDH:")
// let renda = parseFloat(prompt("De 0 a 10 digite qual a renda local:"))
// let educacao = parseFloat(prompt("De 0 a 10, digite qual o nível de educação local:"))
// let saude = parseFloat(prompt("De 0 a 10, digite qual o valor no aspecto saúde local:"))
// let idh = ((renda + educacao + saude) / 3) * 0.1
// switch(true){
//     case idh <= 0.555:
//         alert(`${local} possui um IDH de ${idh.toFixed(3)}, que representa um BAIXO DESENVOLVIMENTO`)
//         break
//     case idh <= 0.699:
//         alert(`${local} possui um IDH de ${idh.toFixed(3)}, que representa um MÉDIO DESENVOLVIMENTO`)
//         break
//     case idh <= 0.799:
//         alert(`${local} possui um IDH de ${idh.toFixed(3)}, que representa um ALTO DESENVOLVIMENTO`)
//         break
//     case idh <= 1:
//         alert(`${local} possui um IDH de ${idh.toFixed(3)}, que representa um MUITO ALTO DESENVOLVIMENTO`)
//         break
//     default:
//         alert("Resultado inválido.")
// }

//EXTRA 2 - CONVERSOR

// let menuPrincipal = Number(prompt("Escolha umas das opções abaixo:\n(1) Conversão de Tempo\n(2) Conversão de tamanho\n(3) Conversão de Massa\n(4) Sair"))
// switch(menuPrincipal){
//     case 1:
//         let tempo = prompt("Escolha a conversão que deseja realizar:\nA - Converter tempo de horas para minutos\nB -  Converter tempo de minutos para segundos\nC - Cancelar e sair")
//         switch(tempo){
//             case 'A':
//                 let hora = parseFloat(prompt("Digite a hora que deseja converter:"))
//                 let minutos = hora * 60
//                 alert(`${hora} horas tem ${minutos} minutos.`)
//                 break
//             case 'B':
//                 minutos = parseFloat(prompt("Digite os minutos que deseja converter:"))
//                 let segundos = minutos * 60
//                 alert(`${minutos} minutos tem ${segundos} segundos.`)
//                 break
//             case 'C':
//                 alert("Volte ao menu anterior")
//                 break
                
//         }
//         break
//     default:
//     alert("teste")
}



