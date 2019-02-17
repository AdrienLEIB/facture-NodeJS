// Mongoose base de donné de NodeJ

//'mongodb://mamsleib:mams123@ds131765.mlab.com:31765/devoir'
const express = require('express');

const app = express();
var cor = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const clientController = require('./controllers/client.controller.js');

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

app.get('/', (req,res) =>
{
	res.send(" Faire un html qu résume chaque app");
});


app.get('/createuser.html', function(req, res) {
    res.sendFile( __dirname + '/createuser.html');
});

app.post('/createuser.html', clientController.createClient);
app.get('/clients', clientController.getClient);


app.get('/createfacture.html', function(req, res) {
    res.sendFile( __dirname + '/createfacture.html');
});
app.post('/createfacture.html', clientController.createFacture);
app.get('/sales', clientController.getSales);
app.get('/deleteLogSales', clientController.deleteLog);

app.get('/createcommentaire.html', function(req, res) {
    res.sendFile( __dirname + '/createcommentaire.html');
});
app.post('/createcommentaire.html', clientController.createCommentaire);
app.get('/deleteCommentaire/:name', clientController.deleteCommentaire);
app.get('/afficherCommentaire/:name', clientController.afficherCommentaire);


app.post('/deleteSales', clientController.deleteSales);


app.get('/totalTTC', clientController.totalTTC);


const port = 3000;
app.listen(port, () =>
{
	console.log(`Server on on port ${port}`);
});

