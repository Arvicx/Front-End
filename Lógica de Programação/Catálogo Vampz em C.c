#include <stdlib.h>
#include <stdio.h>
#include <locale.h>

//Montando Constantes
#define Trufa 8.00
#define BoloNoPote 10.00
#define CopoDaFelicidade 15.00
#define Docinho 3.00
#define Pudim 25.00

int main () {
//Declarando variáveis
char opcao;
float valorTotal, Trufa, BoloNoPote, CopoDaFelicidade, Docinho, Pudim;
int quantidade;

//Layout do Catálogo e Leitura da escolha do cliente
printf("**************Catálogo**************\n");
printf("1 - Trufa                R$ 8,00\n");
printf("2 - Bolo no Pote         R$ 10,00\n");
printf("3 - Copo da Felicidade   R$ 15,00\n");
printf("4 - Docinho              R$ 3,00\n");
printf("5 - Pudim                R$ 25,00\n");
printf("6 - Cancelar\n");
printf("7 - Carrinho\n");
scanf("%c", "&opcao");
return 0;
}