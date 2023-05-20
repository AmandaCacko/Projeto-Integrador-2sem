import  Funcionario  from "../models/Funcionario.js"

class FuncionarioController {
    static async list (req,res){
        const funcionario = await Funcionario.findAll()
        res.json(funcionario)
    }

    static async getFuncionarioById(req,res){
        const id = parseInt(req.params.id)
        const funcionario = await Funcionario.findByPk(id)
        if(!funcionario){
            res.status(404).json({error:"Não encontrado"})
            return
        }

        res.json(Funcionario)
    }

    static async destroyfuncionario(req,res){
        const id = parseInt(req.params.id)
        const funcionario = await Funcionario.findByPk(id)
        if(!funcionario){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        Funcionario.destroy({where: {id: funcionario.id}})
        res.json({message: "Removido com sucesso!"})
    }
    static async createFuncionario(req,res){
    const {id, nome, email, cpf, dataNasc, telefone, usuarioAdmin, senha, pis} = req.body
        if(!nome || !email || !cpf || !dataNasc || !telefone || !usuarioAdmin || !senha || !pis){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }

        const createdFuncionario = await Funcionario.create({nome, email, cpf, dataNasc, telefone, usuarioAdmin, senha, pis}) //req.boddy//
        res.status(201).json(createdFuncionario)
    }

    static async updateFuncionario(req,res){
        const id = parseInt(req.params.id)
        const funcioanario = await Funcionario.findByPk(id)
        if(!funcioanario){
            res.status(404).json({error:"Não encontrado"})
            return
        }

        const {nome, email, cpf, dataNasc, telefone, usuarioAdmin, senha, pis} = req.body 
        if(!nome || !email || !cpf || !dataNasc || !telefone || !usuarioAdmin || !senha || !pis){
            res.status(400).json({error: "Informe todos os campos!"})
            return
        }        

       const updatedFuncionario = await Funcionario.update({nome, email, cpf, dataNasc, telefone, usuarioAdmin, senha, pis},{where: {id: funcioanario.id}})
        res.json(updatedFuncionario)
    }

}

export default FuncionarioController
