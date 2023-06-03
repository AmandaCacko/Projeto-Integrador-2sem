const formCadastroCliente = document.getElementById('formCadastroCliente')
formCadastroCliente.addEventListener('submit', (event) => {
  event.preventDefault()
  cadastrarCliente(event)
})

function gerarUsuarioESenha(nome) {
  const usuario = nome.substr(0, 3).toLowerCase() + Math.floor(Math.random() * (999 - 100) + 100)
  const senha = "12345"
  return { usuario, senha }
}

function cadastrarCliente(form) {
  const clienteNovo = {
    nome: form.target.nome.value,
    email: form.target.email.value,
    cpf: form.target.cpf.value,
    dataNasc: form.target.dataNasc.value,
    telefone: form.target.telefone.value,
    telefoneResp: form.target.telefoneResp.value,
    cidade: form.target.cidade.value,
    estado: form.target.estado.value,
    comoConheceu: form.target.comoConheceu.value
  }

  const { usuario, senha } = gerarUsuarioESenha(clienteNovo.nome)
  clienteNovo.usuario = usuario
  clienteNovo.senha = senha

  fetch('http://localhost:3000/Clientes', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(clienteNovo)
  })
    .then(resposta => {
      if (resposta.status != 201) {
        alert('Erro ao Cadastrar!')
        return
      }
      alert('Cadastro com Sucesso!')
      atualizarClientes()
    })
}

