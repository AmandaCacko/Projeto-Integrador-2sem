export class Funcionario{
    constructor(id, nome, email, cpf, dataNasc, telefone, usuarioAdmin, senha, pis){
        this.id = id
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.dataNasc = dataNasc
        this.telefone = telefone
        this.usuarioAdmin = usuarioAdmin
        this.senha = senha
        this.pis = pis
    }
}

export const getAll = () => {
    return dbFuncionarios
}

export const dbFuncionarios = [
    new Funcionario(1, "Pedro", "pedro@email.com", "12345678911", "123456789", "31-12-1998", "12345678", "rua endereco, nº 23", "Indaiatuba", "SP", "123456", "adminpedro", "senha123", "123456789"),
    new Funcionario(2, "Vitor", "vitor@email.com", "98765432100", "987654321", "04-02-2003", "12345678", "rua avenida, nº 45", "Indaiatuba", "SP", "654321", "adminvitor", "senha123", "123456789"),
    new Funcionario(3, "Sabrina", "sabrina@email.com", "45678912310", "456789123", "23-02-2000", "12345678", "rua praça, nº 4", "Indaiatuba", "SP", "456781", "adminsabrina", "senha123", "123456789"),
    new Funcionario(4, "Amanda", "amanda@email.com", "45675846930", "359829123", "14-05-2001", "12345678", "rua praça, nº 4", "Indaiatuba", "SP", "456781", "adminamanda", "senha123", "123456789")
] 