Algoritmo "PositivoNegativo"




Var
numero,A,B : real


Inicio
escreval("Digite um número: ")
leia(numero)
se(numero>0)entao
   A <- numero
   escreval("O número digitado é positivo, portanto está armazenado em A")
senao
   se(numero=0)entao
      escreval("O número digitado é 0, portanto é neutro.")
   senao
      B <- numero
      escreval("O número digitado é negativo, portanto está armazenado em B")
   fimse
fimse
Fimalgoritmo

