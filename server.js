const express = require('express')
const { Mongoose } = require('mongoose')

app = express();
port = process.env.PORT || 3000;
mongoose = require('mongoose')
empregado = require('./api/models/empregadoModel');
vagas= require('./api/models/vagasModel');
bodyParser = require('body-parser')

mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://admin:ZmaEuGx99xHZRAWe@cluster0.rfhz0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority') // Tem que editar aqui ************


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


//const routes = require('./api/routes/empregadoRoutes')
//routes(app)

const routesvagas = require ('./api/routes/vagasRoutes')
routesvagas(app)

app.listen(port)


