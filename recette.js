
let recette = {
  nom: "poulet rôti au thym et à l'ail",
  difficulte: "Facile",
  tempPreparation: "15 min",
  tempCuisson: "1h 15 min",
  nbrPortions: 6,
  ingredients: ["huile d'olive", "beurre fondu", "feuilles de thym", "sel", "poivre", "ail"]
}

console.log(`${recette.nom} ${recette.difficulte} a ${recette.tempPreparation} ${recette.tempCuisson} ${recette.nbrPortions} ${recette.ingredients}`)

let recettes = [
  {
    nom: "poulet rôti au thym et à l'ail",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "1h 15 min",
    nbrPortions: 6,
    ingredients: ["huile d'olive", "beurre fondu", "feuilles de thym", "sel", "poivre", "ail"]
  },
  {
    nom: "spaghetti à la bolognaise",
    difficulte: "Moyenne",
    tempPreparation: "20 min",
    tempCuisson: "40 min",
    nbrPortions: 4,
    ingredients: ["spaghetti", "viande hachée", "oignon", "carotte", "tomate concassée", "ail", "huile d'olive", "sel", "poivre"]
  },
  {
    nom: "salade César",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "0 min",
    nbrPortions: 2,
    ingredients: ["laitue romaine", "croûtons", "parmesan râpé", "filet de poulet", "sauce César", "sel", "poivre"]
  }
];

//console.log(`Le ${difficulte}[0].difficulte} `)
let ingredientsListe
function ajouterAubODY(recette) {

  document.querySelector("body").innerHTML += recette

}

recettes.forEach(recette => {
  ajouterAubODY(`
<div>
  <h2> ${recette.nom}</h2>
  <P>Difficulté : ${recette.difficulte}</P>
  <p>Temps de préparation : ${recette.tempPreparation}</p>
  <p>Temps de cuisson : ${recette.tempCuisson}</p>
  <p>Nombre de portion : ${recette.nbrPortions}</p>
  <p>Liste des ingrédients : ${recette.ingredients}</p>
  <p>Recette : </p>
  
  <ul>${ingredientsListe}</ul>
</div>`)
  console.log(`La recette du  ${recette.nom} Difficulté ${recette.difficulte} Temps de préparation ${recette.tempPreparation} Temps de cuisson  ${recette.tempCuisson} Portion ${recette.nbrPortions} Ingredients ${recette.ingredients}`)
})


