const mongoose = require('mongoose')
const SECRET = 'tarley'
const jwt = require ('jsonwebtoken')

exports.loginToken = function(req,res, next){
    if (req.body.nome === 'tarley' && req.body.senha === '123'){
      const id = 1
      const token = jwt.sign({ id }, SECRET, { expiresIn: 109999999999999999000 })

      return res.json({ auth: true, token: token});
    }
    res.status(500).json({ message: 'Login inválido!'})
}

exports.logoutToken = function(req, res) {
  res.json({ auth: false, token: null})
}
