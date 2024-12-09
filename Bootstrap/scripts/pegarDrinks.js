function buscaAlfabetica(){
    letra = document.querySelector("#opcoesAlfabeticas").value

    document.querySelector('#resultados').innerHTML = ""
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letra}`).then((response) =>
        {
            return response.json()
        }).then((data) => {
            console.log(data)
            listaDrinks = data.drinks
        
            listaDrinks.forEach(drink => {
                document.querySelector('#resultados').innerHTML += `
                <div id="resultado">
                    <img src="${drink.strDrinkThumb}">
                    <h3>${drink.strDrink}</h3>
                </div>
            `
            });
        
            
        })
}

function buscaAleatoria(){
    document.querySelector('#resultados').innerHTML = ""
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`).then((response) =>
        {
            return response.json()
        }).then((data) => {
            console.log(data)
            listaDrinks = data.drinks
        
            listaDrinks.forEach(drink => {
                document.querySelector('#resultados').innerHTML += `
                <div id="resultado">
                    <img src="${drink.strDrinkThumb}">
                    <h3>${drink.strDrink}</h3>
                </div>
                `
            });
        
            
        })
}

function buscaEspecifica(){
    termo = document.querySelector("#pesquisar").value

    document.querySelector('#resultados').innerHTML = ""
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${termo}`).then((response) =>
        {
            return response.json()
        }).then((data) => {
            console.log(data)
            listaDrinks = data.drinks
        
            listaDrinks.forEach(drink => {
                document.querySelector('#resultados').innerHTML += `
                <div id="resultado">
                    <img src="${drink.strDrinkThumb}">
                    <h3>${drink.strDrink}</h3>
                </div>
            `
            });
        
            
        })
}