import * as functions from 'firebase-functions';
import * as express from 'express';
//for javascript
//var functions = require('firebase-functions');
//var express = require('express');

const app = express();

// listen the path suffix /:login
app.get('/:login', (req, res) => {
    switch(req.params.login.toLowerCase()){ // test the :login value
        case "earlmegget21":
            res.send({
                id: 1234, 
                name: "Rudy Sonetti", 
                login: "EarlMegget21"
            })
            break;
        case "florent37":
            res.send({
                id: 2000, 
                name: "Florent Champigny", 
                login: "florent37"
            })
            break;
        default: // send an error otherwise
            res.status(404).send({message: "User not found"})
    }
});

// listen the path prefix /users
exports.users = functions.https.onRequest(app);