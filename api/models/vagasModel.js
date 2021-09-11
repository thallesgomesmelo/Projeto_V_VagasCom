const mongoose = require('mongoose')
const Schema = mongoose.Schema

var vagasSchema = Schema({
    cargo: {
        type: String
    },
    salario: {
        type: Number
    },
    horario: {
        type: String
    },
    local: {
        type: String
    },
    conhecimentos: {
        type: String
    },
    telefone: {
        type: String
    }
})

module.exports = mongoose.model('vagas', vagasSchema)