module.exports = function(app) {
    const entrevistaController = require('../controllers/entrevistaController')
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

    app.route('/entrevista')
        .get(verifyJWT, entrevistaController.lista_de_todas_as_entrevistas)
        .post(entrevistaController.adiciona_uma_entrevista)

    app.route('/entrevista/:entrevistaId')
        .get(entrevistaController.lista_de_uma_entrevista)
        .put(entrevistaController.atualiza_uma_entrevista)
        .delete(entrevistaController.remove_uma_entrevista)
}