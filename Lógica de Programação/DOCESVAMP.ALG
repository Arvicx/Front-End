Algoritmo "DocesVamp"
//Compras por KG - Bolo
//Desconto (por situação)
//Quantia de Unidade- Docinho


Var
opcao : caractere
valorTotal,Trufa,BoloNoPote,CopoDaFelicidade,Docinho,Pudim : real
quantidade : inteiro
Inicio
//entrada
Trufa <- 8,00
BoloNoPote <- 10,00
CopoDaFelicidade <- 15,00
Docinho <- 3,00
Pudim <- 25,00
escreval("***********Catálogo***********")
escreval("1 - TRUFA                  R$ 8,00")
escreval("2 - BOLO NO POTE           R$ 10,00")
escreval("3 - COPO DA FELICIDADE     R$ 15,00")
escreval("4 - DOCINHO                R$ 3,00")
escreval("5 - PUDIM                  R$ 25,00")
escreval("6 - CANCELAR")
escreval("7 - CARRINHO")

para(opcao<6)faca
   leia(opcao)
   escolha(opcao)
      caso "1"
         escreval("Quantas Trufas gostaria de comprar?")
         leia(quantidade)
         escreva("Você adicionou ",quantidade)
         escreval(" Trufa(s) ao carrinho!")
         valorTotal <- valorTotal+(Trufa*quantidade)
         escreval("Subtotal: ",valorTotal)
      caso "2"
         escreval("Quantos Bolos no Pote gostaria de comprar?")
         leia(quantidade)
         escreva("Você adicionou ",quantidade)
         escreval(" Bolo(s) no Pote ao carrinho!")
         valorTotal <- valorTotal+(BoloNoPote*quantidade)
         escreval("Subtotal: ",valorTotal)
      caso "3"
         escreval("Quantos Copos da Felicidade gostaria de comprar?")
         leia(quantidade)
         escreva("Você adicionou ",quantidade)
         escreval(" Copo(s) da Felicidade ao carrinho!")
         valorTotal <- valorTotal+(CopoDaFelicidade*quantidade)
         escreval("Subtotal: ",valorTotal)
      caso "4"
         escreval("Quantos Docinhos gostaria de comprar?")
         leia(quantidade)
         escreva("Você adicionou ",quantidade)
         escreval(" Docinho(s) ao carrinho!")
         valorTotal <- valorTotal+(Docinho*quantidade)
         escreval("Subtotal: ",valorTotal)
      caso "5"
         escreval("Quantos Pudins gostaria de comprar?")
         leia(quantidade)
         escreva("Você adicionou ",quantidade)
         escreval(" Pudim(ns) ao carrinho!")
         valorTotal <- valorTotal+(Pudim*quantidade)
         escreval("Subtotal: ",valorTotal)
      caso "6"
         escreval("Compra Cancelada!")
      caso "7"
         escreval("Total da Compra: R$",valorTotal)
      outrocaso
         escreval("Opção Inválida!")
   quantidade <- 0
fimescolha
fimalgoritmo

//saída

Fimalgoritmo