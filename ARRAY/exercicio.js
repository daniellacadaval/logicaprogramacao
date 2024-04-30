let numerosPares = []

for(let i = 2; i<21; i++){
    if(i % 2 == 0){
            numerosPares.push(i)
            console.log('Array agora:' + numerosPares);
    }   
}
console.log(numerosPares);
console.log('Mudar o segundo elemento');
numerosPares[2] = 12
console.log(numerosPares);

let fruta = ["banana", "maça", "uva"]
console.log('Adicionar 1 elemento');
fruta.push("morango")
console.log(fruta);
console.log('Remover o segundo elemento');
fruta.splice(2,1)
console.log(fruta);

console.log("Contenar amigos");
let amigos = ["Tainá", "Renata", "Bruno"]
let grupo = ["Daniella", "Vitor", "Selene"]
let concatenacao = amigos.concat(grupo)
console.log(concatenacao);

console.log('Soma das duas primeiras idades');
let idade = [20, 28, 24, 31, 22, 20]
console.log(idade[0] + idade[1]);

console.log('Média de todas as idades');
let soma = 0
for(let i = 0; i < idade.length; i++){
    soma += idade[i]    
}
let media = soma / idade.length
console.log(media.toFixed(2));

console.log('Adicionar itens');
let compras = ["Maças", "Pão", "Leite"]
compras.push("Ovos", "Arroz")
console.log(compras);

console.log('Excluir itens');
compras.splice(2,1)
console.log(compras);

