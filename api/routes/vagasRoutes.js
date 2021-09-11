module.exports = function(app) {
    const vagasController = require('../controllers/vagasController')

    app.route('/vagas')
        .get(vagasController.lista_de_todas_as_vagas)
        .post(vagasController.atualiza_uma_vaga)

    app.route('/vagas/:vagasId')
        .get(vagasController.lista_de_uma_vaga )
        .put(vagasController.atualiza_uma_vaga)
        .delete(vagasController.remove_uma_vaga)
}