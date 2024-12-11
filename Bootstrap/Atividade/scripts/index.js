lista_categorias = []

class Categoria{
    constructor(titulo, img, desc, link, modalEscolhido){
        this.titulo = titulo
        this.img = img
        this.desc = desc
        this.link = link
        this.modalEscolhido = modalEscolhido 
    }
}

lista_categorias.push(new Categoria('Homem Aranha no Aranhaverso', 'images/bannerAranhaverso.png', '<p>Em Homem-Aranha no Aranhaverso, Miles Morales é um jovem negro do Brooklyn que se tornou o Homem-Aranha inspirado no legado de Peter Parker, já falecido.</p><p>Entretanto, ao visitar o túmulo de seu ídolo em uma noite chuvosa, ele é surpreendido com a presença do próprio Peter, vestindo o traje do herói aracnídeo sob um sobretudo.</p><p>A surpresa fica ainda maior quando Miles descobre que ele veio de uma dimensão paralela, assim como outras versões do Homem-Aranha.</p>','https://www.adorocinema.com/filmes/filme-233998/vod/','janelaModal'))
lista_categorias.push(new Categoria('Tudo em Todo Lugar ao Mesmo Tempo', 'images/bannerTudoEmTodoLugar.png', '<p>Em Tudo em Todo o Lugar ao Mesmo Tempo, acompanhamos uma sobrecarregada imigrante chinesa, Evelyn Wang (Michelle Yeoh) que com sua lavanderia à beira do fracasso e seu casamento com o marido covarde em ruínas, ela luta para lidar com tudo, incluindo um relacionamento ruim com seu pai crítico e sua filha (Stephanie Hsu).</p><p>E, como se não bastasse enfrentar a crise pessoal, Evelyn precisa se preparar para uma reunião desagradável com uma burocrata impessoal: Deirdre (Jamie Lee Curtis), a auditora da Receita Federal.</p><p>No entanto, à medida que a agente severa perde a paciência, uma inexplicável fenda no multiverso se abre, e se torna uma possibilidade para a exploração reveladora de realidades paralelas.</p><p>Evelyn parte rumo a uma aventura onde, sozinha, precisará salvar o mundo e impedir que uma entidade maligna destrua as finas e incontáveis ​​camadas do mundo invisível.</p><p>Explorando outros universos e outras vidas que poderia ter vivido, as coisas se complicam ainda mais, quando ela fica presa nessa infinidade de possibilidades sem conseguir retornar para casa.</p>','https://www.adorocinema.com/filmes/filme-270743/','janelaModal2'))
lista_categorias.push(new Categoria('Parasita', 'images/bannerParasita.png', '<p>Em Parasita, toda a família de Ki-taek (Song Kang Ho) está desempregada, vivendo num porão sujo e apertado.</p><p> Uma obra do acaso faz com que o filho adolescente da família comece a dar aulas de inglês à garota de uma família rica.</p><p> Fascinados com a vida luxuosa destas pessoas, pai, mãe, filho e filha bolam um plano para se infiltrarem também na família burguesa, um a um.</p><p> No entanto, os segredos e mentiras necessários à ascensão social custarão caro a todos.</p>','https://www.adorocinema.com/filmes/filme-255238/','janelaModal3'))


lista_categorias.forEach(categoria => {
    document.querySelector('#categoriaItems').innerHTML +=`
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${categoria.img}" class="img-fluid rounded-start" alt="...">
            </div>

            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${categoria.titulo}</h5>

                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${categoria.modalEscolhido}">
                        Saiba Mais
                    </button>

                    <div id="${categoria.modalEscolhido}" class="modal fade">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h3 class="modal-title">${categoria.titulo}</h3>
                                    <button type="button" class="btn btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div class="modal-body">
                                    ${categoria.desc}
                                </div>
                                <div class="modal-footer">
                                    <a href="${categoria.link}" target="_blank">Saiba onde Assistir!</a>
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>


    `
});