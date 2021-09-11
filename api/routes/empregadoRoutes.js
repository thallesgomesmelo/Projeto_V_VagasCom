module.exports = function(app) {
    const empregadoController = require('../controllers/empregadoController')

    app.route('/empregado')
        .get(empregadoController.lista_todos_os_empregados)
        .post(empregadoController.adiciona_um_empregado)

    app.route('/empregado/:empregadoId')
        .get(empregadoController.lista_um_empregado)
        .put(empregadoController.atualiza_um_empregado)
        .delete(empregadoController.remove_um_empregado)
}