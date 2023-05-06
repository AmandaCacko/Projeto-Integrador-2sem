import express from 'express'
import FuncionarioController from '../controllers/FuncionarioController.js'

const FuncionarioRouter = express.Router()

FuncionarioRouter.get('/', FuncionarioController.list)

export default FuncionarioRouter