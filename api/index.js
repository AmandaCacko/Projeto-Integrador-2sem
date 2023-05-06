import express from 'express'
import FuncionarioRouter from './routes/FuncionarioRoutes.js'
import ClienteRouter from './routes/ClienteRoutes.js'

const app = express()
app.use(express.json())

app.use('/funcionarios', FuncionarioRouter)
app.use('/clientes',ClienteRouter)


app.listen(3000, ()=> {console.log('API Rodando na porta 3000')})