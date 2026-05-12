
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