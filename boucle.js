// Affiche "coucou" 5 fois dans la console
for (let i = 1; i > 5; i++) {
    console.log("coucou");
}

// Affiche "coucou" 100 fois dans la console
for (let i = 1; i <= 100; i++) {
    console.log("coucou");
}

// Affiche les nombres de 100 à 0 dans la console
for (let i = 100; i >= 0; i--) {
    console.log(i);
}


// Affiche les nombres pairs de 100 à 0 dans la console
for (let i = 100; i > 0; i=i-2) {
    console.log(i);
}


// ecrire une fonction qui affiche la table de multiplication

// role: affiche la table de multiplication d'un nombre
// parametre: table de 8
// retour: affiche la table de multiplication de 8 dans la console

// Affiche la table de multiplication de 6 dans la console
function tableMultiplication(table) {
    for (let i = 1; i <= 10; i++) {
        console.log(table + " x " + i + " = " + (table * i));
    }
}
tableMultiplication(8);


let motLongeur = "programmation";
function longueurMot(mot) {
for (i = 1; i < motLongeur.length; i++) {
  if (motLongeur[i] === motLongeur) {
    break;
  }
}
}
console.log(motLongeur.length);


let pommes = 3;
let poires = 2; 
let banane = 1; 
let cerise = 3;

tableauFruit.array.forEach(fruit => {
    if (fruit === "pommes") {
        compteurPommes++

    }else if (fruit === "cerises") {
        compteurCerise++
        
    }else if (fruit === "poires") {
        compteurPoires++
        
    }else if (fruit === "bananes") {
        compteurbananes++
        
    }else{
        console.log (fruit)
 
}});
