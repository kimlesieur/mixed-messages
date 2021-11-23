
process.stdout.write('Bienvenue à Kaamelott Sir ! Perceval voudrait vous dire 2 mots... \n'); 

let generateNum = num => {
    return Math.floor(Math.random() * num)
};

const citations = {
    morceau1: ["Bon c'est l'histoire d'un vieux...", "Sire, Sire ! On en a gros !", "Non mais Sire, c'est n'importe quoi, là."],
    morceau2 : ["Enfin c’est un vrai piège à cons c’t’histoire-là.", "Ah c’est marrant les petits bouts de fromage par terre. C’est ça que vous appelez une fondue ?", "Et au fait... De l'humilité : C'est quand il y a des infiltrations ?"],
    morceau3: ["Putain, en plein dans sa mouille quoi !", "Ah nan, finalement c'était pas un vieux mais une vieille... Ou un jeune vieux ?", "Bref, tout ça pour dire, que je voudrais bien qu’on me considère en tant que Tel.", "Faut que je retourne à la ferme de mes vieux ! Y a ma grand-mère qui a glissé sur une bouse ! C’est le vrai merdier !"]
}

let messages = [];

//Example of a loop with switch to add citations inside the messages array (that will be displayed)
/*
for (let prop in citations) {
    switch (prop) {
        case 'morceau1' :
            let index1 = generateNum(citations[prop].length);
            messages.push(citations[prop][index1]) 
            break
        case 'morceau2' :
            let index2 = generateNum(citations[prop].length);
            messages.push(citations[prop][index2]) 
            break
        case 'morceau3' :
            let index3 = generateNum(citations[prop].length);
            messages.push(citations[prop][index3]) 
            break
        default:
            messages.push('Oh là, moi quand y fait nuit, j\'y comprends plus rien')
    }
}
*/

for (let prop in citations) {
    let index1 = generateNum(citations[prop].length);
    messages.push(citations[prop][index1]);
}

let delay = 1200;

//A counter to delay the console log = Fail to add delay between sentences, it just add delay before printing all the array message
/*
function percevalGenerator() {
    for(let i=0; i<messages.length; i++) {
        setTimeout(() => {console.log(messages[i])}, 3000);
    }
}
*/

let counter = 0;
let i=0;
function percevalGenerator2() {
    let interval = setInterval(function() {
        console.log(messages[i]);
        i++;
        counter++;
        if(counter === messages.length){
            setTimeout(() => {console.log('Allez à plus gros salsifis !')}, delay)
            clearInterval(interval);
        }
    }, delay)
};


setTimeout(percevalGenerator2, delay);