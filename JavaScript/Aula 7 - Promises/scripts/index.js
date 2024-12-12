//Promise é uma promessa
//resolve - cumprimos a promessa
//reject - 'rejeitamos' a promessa ou não cumprimos
//promistate - estado da promessa
//fullfilled - promessa cumprida
//rejected - promessa quebrada
//promiseresult - o motivo do status


const promessa = new Promise((resolve,reject) =>{
    let nome = 'Arr'

    if (nome == 'Arthur'){
        resolve({'adm':'Arthur'})
        // function alerta(){
        //     alert('oi')
        // }
        // resolve(alerta())
    }else{
        reject('Porque o usuário não é Arthur')
    }
}) 

//then - espera o resolve (verdadeiro/positivo) e retorna o que o resolve tiver, caso reject acusa um erro
//then espera que dê certo
promessa.then((data) =>{
    console.log(data)
})

//catch - espera o reject(falso/negativo) e retorna o que o reject correspondente tiver, caso resolve ele não executa
//catch espera que dê errado
promessa.catch((erro) =>{
    console.log(erro)
})

function sujeitoDemorado(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            console.log('rodando')
            resolve()
        },2000)
    })
}


async function carregandoConteudo(){
    console.log('oi')
    await sujeitoDemorado()
    console.log('TERMINEI')
}

carregandoConteudo()