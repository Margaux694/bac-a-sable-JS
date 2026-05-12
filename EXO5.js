
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
