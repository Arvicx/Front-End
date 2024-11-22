function testes(){
    contador = 0

    // while (contador < 3){
    //     alert(`Que maneiro!! Fiz ${contador+1} vezes`)
    //     contador++
    // }

    for(var i = 0;i<3;i++){
        alert(`Que Maneiro!!! Fiz ${i+1} vezes`)
    }
}

// testes()

function carregarCatalogo(){

    var livros = [
        ["images/hobbit.jpg","O Hobbit"],
        ["images/QueroComerSeuPancreas.jpg","Quero Comer Seu Pâncreas"],
        ["images/Chainsaw Man.jpg","Chainsaw Man Vol. 1"],
        ["images/Life is Strange Waves.jpg","Life is Strange: Waves"],
        ["images/Life Is Strange.jpg","Life is Strange: Dust"],
        ["images/TheWitcher.jpg","The Witcher"]
    ]
    livros.forEach(cadaLivro =>{
        document.getElementById('catalogo').innerHTML +=`
        <div class="livro">
            <img src="${cadaLivro[0]}" alt="">
            <h4>${cadaLivro[1]}</h4>

            <button>
                Adicionar
                <img src="images/icons/plus-circle.svg" alt="">
            </button>
        </div>

        `
    })
}

carregarCatalogo()