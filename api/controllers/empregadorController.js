const mongoose = require('mongoose')
const empregador = mongoose.model('empregador')

// GET ALL
exports.lista_todos_os_empregadores = function(req, res) {
    empregador.find({}, function(err, empregador){
        if(err){
            res.send(err)
        }
        res.json(empregador)
    })
}

// GET ID
exports.lista_um_empregador = function(req, res) {
    empregador.findOne({"_id": req.params.empregadorId}, function(err, empregador){
        if(err){
            res.send(err)
        }
        res.json(empregador)
    })
}

//POST
exports.adiciona_um_empregador = function(req, res){

    const novo_empregador = new empregador(req.body)
    novo_empregador.save(function(err, empregador){
        if(err){
            res.send(err)
        }
        res.json(empregador)
    })
}

//PUT   
exports.atualiza_um_empregador = function(req, res) {
    empregador.findOneAndUpdate({_id: req.params.empregadorId}, req.body, {new: true}, 
        function(err, empregador){
            if(err){
                res.send(err)
            }
            res.json(empregador)
    });
}

//DELETE
exports.remove_um_empregador = function(req, res){
    empregador.remove({_id: req.params.empregadorId}, function(err, empregador){
        if(err){
            req.send(err)
        }
        res.json({"Mensagem": "Empregador removido com sucesso"})
    })
}
