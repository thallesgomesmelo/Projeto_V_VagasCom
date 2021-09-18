const mongoose = require('mongoose')
const Schema = mongoose.Schema

var empregadoSchema = Schema({
    nome: {
        type: String
    },
    cpf: {
        type: Number
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
        type: Number
    },
    municipio: {
        type: String
    },
    telefone: {
        type: Number
    },
    celular: {
        type: Number
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