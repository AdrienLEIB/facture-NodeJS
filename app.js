// Mongoose base de donné de NodeJ

//'mongodb://mamsleib:mams123@ds131765.mlab.com:31765/devoir'
const express = require('express');

const app = express();
var cor = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const clientController = require('./controllers/client.controller.js');
const factureController = require('./controllers/facture.controller.js');
const totalTTCController = require('./controllers/totalTTC.controller.js');
const commentaireController = require('./controllers/commentaire.controller.js');

app.use(express.urlencoded({extented:true}));
app.use(express.json());

mongoose.connect('mongodb://mamsleib:mams123@ds131765.mlab.com:31765/devoir', { useNewUrlParser: true },(err) =>
{
	if(err){
		console.log('database not connected');

	}
	else{
		console.log('database connected');
	}
});

app.get('/', (req,res) =>
{
	res.sendFile( __dirname + '/html/index.html');
});

// Script client
app.get('/clients', clientController.getClient);
app.get('/createclient.html', function(req, res) {
    res.sendFile( __dirname + '/html/createclient.html');
});
app.post('/createclient.html', clientController.createClient);
app.get('/client/:id', clientController.getClientById);
app.get('/client/:id/remove', clientController.deleteClient);
app.put('/client/:id/update', clientController.updateClient);
app.post('/clientdeleteMany', clientController.deleteClientMany);
app.put('/clientupdateMany', clientController.updateClientMany);

// Script facture
app.get('/createfacture.html', function(req, res) {
    res.sendFile( __dirname + '/html/createfacture.html');
});
app.post('/createfacture.html', factureController.createFacture);
app.get('/sales', factureController.getSales);
app.get('/deleteLogSales', factureController.deleteLog);
/*app.post('/deleteSales', commentaireController.deleteSales);*/

// Script commentaire
app.get('/createcommentaire.html', function(req, res) {
    res.sendFile( __dirname + '/html/createcommentaire.html');
});
app.post('/createcommentaire.html', commentaireController.createCommentaire);
app.get('/deleteCommentaire/:name', commentaireController.deleteCommentaire);
app.get('/afficherCommentaire/:name', commentaireController.afficherCommentaire);

//totalTTC
app.get('/totalTTC', totalTTCController.totalTTC);


const port = 3000;
app.listen(port, () =>
{
	console.log(`Server on on port ${port}`);
});

