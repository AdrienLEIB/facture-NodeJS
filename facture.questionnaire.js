
const question = [
	"Quel est le nom du client ?",
	"Quelle est la prestation fournie ?",
	"Combien d'heure facturée ?",
	"Il y a t'il une TVA à appliquer (O/N) ?"
];

/*
for(var i =0; i <question.length; i++){
	ask[i];
}
*/

// process !!
const answer = [];
const ask = (index) => {
	process.stdout.write(`\n${question[index]}\n`);
}

process.stdin.on('data',(data) =>{
	answer.push(data);
	if(question.length === answer.length){
		process.exit();
	}
	ask(answer.length);
});

process.on('exit', () => {
	const taxe = answer[0] * answer[1] /100;
	console.log('La taxe: ' + taxe);
}); 
ask(0);

