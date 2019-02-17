const Client = require('../models/client.model.js');
const Sales = require('../models/sales.model.js');
const fs = require('fs');

exports.totalTTC = function(req,res) {
    var totalTTC = 0;
    Sales.find((err,allsales) =>{
        console.log("test");
        if(err){
            console.log(err);
        }
        var compteur =  allsales.length;
        console.log(allsales[1].TTC );
        for (var i = 0; i < compteur; i++) {
                totalTTC = totalTTC + allsales[i].TTC;
        }
        console.log(totalTTC);
        res.send("Total TTC :" + totalTTC);
    });
}
