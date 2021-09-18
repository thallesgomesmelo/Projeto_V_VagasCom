const mongoose = require('mongoose')
const Schema = mongoose.Schema

var empregadorSchema = Schema({
    nome: {
        type: String
    },
    cnpj: {
        type: Number
    },
    dataRegistroCnpj: {
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

module.exports = mongoose.model('empregador', empregadorSchema)