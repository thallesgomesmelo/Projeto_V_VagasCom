module.exports = function(app) {
    const entrevistaController = require('../controllers/entrevistaController')

    app.route('/entrevista')
        .get(entrevistaController.lista_de_todas_as_entrevistas)
        .post(entrevistaController.adiciona_uma_entrevista)

    app.route('/entrevista/:entrevistaId')
        .get(entrevistaController.lista_de_uma_entrevista)
        .put(entrevistaController.atualiza_uma_entrevista)
        .delete(entrevistaController.remove_uma_entrevista)
}