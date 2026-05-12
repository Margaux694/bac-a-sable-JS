/*
// séléctionné le body et ajouter a une div 
document.querySelector("body").innerHTML +=
<div>
    <p>Margaux Galliou</p>
</div>

let paragrapheAmettreEnRouge = document.querySelector("p")

paragrapheAmettreEnRouge.classList.toggle("bg-yellow")

let bouton = document.querySelector("button")
bouton.addEventListener("click", creerunP)

function ajouterUnParagraphe(){
    document.querySelector("#grosseBoite").innerHTML+= `<p>Margaux Gall</p>`
}
    */

//EXO 1
// Créer un élément <h1>
// Sélectionner le h1
const titre = document.querySelector('h1');

// Modifier son style directement
titre.style.color = 'red';

//EXO 2
function interrupteur(id) {
    let element = document.getElementById(id);
    element.classList.toggle('hidden');
}
function hidden() {
    interrupteur("monDiv")
}

// je vais chercher mon bouton
let button = document.getElementById("btn")
// jecoute le lick sur le bouton :au click j'affiche ou je cache la div qui a l'id monDiv
button.addEventListener("click", hidden)


//EXO 3
// fonction pour selectionné les carré
function selectionner(el) {
    document.querySelectorAll('.carré').forEach(c => c.classList.remove('selectionné'));
    el.classList.add('selectionné');
}




//EXO 4
// variable compteur a 0
let compteur = 0;
// calcule nombre de clique via le btn 
document.getElementById("bouton").addEventListener("click", function () {
    compteur++;
    document.getElementById("affichage").textContent = "Nombre de clics : " + compteur;
});

// EXO 5

// scroll de la page
window.addEventListener("scroll", function () {

    // On récupère le header et la bannière dans le HTML
    const header = document.getElementById("header");
    const banniere = document.getElementById("banniere");

    // Si l'utilisateur a scrollé plus bas que la hauteur de la bannière
    if (window.scrollY > banniere.offsetHeight) {

        // On ajoute la classe "colore" au header
        header.classList.add("colore");

    } else {

        // Sinon on la retire (si l'utilisateur remonte)
        header.classList.remove("colore");
    }

});

















