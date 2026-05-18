//role : questionner l'API
//parametre :
//return :

fetch("user.json")
    .then(rep => {
        return rep.json()
    })
    .then(data => {
        // a ce nivezu on devrai avoir dans la console les donné renvoyer par l'API
        console.log(data)
        afficherUtilisateur(data.users)
    });

// role : recuperer les utilisateur 1 par 1 et les afficher dans le DOM
// parametre : tableau utilisateur
// return : rien

function afficherUtilisateur(tableauutilisateur) {

    tableauutilisateur.forEach(afficherUtilisateur => {
        let utilisateurCard = `<div class="card large-30">
        
        <div class="flex space-between">
            <img src="asset/users-images/users-images (1)/ $ {utilisateur.image}" alt="" class="large-30">

            <div>
                <h3>NOM: ${utilisateur.nom}</h3>
                <h3>Prenom : ${utilisateur.prenom}</h3>
                <p>Age : ${utilisateur.age}</p>
                <p>Poste : ${utilisateur.poste}</p>
                 <p class="mt-20 flex align-center gap-12"><i class="ph ph-envelope"></i>margauxgaliou@gmail.com</p>
            </div>
        </div>`

        document.querySelector("#card").innerHTML += utilisateurCard

    })
}