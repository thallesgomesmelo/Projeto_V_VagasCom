 const jwt = require('jsonwebtoken')    
    const SECRET = 'tarley'


    exports.verifyJwt = async (req, res, next) => {
        const token = req.headers['x-access-token'] // Testando com a const autHeader
        // const token = req.headers.authorization; - Testando com a const Authorization
        if(!token) {
            return res.status(401).json({ auth: false, message: 'Token não informado.' })
        }
        
        jwt.verify(token, SECRET, (err, decoded) => {
            if (err) {
                return res.status(500).json({ auth: false, message: err.message })
            }

            req.userId = decoded.id
            next()
        })
    }

    