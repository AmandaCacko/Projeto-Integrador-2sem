import { Sequelize } from "sequelize"
import db from "../db.js"

const Funcionario = db.define('funcionario',{

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataNasc: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    usuarioAdmin: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pis: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


export default Funcionario

// export class Funcionario{
//     constructor(id, nome, email, cpf, dataNasc, telefone, usuarioAdmin, senha, pis){
//         this.id = id

//         this.nome = nome
//         this.email = email
//         this.cpf = cpf
//         this.dataNasc = dataNasc
//         this.telefone = telefone
//         this.usuarioAdmin = usuarioAdmin
//         this.senha = senha
//         this.pis = pis
//     }
// }

// let idAtual = 4

// export const create = (funcionario) => {
//     idAtual++
//     funcioanario.id = idAtual
//     dbFuncionarios.push(funcionario)
//     return funcionario
// }
// export const findByPk = (id) =>{
//     return dbFuncionarios.find(funcioanario => funcioanario.id === id)
// }

// export const findAll =() => {
//     return dbFuncionarios
// }

// export const destroy = (id) =>{
//     const funcioanario = findByPk(id)
//     if(!funcioanario){
//         return false
//     }
//     const index = dbFuncionarios.indexOf(funcionario)
//     dbFuncionarios.splice(index,1)
//     return true 
// }
// export const update = (id,funcionarioUpdate) =>{
//     const funcioanario = findByPk(id)
//     if(!funcioanario){
//         return false
//     }
//     const index = dbFuncionarios.indexOf(funcioanario)
//     dbFuncionarios[index] = funcionarioUpdate
//     return true
// }

// export const dbFuncionarios = [
//     new Funcionario(1, "Pedro", "pedro@example.com", "123456789", "1990-01-01", "1234567890", "adminpedro", "password123", "1234567890"),
//     new Funcionario(2, "Vitor", "vitor@example.com", "987654321", "1992-05-10", "9876543210", "adminvitor", "securepass", "0987654321"),
//     new Funcionario(3, "Sabrina", "sabrina@example.com", "456789123", "1988-12-15", "4567891230", "adminsabrina", "sabrina123", "4567891230"),
//     new Funcionario(4, "Amanda", "amanda@example.com", "789123456", "1995-07-20", "7891234560", "adminamanda", "password123", "7891234560"),
// ]