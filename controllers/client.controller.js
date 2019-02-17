const Client = require('../models/client.model.js');
const Sales = require('../models/sales.model.js');
const fs = require('fs');


exports.createClient = function(req, res) {
    console.log(req.body);
    let client = new Client(
        {
            name: req.body.name,
            adresse: req.body.adresse,
            cp: req.body.cp,
            ville: req.body.ville,
            contactRef: req.body.contactRef,
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

exports.getClient = (req,res) =>{
    Client.find((err,client) =>{
        if(err){
            console.log(err);
        }
        res.send(client);
    })  
};


exports.getClientById = (req,res) =>{
    // recuperer un user en fonction de son id 
    Client.findById(req.params.id, (err,client) =>{
        if(err){
            console.log(err);
        }
        //res.send(produit);
        res.send(client);
    })      
};

exports.deleteClient = (req,res) =>{
    // recuperer un user en fonction de son id 
    Client.findByIdAndRemove(req.params.id, (err, client) =>{
        if(err) {
            console.log(err);
        }
        // Si le delete marche on redirige la page vers l'accueil
        else    
            {
            res.redirect('/clients');
        }
    })  
};

exports.updateClient= (req,res) =>{
    // recuperer un user en fonction de son id 
    Client.findByIdAndUpdate(req.params.id,req.body,(err, client)=>{
        if(err) {
            console.log(err);
        }
        else    
        {
            console.log('updated');
        }
        res.send("Update succes");
    })
};


exports.deleteClientMany = (req,res) =>{

    Client.deleteMany(req.body, (err, client) =>{
        if(err) {
            console.log(err);
        }
        else    
            {
            res.send("Les clients avec les paramètres : " + req.body + " ont été supprimé");
        }
    })
};
exports.updateClientMany = (req,res) =>{
    var filter = req.query;
    console.log(filter)
    Client.updateMany(req.query,req.body, (err, client) =>{
        if(err) {
            console.log(err);
        }
        else    
            {
            res.send("les clients avec les valeurs : " +req.query +" ont été modifié par ces valeurs : " + req.body);
        }
    })
};