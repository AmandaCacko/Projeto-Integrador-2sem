export class Cliente{
    constructor(id,nome,email,cpf,dataNasc,telefone,telefoneResp,cidade,estado,usuario,senha,comoConheceu){
        this.id = id
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.dataNasc = dataNasc
        this.telefone = telefone
        this.telefoneResp = telefoneResp
        this.cidade = cidade
        this.estado = estado
        this.usuario = usuario
        this.senha = senha
        this.comoConheceu = comoConheceu
      
    }
}

let idAtual = 2

export const create = (cliente) => {
    idAtual++
    cliente.id = idAtual
    dbClientes.push(cliente)
    return cliente
}

/*export const create = (Cliente) => {
    Cliente.id = dbClientes.length + 1
    dbClientes.push(Cliente)
    return Cliente
}*/

export const findByPk = (id) =>{
    return dbClientes.find(cliente => cliente.id === id)
}

export const findAll =() => {
    return dbClientes
}

export const destroy = (id) =>{
    const cliente = findByPk(id)
    if(!cliente){
        return false
    }
    const index = dbClientes.indexOf(cliente)
    dbClientes.splice(index,1)
    return true 
}
export const update = (id,clienteUpdate) =>{
    const cliente = findByPk(id)
    if(!cliente){
        return false
    }
    const index = dbClientes.indexOf(cliente)
    dbClientes[index] = clienteUpdate
    return true
}

export const dbClientes = [
    new Cliente(1,"Mario Santos","mario@email,com","21231341455","06-05-1994","1912345678","1999886567","Cafelandia","SP", "Mari34567", "senhapadrao", "Panfleto" ),
    new Cliente(2,"Ana Souza","lu@email,com","21231341011","07-12-1999","1965445678","1996548567","Boituva","SP", "anas98765", "senhapadrao", "Shopping")
   
]