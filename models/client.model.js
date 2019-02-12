const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClientSchema = new Schema({
	name: String,
	adresse: String,
    cp: String,
    ville:  String,
    contratref: String,
    telephone: String,
    mail: String
});


// Export the model
module.exports = mongoose.model('Facture', ClientSchema);  