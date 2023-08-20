const form = document.getElementById("form-adicionar")
let linhas = ""
const contato = [];
const numeroContato = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaContato();
    atualizaAgenda();
} )

function adicionaContato () {
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('numero-contato')

    if (contato.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já existe`)
    } else if (numeroContato.includes(inputNumeroContato.value)) {
        alert(`O número de telefone: ${inputNumeroContato.value} já existe`)
    } else {
        contato.push(inputNomeContato.value)
        numeroContato.push(inputNumeroContato.value);



        let linha = '<tr>'
        linha += `<td>${inputNomeContato.value}</td>`
        linha += `<td>${inputNumeroContato.value}</td>`
        linhas += '</tr>'

        linhas += linha
    }

    inputNomeContato.value = ''
    inputNumeroContato.value = ''
}

function atualizaAgenda () {
    const agendaContatos = document.querySelector('tbody')
    agendaContatos.innerHTML = linhas;
}