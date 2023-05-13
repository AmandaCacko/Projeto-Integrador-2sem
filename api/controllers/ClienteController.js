import { Cliente, create, destroy, findAll, findByPk, update } from "../models/Cliente.js"

class ClienteController {
    static list(req,res){
        res.json(findAll())
        
    }

    static getClienteById(req,res){
        const id = parseInt(req.params.id)
        const cliente = findByPk(id)
        if(!cliente){
            res.status(404).json({error:"Não encontrado"})
            return
        }

        res.json(cliente)
    }

    static destroyCliente(req,res){
        const id = parseInt(req.params.id)
        const cliente = findByPk(id)
        if(!cliente){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        destroy(id)
        res.json({message: "Removido com sucesso!"})
    }
static createCliente(req,res){
    const {nome,email,cpf,dataNasc,telefone,telefoneResp,cidade,estado,usuario,senha,comoConheceu} = req.body
        if(!nome || !email || !cpf || !dataNasc || !telefone || !telefoneResp || !cidade || !estado || !usuario || !senha|| !comoConheceu){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const cliente = new Cliente(0,nome,email,cpf,dataNasc,telefone,telefoneResp,cidade,estado,usuario,senha,comoConheceu)
        const createdCliente = create(cliente)
        res.status(201).json(createdCliente)
    }

    static updateCliente(req,res){
        const id = parseInt(req.params.id)
        const cliente = findByPk(id)
        if(!cliente){
            res.status(404).json({error:"Não encontrado"})
            return
        }

        const {nome,email,cpf,dataNasc,telefone,telefoneResp,cidade,estado,usuario,senha,comoConheceu} = req.body
        if(!nome || !email || !cpf || !dataNasc || !telefone || !telefoneResp || !cidade || !estado || !usuario || !senha|| !comoConheceu){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }        

        cliente.nome = nome
        cliente.email = email
        cliente.cpf = cpf
        cliente.dataNasc = dataNasc
        cliente.telefone = telefone
        cliente.telefoneResp = telefoneResp
        cliente.cidade = cidade
        cliente.estado = estado
        cliente.usuario = usuario
        cliente.senha = senha
        cliente.comoConheceu = comoConheceu

        update(id,cliente)
        res.json(cliente)
    }

}

export default ClienteController
