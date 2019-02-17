const Client = require('../models/client.model.js');
const Sales = require('../models/sales.model.js');
const fs = require('fs');

exports.createCommentaire= function(req, res) {
    if(fs.existsSync('notes/')){
    }
    else{
        fs.mkdir('notes', (err) =>{
        })
    };

    var dossierClient = 'notes/'  + req.body.name + '/';
    const writelog = req.body.note + req.body.note2 + '\r\n';
    if(fs.existsSync(dossierClient )){
        fs.appendFile(dossierClient + 'notes.txt', writelog, (error) =>{

                console.log('log edited');
                res.send('Commentaire crée');
        });         
    }
    else{
        fs.mkdir(dossierClient, (err) =>{
            fs.appendFile(dossierClient + 'notes.txt', writelog, (error) =>{

                    console.log('log edited');
                    res.send('Commentaire crée');
            });             
        })
    };
};

exports.deleteCommentaire= function(req, res) {
   //res.send("Bonjour "+ req.params.name+ ", Bienvenu sur votre API de gestion de catalogue produit.");   
    
    if(fs.existsSync('notes/')){
    }
    else{
        fs.mkdir('notes', (err) =>{
        })
    };

    var dossierClient = 'notes/'  + req.params.name + '/';
    const writelog = "";
    if(fs.existsSync(dossierClient )){
        fs.writeFile(dossierClient + 'notes.txt' , writelog, (error) =>{
            res.send("Le fichier note de  "+ req.params.name+ " a été correctment vidé");  
        });         
    }
    else{
        fs.mkdir(dossierClient, (err) =>{
            fs.writeFile(dossierClient + 'notes.txt' , writelog, (error) =>{
                res.send("Le fichier note de  "+ req.params.name+ " a été correctment vidé");  
            });           
        })
    }; 
    
};
exports.afficherCommentaire= function(req, res) {  
    if(fs.existsSync('notes/')){
    }
    else{
        fs.mkdir('notes', (err) =>{
        })
    };

    var dossierClient = 'notes/'  + req.params.name + '/';
    const writelog = "";
    if(fs.existsSync(dossierClient )){
        fs.readFile(dossierClient + 'notes.txt' , (err, data) =>{
            console.log(data.toString()); 
            res.send("Vous pouvez lire le contenu depuis le terminal :))");
        });                 
    }
    else{
        fs.mkdir(dossierClient, (err) =>{
            fs.readFile(dossierClient + 'notes.txt' , (err, data) =>{
                console.log(data.toString()); 
                res.send("Vous pouvez lire le contenu depuis le terminal :))");
            });          
        })
    }; 
};

exports.deleteSales = function(req,res){
    Sales.deleteMany(req.body, (err, produit) =>{
        if(err) {
            console.log(err);
        }
        else    
            {
            res.send("les produits contenant les parametre : " + req.body + " ont été supprimé");
        }
    })
}