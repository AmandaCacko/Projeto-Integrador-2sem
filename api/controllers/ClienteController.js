import { getAll } from "../models/Cliente.js"

class ClienteController {
    static list(req,res){
        res.json(getAll())
        
    }
}

export default ClienteController
