// Dom
// Url - Location
// "Botão de Voltar" - History
// "Site" / Conteudo - Document

// window.location.reload()
// window.location = "https://www.google.com"

// Document - Documento
// getElementById - Busca o sujeito pelo id
// inner - Coloca um elemento 
// innerText - Apenas texto
// innerHTML - Interpreta texto e HTML
document.getElementById("catalogo").innerHTML = "<h3>aaaa</h3>"
document.querySelector("#catalogo").innerHTML = "<h3>Ola</h3>"

function registrarNome(){
    nome = document.querySelector('#inputNome').value
    alert("O seu nome é "+nome)

    document.querySelector('#catalogo').innerHTML = `
       <div id="nomeDiv">
            eu ${nome} sou muito top e programador
        </div>
    `
}