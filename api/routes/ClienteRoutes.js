import express from 'express'
import ClienteController from '../controllers/ClienteController.js'

const ClienteRouter = express.Router()

ClienteRouter.get('/',ClienteController.list)

export default ClienteRouter