Algoritmo "DocesVamp"
//Compras por KG - Bolo
//Desconto (por situação)
//Quantia de Unidade- Docinho


Var
opcao, nomedoproduto : caractere
valorTotal,Trufa,BoloNoPote,CopoDaFelicidade,Docinho,Pudim : real
quantidade : inteiro

//inicio adicionarcarrinho
procedimento adicionarAoCarrinho(vp: real)
   VAR
      nomep : caractere
   INICIO
   escreval("Quantos(as) ",nomedoproduto," gostaria de adicionar?")
   leia(quantidade)
   escreval(quantidade," ",nomedoproduto, " adicionados(as)!")
   valorTotal <- valorTotal+(vp*quantidade)
   escreval("Subtotal: ",valorTotal)
fimprocedimento
//fim adicionarcarrinho

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

   leia(opcao)
   escolha(opcao)
      caso "1"
         nomedoproduto <- "Trufa(s)"
         adicionarAoCarrinho(trufa)
      caso "2"
         nomedoproduto <- "Bolo(s) no Pote"
         adicionarAoCarrinho(BoloNoPote)
      caso "3"
         nomedoproduto <- "Copo(s) da Felicidade"
         adicionarAoCarrinho(CopoDaFelicidade)
      caso "4"
         nomedoproduto <- "Docinho(s)"
         adicionarAoCarrinho(Docinho)
      caso "5"
         nomedoproduto <- "Pudim(ns)"
         adicionarAoCarrinho(Pudim)
      caso "6"
         escreval("Compra Cancelada!")
      caso "7"
         escreval("Total da Compra: R$",valorTotal)
      outrocaso
         escreval("Opção Inválida!")
   fimescolha


Fimalgoritmo
