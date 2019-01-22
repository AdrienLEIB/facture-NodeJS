const fs = require('fs');
if(fs.existsSync('assets')){
	console.log('repo exists');
}
else{
	fs.mkdir('assets', (err) =>{
		console.log('repo created');
	})
};

/*
let files = fs.readdirSync('./');

console.log(files);

let consoleFile = fs.readFileSync('package.json', 'UTF-8');

console.log(consoleFile);

// syntax pour créer un dossier 1
fs.mkdir('assets', (err) => {

	if(err) {
		console.log(err);
	}
	else{
		console.log("repository created");
	}
});

fs.writeFile('./assets/file.txt', 'test ecriture v2', (error) =>{
	if(error){
		console.log(error);
	}
	else{
		console.log('file edited');
	}
});

fs.appendFile('./assets/file.txt', 'test ecriture v2', (error) =>{

		console.log('file edited');
});

// syntax pour créer un dossier 2
if(fs.existsSync('assets')){
	console.log('repo exists');
}
else{
	fs.mkdir('assets', (err) =>{
		console.log('repo created');
	})
};

// renomer un fichier
fs.renameSync('./assets/file.txt','./assets/myfile.txt');

// supprimer un fichier
fs.unlinkSync('myfile.txt');

// supprimer un dossier
fs.rmdirSync('./assets');

*/
