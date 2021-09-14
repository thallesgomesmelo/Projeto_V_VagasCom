const mongoose = require('mongoose')
const entrevista = mongoose.model('entrevista')

// GET ALL
exports.lista_de_todas_as_entrevistas = function(req, res) {
    entrevista.find({}, function(err, entrevista){
        if(err){
            res.send(err)
        }
        res.json(entrevista)
    })
}

// GET ID
exports.lista_de_uma_entrevista = function(req, res) {
    entrevista.findOne({"_id": req.params.entrevistaId}, function(err, entrevista){
        if(err){
            res.send(err)
        }
        res.json(entrevista)
    })
}

//POST
exports.adiciona_uma_entrevista = function(req, res){
    const nova_entrevista = new entrevista(req.body)
    nova_entrevista.save(function(err, entrevista){
        if(err){
            res.send(err)
        }
        res.json(entrevista)
    })
}

//PUT   
exports.atualiza_uma_entrevista = function(req, res) {
    entrevista.findOneAndUpdate({_id: req.params.entrevistaId}, req.body, {new: true}, 
        function(err, entrevista){
            if(err){
                res.send(err)
            }
            res.json(entrevista)
    })
}

//DELETE
exports.remove_uma_entrevista = function(req, res){
    entrevista.remove({_id: req.params.entrevistaId}, function(err, entrevista){
        if(err){
            req.send(err)
        }
        res.json({"Mensagem": "Entrevista removida com sucesso"})
    })
}
