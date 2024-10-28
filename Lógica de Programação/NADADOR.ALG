Algoritmo "nadador"



Var
idade : inteiro
procedimento Nadador(idade : inteiro)
   inicio
      se (idade < 5)entao
         escreval("Idade insuficiente.")
      senao (idade >= 5 e idade <=7)
         escreval("Classificado(a) para Infantil A!")
      senao (idade>=8 e idade <=11)
         escreval("Classificado(a) para Infantil B!")
      senao (idade>=12 e idade<=13)
         escreval("Classificado(a) para Juvenil A!")
      senao (idade>=14 e idade<=17)
         escreval("Classificado(a) para Juvenil B!")
      senao (idade>=18)
         escreval("Classificado(a) para Adultos!")
      fimse
fimprocedimento


Inicio
escreval("Digite sua idade:")
leia(idade)
Nadador(idade)
Fimalgoritmo
