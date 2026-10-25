let client="Awa";
let codeplat = 2;
let montantverse = 3000;
let quantite = "2";

// conversion
quantite = Number(quantite);// conversion a la chaine nombre

// =======le plat et don prix en fonction du code
let nomplat;
let prixunitaire

if(codeplat === 1){
    nomplat ="attiete poisson"
    prixunitaire = 1500;
}else if(codeplat === 2)
    {
    nomplat="riz poulet"
    prixunitaire= 2000;
}else{
    nomplat="alloco oeuf"
    prixunitaire=1000;
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










