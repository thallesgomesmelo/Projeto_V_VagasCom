const express = require('express')
const { Mongoose } = require('mongoose')

app = express();
port = process.env.PORT || 3000
mongoose = require('mongoose')
empregado = require('./api/models/empregadoModel')
vagas = require('./api/models/vagasModel')
entrevista = require('./api/models/entrevistaModel')
bodyParser = require('body-parser')

mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://admin:ZmaEuGx99xHZRAWe@cluster0.rfhz0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const routesEmpregador = require('./api/routes/empregadoRoutes')
routesEmpregador(app)

const routesVagas = require('./api/routes/vagasRoutes')
routesVagas(app)

const routesEntrevista = require('./api/routes/entrevistaRoutes')
routesEntrevista(app)

app.listen(port)


