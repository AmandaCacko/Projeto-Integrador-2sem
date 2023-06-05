const telefones = document.querySelectorAll('.telefoneInput')
const cpf = document.querySelector('.cpfInput')

const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const handleCpf = (event) => {
  let input = event.target
  input.value = cpfMask(input.value)
}

telefones.forEach(input => {
  input.addEventListener('keyup', handlePhone)
  input.addEventListener('keydown', handlePhone)
})

cpf.addEventListener('keyup', handleCpf)
cpf.addEventListener('keydown', handleCpf)

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}

const cpfMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{3})(\d)/,"$1.$2")
  value = value.replace(/(\d{3})(\d)/,"$1.$2")
  value = value.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
  return value
}


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
    telefoneResp: form.target.telefoneResp.value !== '' ? form.target.telefoneResp.value : "Não tem",
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

