const Client = require('../models/client.model.js');
const fs = require('fs');
exports.createClient = function(req, res) {
    console.log(req.body);
    let client = new Client(
        {
            name: req.body.name,
            adresse: req.body.adresse,
            cp: req.body.cp,
            ville: req.body.ville,
            contratRef: req.body.contratRef,
            telephone: req.body.telephone,
            mail: req.body.mail
            
        }
    );

    client.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Client Created successfully')
    })
};