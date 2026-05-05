//role
// parametre
// retourner

//EXO 1

// role : calculer moyenne 
// Parametre : 4 notes
// Retourner : la moyenne de ces 4 notes

function moyenne(math, francais, chimie, italien) {
    return (12 + 15 + 14 + 8.2) / 4;
}
console.log(`Moyenne : ${moyenne(12, 15, 14, 8.2)}`); 


//EXO 2

// role : Retirer une pomme du stock
// Parametre : rien
// Retourner : rien

let stockPomme = 4;
console.log(stockPomme);

function retirerPomme() {
    stockPomme -= 1;
}
retirerPomme();
console.log(stockPomme);

//EXO 3

// role : afficher derniere lettre d'un mot
// Parametre : un mot
// Retourner : RIEN 

function derniereLettre(mot) {
    return mot[mot.length - 1];
}
console.log(derniereLettre("Bonjour"));



//EXO 4

// role : remplacer un produit bubbleTea par un produit cacao
// Parametre : afficher le nouveau produit et les initial (thé, café, tisane, cacao)
// Retourner : afficher

function nouvelleOffre(produits) {
    return produits.replace("bubbleTea", "cacao");
}

console.log(nouvelleOffre("thé, café, tisane, cacao"));

//EXO 5

// role : verifier si adresse mail contient un @
// Parametre : une adresse mail
// Retourner : true si l'adresse mail est valide, false sinon

function verifierMail(adresseMail) {
    return adresseMail.includes("@");
}
console.log(verifierMail("margauxgall@gmail.com")); 

//EXO 6

// role : retournera toujours la somme des deux valeurs renseignées 
// Parametre : deux nombres
// Retourner : la somme des deux nombres

function somme(a, b) {
    return a + b;
}   
console.log(somme(4, 8));
console.log(somme(10, 15)); 

function afficherAddition(a, b) {
    ajouterBalise(`<p> ${a+b}</p>`);
}
afficherAddition(4, 8);
afficherAddition(10, 15);

//EXO 7

// role : poser une question en utilisant la fonction "prompt"
// Parametre : une question
// Retourner : la reponse de l'utilisateur

function poserQuestion(question) {
    return prompt(question);
}
let reponse = poserQuestion("Quel est ton prénom ?");
console.log(`Bonjour ${reponse}`);


//EXO 8

// role : Retourner toujours au troisième élément d'une liste à virgule en chaine de caractére
// Parametre : une liste
// Retourner : le troisième élément de la liste

function troisiemeElement(liste) {
    return liste.split(",")[2];
}
console.log(troisiemeElement("pomme, banane, fraise, orange"));

//EXO 9

// role : ajouter une balise dans le html
// Parametre : la balise a ajouter dans le html
// Retourner : RIEN

function ajouterBalise(balise) {
    document.querySelector("body").innerHTML += balise;
}

ajouterBalise("<h1>Coucou Margaux</h1>");
ajouterBalise("<h2>Comment va tu aujourd'hui ?</h2>");

//role : afficher le prénom 
// Parametre : un prénom
// Retourner : RIEN

function afficherPrenom(prenom) {
    ajouterBalise(`<p>Bonjour ${prenom}, comment ça va ?</p>`);
}   
afficherPrenom("Margaux");

//EXO 10

// role : fonction qui convertit un montant en euros en dollars
// Parametre : un montant en euros
// Retourner : le montant converti en dollars   

function convertirEuroEnDollar(montantEuro) {
    const tauxConversion = 1.17;
    return montantEuro * tauxConversion;
}
console.log(convertirEuroEnDollar(10.00));    

// role : demander un prix et un taux de change a l'utilisateur ET convertir le prix 
// Parametre : transformer chaine de caractere en nombre et demander un taux de conversion
// Retourner : le prix converti

function convertirPrix() {
    let prixEuro = parseFloat(prompt("Quel prix veut tu convertir ?"));
    let tauxConversion = parseFloat(prompt("Entrez le taux de conversion (1 euro = 1.17 dollars) :"));
    let prixDollar = prixEuro * tauxConversion;
    return prixDollar;
}   
let prixConverti = convertirPrix();
alert(`Le prix converti en dollars est : ${prixConverti.toFixed(2)} $`);

//EXO 11

// role : calculer moyenne automatiquement et demander les notes a l'utilisateur
// Parametre : rien
// Retourner : retourner de la moyenne de ces 4 notes dans un pop up en alert

function calculerMoyenne() {
    let math = parseFloat(prompt("Entrez votre note de math :"));
    let francais = parseFloat(prompt("Entrez votre note de français :"));
    let chimie = parseFloat(prompt("Entrez votre note de chimie :"));
    let italien = parseFloat(prompt("Entrez votre note d'italien :"));
    return (math + francais + chimie + italien) / 4;
}
function afficherMoyenne() {
    let moyenne = calculerMoyenne();
    alert(`Votre moyenne est : ${moyenne.toFixed(2)}`);
}
afficherMoyenne();


/**
 * la fonction
 * @param 
 * @returns la réponse 
 */





