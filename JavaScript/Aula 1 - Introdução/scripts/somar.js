var n1 = prompt("Digite o primeiro número:")
var n2 = prompt("Digite o segundo número:")

// Number() - transforma texto em número
var soma = Number(n1) + Number(n2)
alert("O resultado da soma entre "+n1+" e "+n2+" é igual a: "+soma)

// var - Variável Global e Sobrescrevível
var variavel_global = 1
// let - Varíavel Local (Temporária) e Sobrescrevível
let variavel_local = 3
// const - Global e Não Sobrescrevível
const variavel_constante = "fixo"