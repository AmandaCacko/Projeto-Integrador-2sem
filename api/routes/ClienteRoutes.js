import express from 'express'
import ClienteController from '../controllers/ClienteController.js'

const ClienteRouter = express.Router()

ClienteRouter.get('/',ClienteController.list)
ClienteRouter.post('/', ClienteController.createCliente)
ClienteRouter.get('/:id',ClienteController.getClienteById)
ClienteRouter.delete('/:id', ClienteController.destroyCliente)
ClienteRouter.put('/:id', ClienteController.updateCliente)

export default ClienteRouter