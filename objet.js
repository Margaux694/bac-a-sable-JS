

let promo11 = [

    {
        prenom: "alexis",
        age: 19,
        ville: "St Etienne",
        job: "gagner de l'argent"
    },
    {
        prenom: "Romain",
        age: 27,
        ville: "St Etienne",
        job: "data scientist"
    },
    {
        prenom: "Ludivine",
        age: 29,
        ville: "St Etienne",
        job: "formatrice"
    },
    {
        prenom: "Nico",
        age: 42,
        ville: "St Etienne",
        job: "eleveur de poulet"
    },
]


promo11.forEach(eleve => {

    ajouterAubODY(`



        <div>
        <h2 class=" red bg texte-white mb-50 flex space-beetween w-30 txt-center>${eleve.prenom}</h2>
        <p>${eleve.age}</p>
        <p>${eleve.ville}</p>
        </div>
        
     l'age de l'eleve est : ${eleve.age}
     son prenom est ${eleve.prenom}
     et il habite a ${eleve.ville}   
      ` ) 

});

console.log(`
    l'age de l'élève est : ${eleve.age}
    son age est ${eleve.prenom}
    et il habite a ${eleve.ville}
    `
);

function ajouterAubODY(trucAafficher) {

    document.querySelector("body").innerHTML+= trucAafficher
    
}

ficheEleveDansDOM(promo11)