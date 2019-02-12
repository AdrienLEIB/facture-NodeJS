const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClientSchema = new Schema({
	id_client: {type: Number},
	adresse: {type: String},
    cp: {type: String},
    ville: {type: String},
    contratref: {type: String},
    telephone: {type: Number},
    mail: {type: String}
});


// Export the model
module.exports = mongoose.model('Facture', ClientSchema);