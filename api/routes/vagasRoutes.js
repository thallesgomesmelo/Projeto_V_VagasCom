module.exports = function(app) {
    const vagasController = require('../controllers/vagasController')
    const jwt = require('jsonwebtoken')
    const SECRET = 'tarley'
    
    verifyJWT = (req, res, next) => {
        const token = req.headers['x-access-token']
        if(!token) {
            return res.status(401).json({ auth: false, message: 'Token não informado.' })
        }
        
        jwt.verify(token, SECRET, (err, decoded) => {
            if (err) {
                return res.status(500).json({ auth: false, message: 'Erro: Token não autenticado.' })
            }

            req.userId = decoded.id
            next()
        })
    }    

    app.route('/vagas')
        .get(verifyJWT, vagasController.lista_de_todas_as_vagas)
        .post(vagasController.adiciona_uma_vaga)

    app.route('/vagas/:vagasId')
        .get(vagasController.lista_de_uma_vaga)
        .put(vagasController.atualiza_uma_vaga)
        .delete(vagasController.remove_uma_vaga)
}