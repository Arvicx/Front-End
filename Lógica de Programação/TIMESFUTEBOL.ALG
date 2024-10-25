Algoritmo "TimesFutebol"


Var
timeUm,TimeDois : caractere
GolTimeUm,GolTimeDois : inteiro

Inicio
escreval("Digite o nome do primeiro time: ")
leia(timeUm)
escreval("Digite o nome do segundo time: ")
leia(timeDois)
escreval("Quantos gols o ",timeUm, " marcou na partida?")
leia(GolTimeUm)
escreval("Quantos gols o ",timeDois, " marcou na partida?")
leia(GolTimeDois)
se(GolTimeUm>GolTimeDois)entao
   escreval("O ",timeUm, " Venceu o ",timeDois," por",GolTimeUm," a ",GolTimeDois)
senao
   se (GolTimeUm=GolTimeDois) entao
      escreval(timeUm, " e ", timeDois," empataram!")
   senao
      escreval("O ",timeDois, " Venceu o ",timeUm," por",GolTimeDois," a ", GolTimeUm)
   fimse
fimse

Fimalgoritmo