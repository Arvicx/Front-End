lista_categorias = []

class Categoria{
    constructor(titulo, img, desc, marca){
        this.titulo = titulo
        this.img = img
        this.desc = desc
        this.marca = marca
    }
}

lista_categorias.push(new Categoria('Sucos', 'images/Item1.jpg', 'Os Sucos mais Saborosos do Panteão!','Suco Natural de Laranja por @Néctar'))
lista_categorias.push(new Categoria('Refrigerantes', 'images/Item2.jpg', 'Os Mais Refrescantes Refris dos Deuses!', 'Refri por @Néctar'))
lista_categorias.push(new Categoria('Bebidas Alcóolicas', 'images/Item3.jpg', 'Todo o arsenal das Adegas e Tabernas Divinas!', 'Vinho Tinto Seco por @Néctar'))
lista_categorias.push(new Categoria('Sodas Italianas', 'images/Item4.jpg', 'Divinamente indicado para os amantes de água com gás!', 'Soda Italiana de Limão por @Néctar'))
lista_categorias.push(new Categoria('Drinks sem Álcool', 'images/Item5.jpg', 'Drinks não alcóolicos para quem não pode abdicar dos deveres sagrados diários!', 'Negroni sem Álcool por @Néctar'))
lista_categorias.push(new Categoria('Águas', 'images/Item6.jpg', 'O líquido necessário para todos os deuses existentes!', 'Água Vulcânica por @Néctar'))

lista_categorias.forEach(categoria => {
    document.querySelector('#categoriaItems').innerHTML += `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${categoria.img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${categoria.titulo}</h5>
                    <p class="card-text">${categoria.desc}</p>
                    <p class="card-text"><small class="text-body-secondary">${categoria.marca}</small></p>
                </div>
            </div>
        </div>
    </div>


    `
});