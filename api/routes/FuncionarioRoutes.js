import express from 'express'
import FuncionarioController from '../controllers/FuncionarioController.js'

const FuncionarioRouter = express.Router()

FuncionarioRouter.get('/', FuncionarioController.list)
FuncionarioRouter.post('/', FuncionarioController.createFuncionario)
FuncionarioRouter.get('/:id',FuncionarioController.getFuncionarioById)
FuncionarioRouter.delete('/:id', FuncionarioController.destroyfuncionario)
FuncionarioRouter.put('/:id', FuncionarioController.updateFuncionario)

export default FuncionarioRouter