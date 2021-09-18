module.exports = function(app) {
    const empregadorController = require('../controllers/empregadorController')

    app.route('/empregador')
        .get(empregadorController.lista_todos_os_empregadores)
        .post(empregadorController.adiciona_um_empregador)

    app.route('/empregador/:empregadorId')
        .get(empregadorController.lista_um_empregador)
        .put(empregadorController.atualiza_um_empregador)
        .delete(empregadorController.remove_um_empregador)
}