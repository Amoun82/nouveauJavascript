console.log("coucou") ;


const divAffichage = document.querySelector("div");


console.log(divAffichage) ;

document
    .getElementById("titre")
    .addEventListener('click', ()=>{
    if(document.getElementById("titre").textContent == "coucou")
        titre.innerHTML = "test" ;
    else
        titre.innerHTML = "coucou" ;
    divAffichage.classList.toggle("desactiver");

});


/* code pour les divs */



let testAffichage = false ;

const ecouter = document.getElementById('titre1') ;

ecouter.addEventListener('click', ()=>{

    const divAffichage1 = document.getElementById('essayer') ;
    const divAffichage2 = document.getElementById('essayer1') ;
    const divAffichage3 = document.getElementById('essayer2') ;
    const divAffichage4 = document.getElementById('essayer3') ;
    const divAffichage5 = document.getElementById('essayer4') ;
    const divAffichage6 = document.getElementById('essayer5') ;
    
    divAffichage1.classList.toggle("desactiver") ;
    divAffichage2.classList.toggle("desactiver") ;
    divAffichage3.classList.toggle("desactiver") ;
   
    divAffichage4.classList.toggle("desactiver") ;
    divAffichage5.classList.toggle("desactiver") ;
    divAffichage6.classList.toggle("desactiver") ;
   

});


function affichage(e)
{
    document
        .getElementById('affichage')
        .innerHTML += e;
}



// les variables

// type

// 1) number

var test = 18 ;

let nombreDeParticipant = 12 ;

const semaine = 7 ;

nombreDeParticipant -= 2 ;

console.log(nombreDeParticipant) ;

//document.write(`<br>voici la valeur de test ${test}`) ;

affichage(`<br>voici la valeur de test ${test}`) ;

// 2) les chaînes de caractères (les Strings)

let prenom = "un exemple de variable l'histoire" ;

let antoine = 'antoine est "tres méchant"' ;

let salim = `salut j'ai 32 ans` ;

let concatenation = salim+' '+antoine ;

let stephane = "et je suis très méchant" ;

let concatenation2 = `${salim} je suis pas gentil ${stephane}` ;

//document.write(`<br>${prenom}`) ;

affichage(`<br>${prenom}`) ;
    
//document.write(`<br>${antoine}`) ;

affichage(`<br>${antoine}`) ;

//document.write(`<br>${concatenation}`) ;

affichage(`<br>${concatenation}`) ;

//document.write(`<br>${concatenation2} et j'ai ${nombreDeParticipant} enfants<br>`) ;

affichage(`<br>${concatenation2} et j'ai ${nombreDeParticipant} enfants<br>`) ;


// 3) Booléans

let age = 12 ;

let valeur1 = true ;

let valeur2 = false ;

//document.write(`<br> la valeur1 est : ${valeur1}<br> la valeur2 est : ${valeur2}`) ;

affichage(`<br> la valeur1 est : ${valeur1}<br> la valeur2 est : ${valeur2}`) ;

if(age<30)
    valeur1 = false ;


if(valeur1 == true){
    //document.write(`<br>le booleins est : ${valeur1}`) ;
    affichage(`<br>le booleins est : ${valeur1}`) ;
}
else{
    //document.write(`<br> arrete de m'embeter`)
    affichage(`<br> arrete de m'embeter`)
}
let romane = undefined ;

//document.write(`<br>variable romane : ${romane} `) ;
affichage(`<br>variable romane : ${romane} `) ;

let tests = null ;

//document.write(`<br>variable tests : ${tests}<br>`) ;
affichage(`<br>variable tests : ${tests}<br>`) ;


// les types complexes

// le tableau est une liste ordonnée d'élements 
let table = ["fatima","salim","stephane","antoine","eric","romane","marie"] ;
// index :      0,        1,        2,       3,      4,      5,        6

let table2 = [1,2,3,4,5,6] ;

let table3 = ["salim",2,true,"coucou", undefined, 14, null] ;

let table4 = [nombreDeParticipant,semaine,prenom,antoine,salim]

table.unshift("pierrot") ;

console.log(table) ;

for( index of table)
{
    //document.write(`<br>${index} est tres gentil`) ;
    affichage(`<br>${index} est tres gentil`) ;
}


//document.write(`<br><br>${table[2]} n'est pas bien réveillé ce matin<br>`) ;
affichage(`<br><br>${table[2]} n'est pas bien réveillé ce matin<br>`) ;


let villes = ["laon","paris","reims","meaux","corbeny","lyon","marseille","toulouse","saint brieux","tinqueux"] ;

//document.write(`<br>la premiere ville est : ${villes[0]}`) ;
//document.write(`<br>la derniere ville est : ${villes[9]}`) ;

affichage(`<br>la premiere ville est : ${villes[0]}`) ;
affichage(`<br>la derniere ville est : ${villes[9]}`) ;

let tableau = ["je","suis","pas","la","!"] ;

let tableau1 = [15,50,25,30,35] ;

let tableau2 = ["stephane",true,45,null,undefined] ;

let tableau3 = [tableau,tableau1,tableau2]

console.log(tableau[0],tableau[4]) ;
console.log(tableau1[0],tableau1[4]) ;
console.log(tableau2[0],tableau2[4]) ;


console.log(tableau3[0][0],tableau3[0][4]) ;
console.log(tableau3[1][0],tableau3[0][4]) ;
console.log(tableau3[2][0],tableau3[2][4]) ;

// Les objets

// les objets sont parties des types complexes

let prenomUtilisateur = "Stéphane" ;

let nomUtilisateur = "DUFOUR" ;

let user1 = {

    nom : "DUFOUR",
    prenom : "Stéphane",
    age : 39 ,
    email : "dufstef@hotmail.fr",
    soldeBancaire : 1200,
    isConnected : false,
    passeword : "bloublou"

};

affichage(`<br><br> ${user1}`) ;
console.log(user1) ;

for(index in user1)
    affichage(`<br> ${index} : ${user1[index]}`) ;



let voiture = {
    marque : "Chevrolet",
    modele : "Aveo",
    puissance : 15,
    consomation : 5.5,
    critere4 : true
};

console.log(voiture) ;


let maison = {
    superficie : 20000,
    nombrePiece : 5,
    lesPieces : ["salle de bain", "salon", "salle à manger", "WC", "chambre", "Débarat"],
    location : false,
    etage : false
};

console.log(maison) ;


let user10 = {
    nom : "KOBZILI",
    prenom : "Salim"
};

let user11 = {
    nom : "ROLLIN",
    prenom : "Marie"
};

let user12 = {
    nom : "HUPE",
    prenom : "Eric"
};

let user13 = {
    nom : "VERNEROT",
    prenom : "Antoine"
};

let user14 = {
    nom : "DUFOUR",
    prenom : "stephane"
};

let tableauUsers = [user10,user11,user12,user13,user14] ;


let ordi1 = {
    nomOrdi : "Asthon",
    ram : 8000
};

let ordi2 = {
    nomOrdi : "Lili",
    ram : 12000
};

let ordi3 = {
    nomOrdi : "moumoute",
    ram : 128
};

let ordi4 = {
    nomOrdi : "loulou",
    ram : 45000
};

let tableauOrdi = [ordi1,ordi2,ordi3,ordi4] ;

affichage("<br>") ;

for(valeurTableau of tableauUsers){
    console.log(valeurTableau) ;
    for(index in valeurTableau){
        affichage(`<br>${index} : ${valeurTableau[index]}`) ;
    }
    
}

affichage('<br>') ;


for(valeurOrdi of tableauOrdi){
    console.log(valeurOrdi) ;
    for(indexOrdi in valeurOrdi){
        affichage(`<br>${indexOrdi} : ${valeurOrdi[indexOrdi]}`) ;
    }
    
}

affichage(`<br>`) ;


let voiture1 = {
    marque : "peugeot",
    modele : "3008",
    moteur : {
        cylindre : "1.6",
        type : "Gasoil",
        soupape : ["soupape1","soupape2","soupape3"]
    },
    couleur : "Gris foncé"
}

console.log(voiture1) ;
console.log(voiture1.moteur.soupape[2]) ;
console.log(voiture1.moteur)

let maison1 = {
    nom : "ma maison",
    nombrePiece : 7,
    aVendre : false,
    sousAppartement : {
        nombrePiece : 6,
        nom : "mon appart",
        piece : ["WC","Salle de bain","Salon","Salle à manger","Chambre","cuisine"]
    },
    piece : ["WC","Salle de bain","Salon","Salle à manger","Chambre 1","Chambre 2","cuisine"]
};

console.log(maison1.sousAppartement.piece[3]) ;