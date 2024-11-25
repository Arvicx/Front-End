class Usuario{
    // id, @, nome, email, bio, genero
    constructor(id, username, nome, email, bio, genero){
        this.id = id;
        this.username = username;
        this.nome = nome;
        this.email = email;
        this.bio = bio;
        this.genero = genero;
        this.postar = function(pensamento){
            document.querySelector("#resposta").innerHTML += `
            <div class="post">
                <h3>${this.username}</h3>
                <p>${pensamento}</p>
            </div>
            `
        }
    }
}

var user1 = new Usuario("artur_com_h","Artu","Arthur","arthuro@gmail.com","gosto de muita coisa","Masculino")
var user2 = new Usuario("currybrand","GSArtu","GoldenStateArthur","gswarthur@gmail.com","gosto do golden state warriors","Bay Area")

function postarFeed(){
    alert("Postado com Sucesso")
    pensamento = document.querySelector("#pensamento").value

    user1.postar(pensamento)
}