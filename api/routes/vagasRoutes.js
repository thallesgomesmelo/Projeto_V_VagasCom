module.exports = function(app) {
    const SECRET = 'tarley'
    const vagasController = require('../controllers/vagasController')
    

function verifyJWT(req,res, next) {
    const token=req.headers['x-access-token']
    jwt.verify(token, SECRET, (err, decoded)=>{
        if (err) return res.status(401).end()

        req.userId= decoded.userId
        next()
    })
}
 //comentario
    app.route('/vagas',verifyJWT)
        .get(vagasController.lista_de_todas_as_vagas)
        .post(vagasController.adiciona_uma_vaga)

    app.route('/vagas/:vagasId')
        .get(vagasController.lista_de_uma_vaga)
        .put(vagasController.atualiza_uma_vaga)
        .delete(vagasController.remove_uma_vaga)
}