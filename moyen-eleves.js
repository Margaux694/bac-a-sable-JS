let francais = 12;
console.log(francais);

let math = 15;
console.log(math);

let géographie = 14;
console.log(géographie);

let musique = 11;
console.log(musique);

console.log("Moyenne : " + (francais + math + géographie + musique) / 4);

/*

const notes = [12, 9, 15, 17, 10] ;
function calculerMoyenne(math, francais, sport, svt) {
    let math = console.log("Entrez votre note de math :");
    let francais = console.log("Entrez votre note de français :");
    let chimie = console.log("Entrez votre note de chimie :");
    let italien = console.log("Entrez votre note d'italien :");
    return (12 + 9 + 15 + 17 + 10) / 4;
}
function afficherMoyenne() {
    let moyenne = calculerMoyenne();
    console.log (`Votre moyenne est : ${moyenne.toFixed(2)}`);
}
afficherMoyenne();

// tableae$u des notes 
*/

// CALCULER UNE MOYENNE FACILEMT

// role : calculer la moyenne
// PARAMETRE
// REOURN

// crée une fonction
const tableauNotes = [12, 9, 15, 17, 10];

// CREE UNE FONCTION
function calculerMoyenne(tableauNotes) {
  let somme = 0;
  // recupererer les notes une par une dans le tableau
  tableauNotes.notes.forEach((element) => {
    // quand il en a une, il l'additionne dans une variable
    somme = somme + notes;
  });

  //on divise la somme obtenu par le nbr de valeur dans le tableau c a d la longeur duntableau
  let moyenne = somme / tableauNotes.length;
  //retouner les resultat
  return moyenne;
}

// role :
// param : du resultat
//return : rien

function afficherMoyenne(moyenne) {
  console.log(`la moyenne de l'élève est : ${moyenne}`);
}

let moyenne = calculerMoyenne(tableauNotes);
afficherMoyenne(moyenneEleve);
