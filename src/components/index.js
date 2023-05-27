


function atualizarClientes() {
const ul = document.getElementById('listaClientes')
ul.innerHTML = ''
const clientes = fetch('http://localhost:3000/Clientes')


.then(resposta => resposta.json())
.then(clientesDados => {
    clientesDados.forEach(clientes => {
        const li = document.createElement ('li')
        li.innerText = `${clientes.nome} - ${clientes.email}- ${clientes.cpf} - ${clientes.telefone} - ${clientes.dataNasc}- ${clientes.telefone}- ${clientes.telefoneResp}- ${clientes.cidade}- ${clientes.estado}- ${clientes.usuario}- ${clientes.senha}- ${clientes.telefone}- ${clientes.comoConheceu}`

        ul.appendChild(li)
    })

})
}

atualizarClientes()

const formCadastroCliente = document.getElementById('formCadastroCliente')
formCadastroCliente.addEventListener('submit',(event) =>{
    event.preventDefault()
    cadastrarCliente(event)
})

function cadastrarCliente(form){
    const clienteNovo = {
        nome: form.target.nome.value,
        email: form.target.email.value,
        telefone: form.target.telefone.value,
        cpf: form.target.cpf.value,
        dataNasc: form.target.dataNasc.value, 
        telefone: form.target.telefone.value, 
        telefoneResp: form.target.telefoneResp.value, 
        cidade: form.target.cidade.value, 
        estado: form.target.estado.value,
        usuario: form.target.usuario.value, 
        senha: form.target.senha.value,
        comoConheceu: form.target.comoConheceu.value
    }
    fetch('http://localhost:3000/Clientes',{
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(clienteNovo)
    })
    .then(resposta => {
        if(resposta.status != 201){
            alert('Erro ao Cadastrar!')
            return
        }
        alert('Cadastro com Sucesso!')
        atualizarClientes()  
    })
    }

