module.exports = function(app) {
    const empregadorController = require('../controllers/empregadorController')

    app.route('/empregador')
        .get(empregadoController.lista_todos_os_empregados)
        .post(empregadoController.adiciona_um_empregado)

    app.route('/empregador/:empregadorId')
        .get(empregadoController.lista_um_empregado)
        .put(empregadoController.atualiza_um_empregado)
        .delete(empregadoController.remove_um_empregado)
}