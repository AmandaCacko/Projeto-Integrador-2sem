import { getAll } from "../models/Funcionario.js"

class FuncionarioController {
    static list (req,res){
        res.json(getAll())
    }
}

export default FuncionarioController