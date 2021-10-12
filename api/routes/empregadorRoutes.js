const verifyJWT = require("../middlewares/auth").verifyJwt

module.exports = function(app) {
    const empregadorController = require('../controllers/empregadorController')

    app.route('/empregador')
        .get(verifyJWT,empregadorController.lista_todos_os_empregadores)
        .post(verifyJWT,empregadorController.adiciona_um_empregador)

    app.route('/empregador/:empregadorId')
        .get(verifyJWT,empregadorController.lista_um_empregador)
        .put(verifyJWT,empregadorController.atualiza_um_empregador)
        .delete(verifyJWT,empregadorController.remove_um_empregador)
}