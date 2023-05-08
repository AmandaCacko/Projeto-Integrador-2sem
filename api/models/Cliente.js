class Cliente{
    constructor(id,nome,email,CPF,DataNasc,telefone,telefoneResp,cidade,estado,usuario,senha,ComoConheceu){
        this.id = id
        this.nome = nome
        this.email = email
        this.cpf = CPF
        this.datanasc = DataNasc
        this.telefone = telefone
        this.telefoneResp = telefoneResp
        this.cidade = cidade
        this.estado = estado
        this.usuario = usuario
        this.senha = senha
        this.comoconheceu = ComoConheceu
      
    }
}

export const getAll =() => {
    return dbClientes
}

export const dbClientes = [
    new Cliente(1,"Mario","mario@email,com","21231341455","06-05-1994","1912345678","1999886567","Cafelandia","SP", "Mari34567", "senhapadrao", "Panfleto" ),
    new Cliente()
   
]