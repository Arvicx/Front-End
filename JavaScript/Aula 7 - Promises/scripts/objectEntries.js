//Object Entries
const filmes = {
    'Nome' : 'Sociedade da Neve',
    'Desc' : 'Lorem',
    'Gênero' : 'Drama'
}

console.log(filmes)
console.log(filmes.Nome)

//keys - retorna os atributos (ou seja, nesse caso Nome, Desc e Gênero)
const filmesKey = Object.keys(filmes)
console.log(filmesKey)

//entries - retorna em listas os valores (valor) (em vetores)
const filmesEntries = Object.entries(filmes)
console.log(filmesEntries)

//map
const nomesFilmes = ['Ilha do Medo','Bruxa de Blair','Interestelar', 'Velozes e Furiosos']

const lista = {
    'filmes' : [
        {
            'nome' : 'Ilha do Medo',
            'desc' : 'Lorem'
        },
        {
            'nome' : 'Bruxa de Blair',
            'desc' : 'loremmm'
        },
    ],
    'jogos' : [
        {
            'nome' : 'life is strange',
            'desc' : 'a vida eh estranha'
        },
        {
            'nome' : 'roblox',
            'desc' : 'roooblocx'
        },
        {
            'nome' : 'the last of us',
            'desc' : 'o ultimo de nos'
        }
    ]
}

const resultado = lista.filmes.map((elemento) => {
    //console.log(elemento.nome)
    document.querySelector('body').innerHTML += `
        <h3>${elemento.nome}</h3>
    `
})