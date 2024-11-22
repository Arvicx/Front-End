function carregarCatalogo(){

    var filmes = [
        ["images/Efeito Borboleta.jpg","Efeito Borboleta"],
        ["images/Corra.jpg","Corra!"],
        ["images/AindaEstouAqui.jpg","Ainda Estou Aqui"],
        ["images/InternetOFilme.jpg","Internet O Filme"],
        ["images/CisneNegro.jpg","Cisne Negro"],
        ["images/QueroComerSeuPancreasFilme.jpg","Quero Comer Seu Pâncreas"]
    ]
    filmes.forEach(cadafilme =>{
        document.getElementById('catalogo').innerHTML +=`
        <div class="filme">
            <img src="${cadafilme[0]}" alt="">
            <h4>${cadafilme[1]}</h4>

            <button>
                Adicionar
                <img src="images/icons/plus-circle.svg" alt="">
            </button>
        </div>

        `
    })
}

carregarCatalogo()