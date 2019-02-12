const express = require('express');
const bodyParser = require('body-parser');

<<<<<<< HEAD
// Mongoose base de donné de NodeJ
const express = require('express');

const app = express();
var cor = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const controllers = require('./controllers/facture.controllers.js');

app.use(express.urlencoded({extented:true}));
app.use(express.json());
//app.use(cors());
// recuperer les données dupuis un site 
mongoose.connect('mongodb://mamsleib:mams123@ds131765.mlab.com:31765/devoir', { useNewUrlParser: true },(err) =>
{
	if(err){
		console.log('database not connected');

	}
	else{
		console.log('database connected');
	}
});


if(){
	
}
/*
app.get('/', (req,res) =>
{
	res.send("Je ne parviens pas à vous identifier");
});
app.get('/:name', (req,res) =>
{
	res.send("Bonjour "+ req.params.name+ ", Bienvenu sur votre API de gestion de catalogue produit.");
});

app.post('/api/v1/produit', produitController.createProduit);
app.get('/api/v1/produit', produitController.getProduit);
app.get('/api/v1/produit/:id', produitController.getProduitById);
app.get('/api/v1/produit/:id/remove', produitController.deleteProduit);
app.put('/api/v1/produit/:id/update', produitController.updateProduit);
app.get('/api/v1/produit/:id/calculate-taxe', produitController.taxeProduit);
app.post('/api/v1/produit/deleteMany', produitController.deleteProduitMany);
app.put('/api/v1/produit/updateMany', produitController.updateProduitMany);
const port = 3000;
app.listen(port, () =>
{
	console.log(`Server on on port ${port}`);
});
*/
=======
const product = require('./controllers/produit.controller.js'); // Imports routes for the products
const app = express();
var cor = require('cors');
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://mamsleib:mams123@ds131765.mlab.com:31765/devoir';
app.use(express.urlencoded({extented:true}));
app.use(express.json());
//const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(dev_db_url, { useNewUrlParser: true },(err) =>
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
	console.log(req.body)
	res.send("Vous etes co");
});

app.post('/api/v1/client', client.client_create);

let port = 1234;

app.listen(port, () => {
    console.log(`Server on on port ${port}`);
});
>>>>>>> 5de44ad906961e1dcefcc4a98e188ae0661c2c0c
