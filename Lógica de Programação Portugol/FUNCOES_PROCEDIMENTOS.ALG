Algoritmo "funcoes_procedimentos"



Var

procedimento msg(vt: real)
   INICIO
   escreval("----------------")
   escreval("Item Adicionado")
   escreval("Valor Total", vt)
   escreval("----------------")
   
   se (vt=100)entao
      escreval("Esse trem é 100%")
   fimse
fimprocedimento

Inicio
msg(45)
msg(100)
msg(200)
msg(3)
msg(90)

Fimalgoritmo