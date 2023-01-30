const express = require('express');
const jwt = require('jsonwebtoken');

const authRouter = express.Router();

authRouter.post('/login', (req, res) => {
    // Mock user
    const user  = {
        id: 1,
        name: "Socheat Yorn",
        email: "socheat.yorn@gmail.com"
    }

    // jwt sign and res token
    jwt.sign({ user }, process.env.TOKEN_SECTRET, { expiresIn: process.env.TOKEN_EXPIRES_IN }, (err, token) => {
        if (err) {
            return res.json({
                message: 'Cannot create token'
            })
        }

        res.json({
            token
        })
    })
})

module.exports = authRouter;