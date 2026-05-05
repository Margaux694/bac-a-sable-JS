

//role : nombre pair ou impair
//paramètre : un nombre
//résultat : un message qui indique si le nombre est pair ou impair

function pairImpair(nombre) {
    if (nombre % 2 === 0) {
        return "Le nombre est pair";
    } else {
        return "Le nombre est impair";
    }
}

console.log(pairImpair(25));

//role : si soleil afficher prend une casquette si pluie prend un parapluie si mets tes bottes
//paramètre : un temps
//résultat : un message qui indique ce qu'il faut faire en fonction du temps

function queFaire(temps) {
    if (temps === "soleil") {
        return "Prends une casquette";
    } else if (temps === "pluie") {
        return "Prends un parapluie";
    } else {
        return "Mets tes bottes";
    }
}

console.log(queFaire("soleil"));


// role : si l'age inferieur a 12 = enfant s'il est compris entre 12 et 18 = adolescent si il est superieur a 18 adulte si il est superieur a 60 senior
// paramètre : un age
// résultat : un message qui indique la catégorie d'age

function categorieAge(age) {
    if (age < 12) {
        return "Enfant";
    } else if (age >= 12 && age < 18) {
        return "Adolescent";
    } else if (age >= 18 && age < 60) {
        return "Adulte";
    } else {
        return "Senior";
    }
}

console.log(categorieAge(22));


// role :  un triangle équilatéral si les les trois longeur sont egal c'est un triangle quelconque sinon c'est un triangle isocèle si deux longeur sont égal 
// paramètre : trois longeur
// résultat : un message qui indique le type de triangle

function typeTriangle(a, b, c) {
    if (a === b && b === c) {
        return "Triangle équilatéral";
    } else if (a === b || b === c || a === c) {
        return "Triangle isocèle";
    } else {
        return "Triangle quelconque";
    }
}

console.log(typeTriangle(3, 2, 3));

// role : détermine si une personne est éligible à une réduction spéciale dans un magasin
// parametre : Elle doit avoir plus de 18 ans et Elle doit être membre du programme de fidélité OU avoir effectué un achat supérieur à 100 euros.
// Résultat : Si toute les condition sont reunies Réduction accordée sinon Réduction refusée

function reduction(age, membre, Achat) {
    //si la personne a plus de 18 ans 
    if (age > 18) {
        // Si la personne est membre ou achat de plus de 100€
        if (membre == true || Achat > 100) {
            //     Réduction accordée
            return "Réduction accordée";
        } else {
            // Sinon
            // Réduction refusée
            return "Réduction refusée";
        }
    } else {
        // Sinon    
        // Réduction refusée
        return "Réduction refusée";
    }
}

let ticket = reduction(20, true, 50);
console.log(ticket);


/*
function reduction(age, membreFidelite, montantAchat) {
    if (age > 18 && (membreFidelite || montantAchat > 100)) {
        return "Réduction accordée";
    } else {
        return "Réduction refusée";
    }
}

console.log(reduction(20, true, 50));

*/




// role : Demandez à l’utilisateur la couleur du feu tricolore grace à un prompt
// Paramètre : L’utilisateur pourra saisir "rouge", "orange" ou "vert" si autre "Danger : feu défectueux !"
// Résultat : Affichez un message indiquant "Je m'arrêt !" pour le rouge, "Je freine !" pour l'orange et "Je passe !" pour le vert.

function feuTricolore() {
    const couleur = prompt("Quelle est la couleur du feu tricolore ? (rouge, orange, vert)");
    if (couleur === "rouge") {
        return "Je m'arrête !";
    } else if (couleur === "orange") {
        return "Je freine !";
    } else if (couleur === "vert") {
        return "Je passe !";
    } else {
        return "Danger : feu défectueux !";
    }
}

console.log(feuTricolore());

// EXO : bulletin scolaire

// role : calcul moyenne generale eleve 
// paramètre : 6 matières : math, français, anglais, histoire, géographie, sport un nombre entre 0 et 20 pour chaque matière
// résultat : moyenne generale

function moyenneGenerale(math, francais, anglais, histoire, geographie, sport) {
    const moyenne = (math + francais + anglais + histoire + geographie + sport) / 6;
    return "La moyenne générale de l'élève est : " + moyenne.toFixed(2);
}
console.log(moyenneGenerale(15, 12, 14, 10, 13, 18));

// role : à partir de la moyenne générale, génère un commentaire d’appréciation
// paramètre : appreciation : si la moyenne est inférieure à 10 : "Il faut travailler plus", entre 10 et 13 : "Poursuivez vos efforts", entre 13 et 15 : "Bon travail", entre 15 et 17 : "Bravo !", entre 17 et plus : "Félicitations !"
// résultat : commentaire d'appréciation

function appreciation(moyenne) {
    if (moyenne < 10) {
        return "Il faut travailler plus";
    } else if (moyenne >= 10 && moyenne < 13) {
        return "Poursuivez vos efforts";
    } else if (moyenne >= 13 && moyenne < 15) {
        return "Bon travail";
    } else if (moyenne >= 15 && moyenne < 17) {
        return "Bravo !";
    } else {
        return "Félicitations !";
    }
}
console.log(appreciation(13));

// role : construit un bulletin complet
// paramètre : moyenne générale et commentaire d’appréciation
// résultat : afficher le bulletin dans la console

function bulletin(moyenne) {
    const appreciationCommentaire = appreciation(moyenne);
    return "Bulletin de l'élève :\nMoyenne générale : " + moyenne.toFixed(2) + "\nAppréciation : " + appreciationCommentaire;
}
console.log(bulletin(14));
