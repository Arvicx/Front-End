//CRUD
//CREATE - Criar
//READ - Ler
//UPDATE - Atualizar
//DELETE - Deletar

document.querySelector('#logar').addEventListener('click',logar)
function logar(){
    let nome_digitado = document.querySelector('#nome').value
    let nome_salvo = ''
    let senha_digitada = document.querySelector('#senha').value
    let senha_salva = ''
    let login = false

    fetch('dados.json').then((response) => {
        return response.json()
    }).then ((dados) => {
        dados.usuarios.map((informacoes) => {
            nome_salvo = informacoes.nome
            senha_salva = informacoes.senha

            console.log(nome_digitado)
            console.log(nome_salvo)
            console.log(senha_digitada)



            console.log(senha_salva)

            if(nome_digitado == nome_salvo && senha_digitada == senha_salva){
                login = true
            }

            if(login){
                alert("login efetuado")
                localStorage.setItem('nome',nome_digitado) 
                window.location = '/home.html'
            }else{
                document.querySelector('#resposta').innerHTML = "Usuário ou Senha Incorreta"
            }
        })
    })

   
}

