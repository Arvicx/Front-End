var clientes = prompt("Quantos clientes há na mesa?")
var total = prompt("Qual foi o total da conta?")

var divisao = Number(total) / Number(clientes)

alert("O valor total da conta foi de R$"+total+",00, dividido por "+clientes+" Clientes, resulta no valor de R$"+divisao+",00 para cada cliente.")