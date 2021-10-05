const { application } = require('express');
const mongoose = require('mongoose')
const SECRET = 'tarley'
const jwt =require ('jsonwebtoken')

exports.loginToken = function(req,res){
    if (req.body.user === 'tarley' && req.body.password==='123'){
      const token= jwt.sign({userId:1}, SECRET, {expiresIn:300})
        return res.json({auth:true, token});
    }
    res.status(401).end()
}
  
