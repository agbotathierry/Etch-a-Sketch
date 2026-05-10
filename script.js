
function ancienneGrille(){
  
    const selection = document.querySelector("#container");
    for(let i = 0;i<256;i++){
        carrer = document.createElement("div")
        carrer.classList.add("cell");
        let tailleCarrer = 800 / 16;
        carrer.style.width = tailleCarrer + "px";
        carrer.style.height = tailleCarrer + "px";
        carrer.dataset.opacity = 1;
        selection.appendChild(carrer);
    }
    //les ecouteurs
    const toutLescarrer = document.querySelectorAll(".cell");
    toutLescarrer.forEach(function(a){
        a.addEventListener("mouseenter",function(){
            let rouge = Math.floor(Math.random() * 256); // avec ceci on a le passage aleatoir des couleur
            let vert = Math.floor(Math.random() * 256);
            let bleu = Math.floor(Math.random() * 256);
            let couleur = "rgb(" + rouge + "," + vert + "," + bleu + ")";
            a.style.backgroundColor = couleur;
            let opacite = parseFloat(a.dataset.opacity);
            opacite -= 0.1;
            a.dataset.opacity = opacite;
            a.style.opacity = opacite;
        })
        // a.addEventListener("mouseleave",function(){
        //     a.style.backgroundColor="black";
        // })
    })
    nouvelleSelection = document.querySelector("#nouvelGrille");
    nouvelleSelection.addEventListener("click",function(){
        let taille = parseInt(prompt("taper le nombre de la nouvell grille(max caractere:100) "));
        taille = Math.min(taille, 100); 
        nouvelGrille(taille);


    })

}
// fonction de nouvellegrille
function nouvelGrille(taille){
    const selection = document.querySelector("#container");
    selection.innerHTML = "";
    //boucle 
    for(let i = 0;i<(taille*taille);i++){
        carrer = document.createElement("div")
        carrer.classList.add("cell");
        let tailleCarrer = 800 / taille;
        carrer.style.width = tailleCarrer + "px";
        carrer.style.height = tailleCarrer + "px";
        selection.appendChild(carrer);
    }
    // les ecouteur 
    const toutLescarrer = document.querySelectorAll(".cell");
    toutLescarrer.forEach(function(a){
        a.addEventListener("mouseenter",function(){
            let rouge = Math.floor(Math.random() * 256);
            let vert = Math.floor(Math.random() * 256);
            let bleu = Math.floor(Math.random() * 256);
            let couleur = "rgb(" + rouge + "," + vert + "," + bleu + ")";
            a.style.backgroundColor = couleur;
        })
        a.addEventListener("mouseleave",function(){
            a.style.backgroundColor="black";
        })
    })
}
ancienneGrille();