const buscaCadastroCliente = document.getElementById('buscaCadastroCliente')
buscaCadastroCliente.addEventListener('submit', (event) => {
  const login = event.target.elements.login.value
  event.preventDefault()
  buscarCliente(login)
})

function buscarCliente(id) {
  fetch(`http://localhost:3000/Clientes/${id}`, {
    method: 'GET',
    headers: { 'Content-type': 'application/json' }
  })
    .then((resposta) => {
      if (resposta.status !== 200) {
        alert('Erro ao buscar cliente!')
        return
      }
      return resposta.json()
    })
    .then((cliente) => {
      if (cliente) {
        preencherFormulario(cliente)
      } else {
        alert('Cliente não encontrado!')
      }
    })
    .catch((erro) => {
      console.error('Erro:', erro)
      alert('Ocorreu um erro na busca do cliente!')
    })
}

function preencherFormulario(cliente) {
  const nomeElement = document.getElementById('nome')
  const emailElement = document.getElementById('email')
  const cpfElement = document.getElementById('cpf')
  const dataNascElement = document.getElementById('dataNasc')
  const telefoneElement = document.getElementById('telefone')
  const telefoneRespElement = document.getElementById('telefoneResp')
  const cidadeElement = document.getElementById('cidade')
  const estadoElement = document.getElementById('estado')
  const conheceuElement = document.getElementById('conheceu')

  nomeElement.value = cliente.nome
  emailElement.value = cliente.email
  cpfElement.value = cliente.cpf
  dataNascElement.value = cliente.dataNasc
  telefoneElement.value = cliente.telefone
  telefoneRespElement.value = cliente.telefoneResp
  cidadeElement.value = cliente.cidade
  estadoElement.value = cliente.estado
  conheceuElement.value = cliente.comoConheceu
}
