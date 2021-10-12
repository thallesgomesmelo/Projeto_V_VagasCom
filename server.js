const http=require('http')
const express = require('express')
const { Mongoose, PromiseProvider } = require('mongoose')
const jwt = require ('jsonwebtoken')
const SECRET = 'tarleytools'

app = express();
port = process.env.PORT || 3000
mongoose = require('mongoose')
empregador = require('./api/models/empregadorModel')
empregado = require('./api/models/empregadoModel')
vagas = require('./api/models/vagasModel')
entrevista = require('./api/models/entrevistaModel')
bodyParser = require('body-parser')

mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://admin:ZmaEuGx99xHZRAWe@cluster0.rfhz0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



const routesVagas = require('./api/routes/vagasRoutes')
routesVagas(app)

const routesEmpregador = require('./api/routes/empregadorRoutes')
routesEmpregador(app) 

const routesEmpregado = require('./api/routes/empregadoRoutes')
routesEmpregado(app)

const routesEntrevista = require('./api/routes/entrevistaRoutes')
routesEntrevista(app)

const routesLogin = require('./api/routes/loginRoutes')
routesLogin(app)

app.listen(port,()=>console.log("Executando servidor na porta "+port))


