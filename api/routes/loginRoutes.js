module.exports = function(app) {
const loginController = require('../controllers/loginController')
 
    app.route('/login')       
                .post(loginController.loginToken)
}
