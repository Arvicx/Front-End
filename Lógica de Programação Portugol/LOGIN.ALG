Algoritmo "login"


Var
senha,senhaC,email,emailC : caractere

Inicio
senhaC <- "1234"
emailC <- "meuemail@gmail.com"

escreval("Digite seu email: ")
leia (email)
escreval("Digite sua senha: ")
leia (senha)

se (senha = senhaC) e (email = emailC) entao
   escreval("Login efetuado com sucesso!")
senao
   escreval("Usuário ou senha incorretos! Tente novamente.")
fimse

Fimalgoritmo