const jwt = require('jsonwebtoken');
const express = require('express');

const app = express();

function verifyToken(req, res, next) {

    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if(typeof token !== 'undefined') {

        const bearer = token.split(' ');

        const bearerToken = bearer[1];

        req.token = bearerToken;
        next();
    } else {
        
        res.status(403).json({ message: 'you do not have adequate rights to access this page' });
    }
}

module.exports = verifyToken;