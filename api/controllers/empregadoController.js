const mongoose = require('mongoose')
const empregado = mongoose.model('empregado')

// GET ALL
exports.lista_todos_os_empregados = function(req, res) {
    empregado.find({}, function(err, empregado){
        if(err){
            res.send(err)
        }
        res.json(empregado)
    })
}

// GET ID
exports.lista_um_empregado = function(req, res) {
    empregado.findOne({"_id": req.params.empregadoId}, function(err, empregado){
        if(err){
            res.send(err)
        }
        res.json(empregado)
    })
}

//POST
exports.adiciona_um_empregado = function(req, res){
    const novo_empregado = new empregado(req.body)
    novo_empregado.save(function(err, empregado){
        if(err){
            res.send(err)
        }
        res.json(empregado)
    })
}

//PUT   
exports.atualiza_um_empregado = function(req, res) {
    empregado.findOneAndupdate({_id: req.params.empregadoId}, req.body, {new: true}, 
        function(err, empregado){
            if(err){
                res.send(err)
            }
            res.json(empregado)
    })
}

//DELETE
exports.remove_um_empregado = function(req, res){
    empregado.remove({_id: req.params.empregadoId}, function(err, empregado){
        if(err){
            req.send(err)
        }
        res.json({"Mensagem": "Empregado removido com sucesso"})
    })
}
