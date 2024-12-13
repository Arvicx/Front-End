const receitas = {
    'Doces' : [
        {
            'nome' : 'Beijinho',
            'receita' : 'Numa panela, misture o leite condensado, a manteiga e o coco ralado. Leve ao fogo e misture por aproximadamente 15 minutos. Retire a mistura do fogo e deixe amornar. Modele a massa em formato de bolinhas, passe pelo açúcar cristal ou coco ralado e finalize com cravos-da-índia.'
        },
        {
            'nome' : 'Brigadeiro',
            'receita' : 'Em uma panela funda, acrescente o leite condensado, a margarina e o chocolate em pó. Cozinhe em fogo médio e mexa até que o brigadeiro comece a desgrudar da panela. Deixe esfriar e faça pequenas bolas com a mão passando a massa no chocolate granulado.'
        }
    ],
    'Salgados' : [
        {
            'nome' : 'Coxinha',
            'receita' : 'Leve ao fogo o leite, a margarina e o caldo. Deixe ferver. Despeje de uma só vez o trigo e mexa bem. Depois retire da panela e coloque sobre a mesa. Sove um pouco e comece a modelar as coxinhas. Coloque para fritar em óleo quente, espere dourar, retire e sirva.'
        },
        {
            'nome' : 'Kibe',
            'receita' :'Leve ao fogo 400 g de carne moída com 1 dente de alho picado, sal e pimenta. Deixe cozinhar até fritar. Junte 1 colher de sopa de salsinha e reserve. Em uma vasilha, coloque o trigo para kibe e deixe hidratar em aproximadamente 500ml de água. Deixe por mais ou menos 40 minutos, até que a agua desapareça. Junte ao trigo a carne restante, o alho picado, a salsinha, a hortelã, o sal e a pimenta. Amasse até que fique homogêneo. Faça bolinhas médias (aproximadamente 1 colher de sopa de massa), enrole e com o dedo, faca um buraquinho no meio. Recheie com a carne moída e com a ponta dos dedos, feche o kibe. Frite em óleo (fogo medio). Sirva com limão e tabule. Observação: Pode-se congelar. Para fritar, não descongele previamente, é só tirar do freezer e colocar no óleo quente. Porém, deve-se fritar em fogo brando para que não fique congelado dentro. Outra opção existente é montar o kibe de bandeja. Siga os passos acima, porém, em vez de enrolar os kibes, divida a massa em duas partes. Espalhe uma das partes no fundo de uma bandeja retangular, recheie com a carne moída e/ou queijo. (uma dica boa eh usar ricota fresca) Tempere com azeite, sal, pimenta do reino, salsa, manjericão. Depois cubra com a outra parte da massa e leve ao forno por aproximadamente 30/40 minutos. Servir também com limão e tabule.'
        }

    ],
    'Sucos' : [ 
        {
            'nome' : 'Suco de Laranja com Morango',
            'receita' : 'Lavar muito bem e secar as laranjas e os morangos. Cortar as laranjas ao meio, retirar as sementes e espremê-las para retirar o suco. Bater no liqüidificador o suco das laranjas, os morangos, o açúcar e o gelo. Está pronto para servir.'
        },
        {
            'nome' : 'Suco de Couve com Limão',
            'receita' : 'Bata a couve, com a quantidade de água que quiser. Depois côe o suco em uma jarra , espreme o limão, adoçe e beba.'
        }

    ]
}



function escolherItem(){
    document.querySelector('body'.innerHTML += `
        
        <h3>Escolha uma das nossas categorias!</h3>
        <h5>1. Doces</h5>
        <h5>2. Salgados</h5>
        <h5>3. Sucos</h5>


        
     `)
}


const printar = receitas.Doces.map((elemento) =>{
    document.querySelector('body').innerHTML += `
        <h3>${elemento}</h3>
    `
}) 
