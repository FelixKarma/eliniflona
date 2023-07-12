const quantité = document.getElementById("qté");
const sousTotal = document.getElementById("sous-total");

let qte;
function onConfirm() {

    //On récupère la saisie de l'age et on transforme le texte en nombre entier
    qte = parseInt(quantité.value);
    console.log(qte);
    if (typeof qte == 'number' && !isNaN(qte)) {
        let total = 3499.99 * qte;
        sousTotal.innerText = total.toFixed(2);
    } else if(isNaN(qte)){
        sousTotal.innerText = 0;
    }
    // Exemple d'utilisation pour simuler l'appui de la touche "Enter" (code de touche 13)

}


quantité.addEventListener('keyup', onConfirm);


