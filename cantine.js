let client="Awa";
let codeplat = 3;
let montantverse = 4000;
let quantite = "4";

// conversion
quantite = Number(quantite);// conversion a la chaine nombre

// =======le plat et son prix en fonction du code(if,else)
let nomplat;
let prixunitaire

// if(codeplat === 1){
//     nomplat ="attiete poisson"
//     prixunitaire = 1500;
// }else if(codeplat === 2)
//     {
//     nomplat="riz poulet"
//     prixunitaire= 2000;
// }else if(codeplat === 3){
//     nomplat="alloco oeuf"
//     prixunitaire=1000;
// }else{
//     console.log("code plat invalide")
// }

// ======== les prix des plats avec (switch)
switch(codeplat){
    case 1:
        nomplat ="attieke - poisson"
        prixunitaire = 1500;
    break;
    case 2:
        nomplat ="riz - poulet"
        prixunitaire = 2000;
    break;
    case 3:
        nomplat ="alloco - oeuf"
        prixunitaire = 1000;
    default:
        console.log(" le code du plat est invalide (utiliser 1,2, et 3")              
}



// =========la fonction qui calcule le total=========
function calculertotal(quantite,prixunitaire){
    return quantite*prixunitaire
}

// =========le resultat de la fonction
let total = calculertotal(quantite,prixunitaire)

// =======le recapitulatif=================
console.log(`client : ${client}`)

for (let a=1;a<=quantite;a++){
    console.log(`portion ${a} : ${nomplat} - ${prixunitaire} FCFA`)
}

    console.log(`total à payer : ${total} FCFA`)

// ======== la Monnaie et Montant manquant==========
    console.log(`chère ${client} le montant total a payé est ${total} FCFA`)
       if (montantverse >= total){
    let monnaie=montantverse - total
    console.log(`Monnaie à rendre : ${monnaie} FCFA`)
    }else{
    let manquant=total - montantverse
    console.log(`Montant manquant : ${manquant} FCFA`)
    }

   

