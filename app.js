const express = require('express');
const bodyParser = require('body-parser');

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