const mongoose = require('mongoose')
const Schema = mongoose.Schema

var empregadoSchema = Schema({
    nome: {
        type: String
    },
    cpf: {
        type: String
    },
    dataNascimento: {
        type: String
    },
    endereco: {
        type: String
    },
    bairro: {
        type: String
    },
    cep: {
        type: String
    },
    municipio: {
        type: String
    },
    telefone: {
        type: String
    },
    celular: {
        type: String
    },
    uf: {
        type: String
    },
    inscricaoEstadual: {
        type: String
    },
    email: {
        type: String
    },
    senha: {
        type: String
    }
})

module.exports = mongoose.model('empregado', empregadoSchema)