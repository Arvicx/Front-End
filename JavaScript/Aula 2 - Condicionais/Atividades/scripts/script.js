function calculadora(){
    escolha = prompt("Que tipo de conta você deseja fazer? 1. Soma | 2. Subtração | 3. Multiplicação | 4. Divisão")
    n1 = Number(prompt("Digite o primeiro número:"))
    n2 = Number(prompt("Digite o segundo número:"))

    switch(escolha){
        case '1':
            resultado = n1 + n2
            alert("O resultado da soma entre "+n1+" e "+n2+" é igual a "+resultado)
            break
        case '2':
            resultado = n1 - n2
            alert("O resultado da subtração entre "+n1+" e "+n2+" é igual a "+resultado)
            break
        case '3':
            resultado = n1 * n2
            alert("O resultado da multiplicação entre "+n1+" e "+n2+" é igual a "+resultado)
            break
        case '4':
            resultado = n1 / n2
            alert("O resultado da divisão entre "+n1+" e "+n2+" é igual a "+resultado)
            break    
    }
}

function mediaAluno(){
    nota = Number(prompt("Qual a média final do aluno?"))
    if(nota >= 7){
        alert("Aluno(a) Aprovado(a)!!")
    }else{
        alert("Aluno(a) Reprovado(a)!!")
    }
}

function diaDaSemana(){
    escolha = prompt("Digite um número entre 1 a 7")

    switch(escolha){
        case '1':
            alert("Domingo!")
            break
        case '2':
            alert("Segunda-Feira!")
            break
        case '3':
            alert("Terça-Feira!")
            break
        case '4':
            alert("Quarta-Feira!")
            break
        case '5':
            alert("Quinta-Feira!")
            break
        case '6':
            alert("Sexta-Feira!")
            break
        case '7':
            alert("Sábado!")
            break
    }
}