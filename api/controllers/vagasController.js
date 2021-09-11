const mongoose = require('mongoose')
const vagas = mongoose.model('vagas')

// GET ALL
exports.lista_de_todas_as_vagas = function(req, res) {
    vagas.find({}, function(err, vagas){
        if(err){
            res.send(err)
        }
        res.json(vagas)
    })
}

// GET ID
exports.lista_de_uma_vaga = function(req, res) {
    vagas.findOne({"_id": req.params.vagaId}, function(err, vagas){
        if(err){
            res.send(err)
        }
        res.json(vagas)
    })
}

//POST
exports.adiciona_uma_vaga = function(req, res){
    const nova_vaga = new vagas(req.body)
    nova_vaga.save(function(err, vagas){
        if(err){
            res.send(err)
        }
        res.json(vagas)
    })
}

//PUT   
exports.atualiza_uma_vaga = function(req, res) {
    vagas.findOneAndUpdate({_id: req.params.vagaId}, req.body, {new: true}, 
        function(err, vagas){
            if(err){
                res.send(err)
            }
            res.json(vagas)
    })
}

//DELETE
exports.remove_uma_vaga = function(req, res){
    vagas.remove({_id: req.params.vagaId}, function(err, vagas){
        if(err){
            req.send(err)
        }
        res.json({"Mensagem": "Vaga removida com sucesso"})
    })
}
