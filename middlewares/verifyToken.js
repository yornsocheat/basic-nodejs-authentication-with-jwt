const jwt = require('jsonwebtoken')

const errorMessage = {
    message: 'Access denied'
}

const verifyToken = (req, res, next) => {
    const authorization = req.headers.authorization

    if (!authorization) {
        return res.status(401).json(errorMessage)
    }

    let token = authorization.split(' ')
    token = token[1]

    if (!token) {
        return res.status(401).json(errorMessage)
    }

    try {
        jwt.verify(token, process.env.TOKEN_SECTRET, (err, decoded) => {
            if (err && err.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'Token is expired'})
            }

            req.user = decoded.user
        })

        next()
    } catch (error) {
        res.status(400).json({ message: 'Invalid token'})
    }
}

module.exports = verifyToken
