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
    for(let i=0; i < 4; i++){
        document.getElementById('catalogo').innerHTML +=`
        <div class="livro">
            <img src="images/hobbit.jpg" alt="">
            <h4>O Hobbit</h4>

            <button>
                Adicionar
                <img src="images/icons/plus-circle.svg" alt="">
            </button>
        </div>

        `
    }
}

carregarCatalogo()