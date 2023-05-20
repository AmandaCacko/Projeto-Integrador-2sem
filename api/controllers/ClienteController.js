import Cliente from "../models/Cliente.js"

class ClienteController {
    static async list(req,res){
        const clientes = await Cliente.findAll()
        res.json(clientes)    
    }

    static async getClienteById(req,res){
        const id = parseInt(req.params.id)
        const cliente = await Cliente.findByPk(id)
        if(!cliente){
            res.status(404).json({error:"Não encontrado"})
            return
        }

        res.json(cliente)
    }

    static async destroyCliente(req,res){
        const id = parseInt(req.params.id)
        const cliente = await Cliente.findByPk(id)
        if(!cliente){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        Cliente.destroy({where: {id: cliente.id}})
        res.json({message: "Removido com sucesso!"})
    }
    static async createCliente(req,res){
    const {nome,email,cpf,dataNasc,telefone,telefoneResp,cidade,estado,usuario,senha,comoConheceu} = req.body
        if(!nome || !email || !cpf || !dataNasc || !telefone || !telefoneResp || !cidade || !estado || !usuario || !senha|| !comoConheceu){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const createdCliente =  await Cliente.create({nome,email,cpf,dataNasc,telefone,telefoneResp,cidade,estado,usuario,senha,comoConheceu})
        res.status(201).json(createdCliente)
    }

    static async updateCliente(req,res){
        const id = parseInt(req.params.id)
        const cliente = await Cliente.findByPk(id)
        if(!cliente){
            res.status(404).json({error:"Não encontrado"})
            return
        }

        const {nome,email,cpf,dataNasc,telefone,telefoneResp,cidade,estado,usuario,senha,comoConheceu} = req.body
        if(!nome || !email || !cpf || !dataNasc || !telefone || !telefoneResp || !cidade || !estado || !usuario || !senha|| !comoConheceu){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }
        
        const updatedCliente = await Cliente.update({nome,email,cpf,dataNasc,telefone,telefoneResp,cidade,estado,usuario,senha,comoConheceu},{where: {id: cliente.id}})
        res.json(updatedCliente)
    }

}

export default ClienteController
