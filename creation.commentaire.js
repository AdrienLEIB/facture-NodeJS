
const question = [
	"Quel est le nom du client ?",
	"Écrivez votre note :",
	"Avez vous une autre note à insérer ? (o/n) ?"
];

const question2 = [
	"Ecrivez votre seconde note :"
];
/*
for(var i =0; i <question.length; i++){
	ask[i];
}
*/

// process !!
const answer = [];
const answer2 = [];
var note = "";
const ask = (index) => {
	process.stdout.write(`\n${question[index]}\n`);

}
const ask2 = (index) => {
	process.stdout.write(`\n${question2[index]}\n`);
}

process.stdin.on('data',(data) =>{
	answer.push(data);
	if(question.length === answer.length){
		process.exit();
	}
	
	ask(answer.length);
	
});

process.on('exit', () => {
	const reponse2 = answer[2].toString().charAt(0);
	if(reponse2 =="o"){

	
		process.stdin.on('data2',(data2) =>{
			answer2.push(data2);
			if(question2.length === answer2.length){
				process.exit();
			}
			ask2(answer2.length);
		});
		process.on('exit', () => {
			}); 
		ask2(0);
	


	 }
	 else{
		console.log("pas egale");
	}
}); 
ask(0);

