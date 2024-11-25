// var clienteNome = "Leo"
// var clienteCpf = 14918249142
// var clienteEmail = "leodelas@gmail.com"
// var clienteTelefone = 32328283838
// var clienteTipoConta = "Físico"
// var clienteSaldo = 0

// var clienteNome2 = "Alexandra"

class Cliente {
    nome;
    dataNascimento;
    cpf;
    email;
    telefone;
    tipoDeConta;
    saldo;
    depositar(valor){
        if (valor <= 0){
            console.log("Operação não permitida.")
        }else{
            this.saldo += valor
            console.log(`O valor de R$${valor} foi depositado!`)
        }
    }
    //Argumento - é o valor passado
    //Parâmetro - é a palavra que vai salvar o argumento
    pix(valor){
        if (this.saldo < valor){
            console.log("Você não tem o saldo disponível.")
        }
        else{
            this.saldo -= valor
            console.log(`Pix de valor R$${valor} foi efetuado com sucesso!`)
        }
    }
}

var cliente1 = new Cliente
cliente1.nome = "Leo"
cliente1.dataNascimento = "12/02/2000"
cliente1.cpf = 913312321-23
cliente1.email = "Leozindelas@arroba.com"
cliente1.saldo = 0
cliente1.pix(100)

console.log(cliente1)