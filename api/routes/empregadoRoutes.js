module.exports = function(app) {
    const empregadoController = require('../controllers/empregadoController')
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

    app.route('/empregado')
        .get(verifyJWT,empregadoController.lista_todos_os_empregados)
        .post(empregadoController.adiciona_um_empregado)

    app.route('/empregado/:empregadoId')
        .get(empregadoController.lista_um_empregado)
        .put(empregadoController.atualiza_um_empregado)
        .delete(empregadoController.remove_um_empregado)
}