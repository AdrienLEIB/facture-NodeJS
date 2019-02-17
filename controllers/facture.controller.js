const Client = require('../models/client.model.js');
const Sales = require('../models/sales.model.js');
const fs = require('fs');

exports.createFacture= function(req, res) {
    if(fs.existsSync('invoices/')){
    }
    else{
        fs.mkdir('invoices', (err) =>{
        })
    };


    console.log(req.body);
    var HT = req.body.coutHoraire * req.body.heureFacture;
    var toutestaxescomprises = calculateTTC(req, HT);
    var valueTVA = toutestaxescomprises -HT;
    var date = new Date();
   //console.log(HT +' et ' + TTC );

    Sales.find((err,sales) =>{
        if(err){
            console.log(err);
        }
        var compteur =  sales.length;
        var path_client = "invoices/" + req.body.name + "/";
        if(fs.existsSync(path_client)){
        }
        else{
            fs.mkdir(path_client, (err) =>{
            })
        };    
        if(sales.length >0){
            Client.findOne({name:req.body.name},(err,client)=>{
                if (err) {
                    return next(err);
                }

                if(sales.length == 0 ){

                }           
                console.log(client);

                var file = path_client + "/F" + (sales[compteur-1].ref+1) + ".txt";
                var writelog = "Numéro de facture :" + (sales[compteur-1].ref+1) +"\r\n";
                writelog = writelog + "Information signalétique du client :" + client +"\r\n";
                writelog = writelog + "Date de création :" + date +"\r\n";
                writelog = writelog + "La prestation fournie :" + req.body.prestation + "\r\n";
                writelog = writelog + "Nombre d'heures facturés :" +  req.body.heureFacture + "\r\n";
                writelog = writelog + "Cout Horraire : " + req.body.coutHoraire + "\r\n";
                writelog = writelog + "TVA :" + req.body.TVA + "%" +"\r\n";
                writelog = writelog + "Cout total : " + HT + "\r\n";
                writelog = writelog + "Valeur de la tva :"  + valueTVA + "\r\n";
                writelog = writelog +  "Total TTC :" + toutestaxescomprises + "\r\n";
                fs.appendFile(file, writelog, (error) =>{

                        console.log('log edited');
                });
            });
            let facture = new Sales(
                {
                    ref:sales[compteur-1].ref+1,
                    TTC:toutestaxescomprises
                }
            );
            facture.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.send('Facture and saves Created successfully');
                var log = "log/";
                if(fs.existsSync(log)){
                }
                else{
                    fs.mkdir(log, (err) =>{
                    })
                };
                const writelog = "Nom du client : " + req.body.name + " , date : " + date + "\r\n";
                fs.appendFile("log/log.txt", writelog, (error) =>{

                        console.log('log edited');
                });                        
            });
        }
        else{
            Client.findOne({name:req.body.name},(err,client)=>{
                if (err) {
                    return next(err);
                }

                if(sales.length == 0 ){

                }           
                console.log(client);

                var file = path_client + "/F" + 1 + ".txt";
                var writelog = "Numéro de facture :" + 1 +"\r\n";
                writelog = writelog + "Information signalétique du client :" + client +"\r\n";
                writelog = writelog + "Date de création :" + date +"\r\n";
                writelog = writelog + "La prestation fournie :" + req.body.prestation + "\r\n";
                writelog = writelog + "Nombre d'heures facturés :" +  req.body.heureFacture + "\r\n";
                writelog = writelog + "Cout Horraire : " + req.body.coutHoraire + "\r\n";
                writelog = writelog + "TVA :" + req.body.TVA + "%" +"\r\n";
                writelog = writelog + "Cout total : " + HT + "\r\n";
                writelog = writelog + "Valeur de la tva :"  + valueTVA + "\r\n";
                writelog = writelog +  "Total TTC :" + toutestaxescomprises + "\r\n";
                fs.appendFile(file, writelog, (error) =>{

                        console.log('log edited');
                });
            });
            let facture = new Sales(
                {
                    ref:1,
                    TTC:toutestaxescomprises
                }
            );
            facture.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.send('Facture and saves Created successfully');
                var log = "log/";
                if(fs.existsSync(log)){
                }
                else{
                    fs.mkdir(log, (err) =>{
                    })
                };
                const writelog = "Nom du client : " + req.body.name + " , date : " + date + "\r\n";
                fs.appendFile("log/log.txt", writelog, (error) =>{

                        console.log('log edited');
                });                        
            });    
        }
    //
    });

};

exports.getSales = (req,res) =>{

    Sales.find((err,sales) =>{
    if(err){
        console.log(err);
    }
    res.send(sales);
    })  
};

exports.deleteLog = (req,res) =>{
            var log = "log/";
            if(fs.existsSync(log)){
            }
            else{
                fs.mkdir(log, (err) =>{
                })
            };
            const writelog = "";
            fs.writeFile("log/log.txt", writelog, (error) =>{
            });
            res.send("log delete");      
};


function calculateTTC(req, HT){
    var TTC = 0;
    if(req.body.TVA == ""){
        TTC = HT;
    }
    else{
        TTC= HT + (HT * (req.body.TVA / 100));
    }
    return TTC;
}
