document.querySelector('#cep').addEventListener('focusout',pegarCEP)

function pegarCEP(){
    cep = document.querySelector('#cep').value

    fetch(`https://viacep.com.br/ws/${cep}/json`).then((info) => {
        return info.json()
    }).then((dados) => {
        console.log(dados)
        document.getElementById('estado').value = dados.estado
        document.getElementById('logradouro').value = dados.logradouro
        document.getElementById('cidade').value = dados.localidade
        document.getElementById('bairro').value = dados.bairro
    })

}