const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Un schema permet de mapé une base de donnée
let SavesSchema =  new Schema ({
	ref:Number,
	TTC:Number
});

// exporter le schema vers la base de donnée
module.exports = mongoose.model('Saves', SavesSchema);