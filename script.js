
// Exercice 1
let i = 0;
console.log(i);

i += 1;
console.log(i);

i++
console.log(i);

i += 1;
console.log(i);

i += 1;
console.log(i);

// Exercice 2
let prenom = "Margaux";
let nom = "Galliou";
console.log(prenom);

let nomComplet = `${prenom} ${nom}`;
console.log(nomComplet);

// Exercice 3
let pharse2 = "Bonjour Margaux";
let phrase = `${pharse2} comment vas-tu ?`;
console.log(phrase);

let Salut = "Bonjour Margaux comment vas-tu ?";
console.log(Salut);

// Exercice 4
phrase = "Bonjour Margaux comment vas-tu ?";
console.log(phrase.length);

// Exercice 5
let mot = "chateau";
console.log(mot.replace("t", "p"));


mot = "pelican";
console.log(mot.indexOf("p"));
console.log(mot[0]);
console.log(mot.charAt(0));
console.log(mot[1]);

// cree ma fonction
function bonjour(Margaux) {
    console.log(`Bonjour ${Margaux}`);
}

// j'appelle / je lance ma fonction
bonjour("Margaux");

//role : aditionner 2 nombres
function addition(a, b) {
    return a + b;
}

// j'appelle / je lance ma fonction
console.log(`Résultat de l'addition : ${addition(4, 8)}`);

//OU 

let valeur = addition(4, 8);
console.log(valeur);

//role : ajouter une balise dans le html
// Parametre : la balise a ajouter dans le html
// Retourner : RIEN

function ajouterBalise(balise) {
    document.querySelector("body").innerHTML += balise;
}

ajouterBalise("<h1>Bonjour</h1>");
ajouterBalise("<p>On est trop fort en JS</p>");
ajouterBalise("<p>On est des cracks</p>");

// CONDITION

// SI b = c -> bien jouer
//Sinon -> dommage

let b = "28";
let c = "6";
if (b === c) {
    console.log("Bien joué");
} else {
    console.log("Dommage");
}

//

if (b === c) {
    console.log("C'est pareil");
} else if (b > c) {
    console.log("b est plus grand que c");
}
else {
    console.log("c est inferieur a b");
}

// role : vérifier si l'utilisateur est connecté ou pas

let connected = true;
if (connected) {
    console.log("Bienvenue sur votre compte");
} else {
    console.log("Veuillez vous connecter");
}











