Algoritmo "Mercadorias"



Var
NomeMercadoria : vetor[1..3] de caractere
Valor : vetor[1..3] de real
i : inteiro
ValorTotal, Media : real
Inicio
para i de 1 at� 3 faca
   escreval("Digite o nome da ", i, "� mercadoria:")
   leia (NomeMercadoria[i])
   escreval("Digite o valor do produto ", NomeMercadoria[i], ":")
   leia (Valor[i])
   ValorTotal <- ValorTotal + Valor[i]
   limpatela()
fimpara
Media <- ValorTotal/3
escreval("O Valor Total das Mercadorias em estoque � de R$", ValorTotal)
escreval("A M�dia do Valor das Mercadorias � de R$", Media:2:2)

Fimalgoritmo