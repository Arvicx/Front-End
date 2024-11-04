Algoritmo "nadador"



Var
idade : inteiro
procedimento Nadador(idade : inteiro)
   inicio
      se (idade > 18)entao
         escreval("Classificado(a) para a categoria Adultos!")
      senao
         se (idade >= 14)entao
            escreval("Classificado(a) para a categoria Juvenil B!")
         senao
            se(idade >= 12) entao
               escreval("Classificado(a) para a categoria Juvenil A!")
            senao
               se(idade >=8) entao
                  escreval("Classificado(a) para a categoria Infantil B!")
               senao
                  se(idade >=5) entao
                     escreval("Classificado(a) para a categoria Infantil A!")
                  senao
                     escreval("Idade Insuficiente para qualquer categoria.")
                  fimse
               fimse
            fimse
         fimse
      fimse
fimprocedimento


Inicio
escreval("Digite sua idade:")
leia(idade)
Nadador(idade)
Fimalgoritmo
