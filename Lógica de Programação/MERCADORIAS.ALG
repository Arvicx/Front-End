Algoritmo "Mercadorias"



Var
NomeMercadoria : vetor[1..3] de caractere
Valor : vetor[1..3] de real
i : inteiro
ValorTotal, Media : real
Inicio
para i de 1 até 3 faca
   escreval("Digite o nome da ", i, "° mercadoria:")
   leia (NomeMercadoria[i])
   limpatela()
fimpara
para i de 1 até 3 faca
   escreval("Digite o valor do ", NomeMercadoria[i], ":")
   leia (Valor[i])
   ValorTotal <- ValorTotal + Valor[i]
   limpatela()
fimpara
Media <- ValorTotal/3
limpatela()
escreval("O Valor Total das Mercadorias em estoque é de R$", ValorTotal)
escreval("A Média do Valor das Mercadorias é de R$", Media:2:2)

Fimalgoritmo