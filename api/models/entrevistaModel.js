const mongoose = require('mongoose')
const Schema = mongoose.Schema

var entrevistaSchema = Schema({
    nome_do_candidato: {
        type: String
    },
    email_do_candidato: {
        type: String
    },
    data_da_entrevista: {
        type: Date
    },
    horario: {
        type: String
    },
    link_de_acesso: {
        type: String
    }
   
})

module.exports = mongoose.model('entrevista', entrevistaSchema)