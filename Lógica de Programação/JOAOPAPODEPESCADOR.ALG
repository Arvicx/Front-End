Algoritmo "JoaoPapoDePescador"

Var
peso,excesso,multa : real


Inicio
escreval("Quantos KG possui o peso de peixes?")
leia(peso)
se(peso<=50)entao
   escreval("O peso está dentro do regulamento, ou seja, não precisará pagar nenhuma multa!")
senao
   excesso <- peso-50
   multa <- excesso*4
   escreva("O peso excedeu o peso limite por ",excesso)
   escreva("kg, ou seja, você deverá pagar R$",multa)
   escreva(" de multas!")
fimse

Fimalgoritmo