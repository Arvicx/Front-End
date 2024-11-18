function explicacao1(){
   escolha = confirm("Deseja rodar true ou false?")

   if(escolha){
    alert("Você escolheu true")
   }else{
    alert("Você escolheu false")
   }
}

function explicacao2(){
    alert("Seja bem-vindo a Doces Vamp!")
    escolha = prompt ("(A) Bolo no Pote R$10,00 | (B) Açaí R$20,00 | (C) Torta R$15,00")

    switch(escolha){
        case 'A': 
            alert("Você escolheu Bolo no Pote!")
            break
        case 'B':
            alert("Você escolheu Açaí!")
            break
        case 'C':
            alert("Você escolheu Torta!")
            break
    }
}

function explicacao3(){
    // idade = parseInt
    // idade = parseFloat
    idade = Number(prompt("Digite a sua idade:"))
    if(idade >= 18){
        alert("Seja bem-vindo ao nosso site!")
        // Document - Documento Html
        // QuerySelector - "Buscador"
        // InnerHTML - "Dentro do Elemento"
        document.querySelector('body').innerHTML = "VIVA!!!"
    }else{
        alert("Idade Inválida")
        // Window - Janela
        // Location - URL
        window.location = "https://www.google.com"
    }
}