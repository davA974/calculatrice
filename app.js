
// Si aucun chiffre n'est validé la question lui est retourné
// la fonction Number est pour spécifier que ce qui doit être entré sera toujours un nombre

function addition(nombreA, nombreB) {
    return nombreA + nombreB
}
function soustraction(nombreA, nombreB) {
    return nombreA - nombreB
}
function multiplication(nombreA, nombreB) {
    return nombreA * nombreB
}
function division(nombreA, nombreB) {
    // si on fait la division par zéro
    if(nombreB == 0){
        throw new Error("Opération impossible");
    }
    return nombreA / nombreB;
}

// on utilise var car (let et const) ne fonctionnent pas dans ce cas
do{
    var choix = Number(prompt("Choisissez votre calcul. \n\n 1- Addition\n 2-Soustraction\n 3-Multiplication\n 4-Division"));
}while
(choix !=1 &&  choix !=2 && choix !=3 && choix !=4)

// do pour l'obligation d'entée un nombre
do{
    var premierNombre = Number(prompt("entrez la première valeur"));
    var deuxièmeNombre = Number(prompt("entrez la deuxième valeur"));
}while(isNaN(premierNombre) || isNaN(deuxièmeNombre))

try{

switch(choix){
    case 1:
        var resultat = addition(premierNombre, deuxièmeNombre) 
        break;
    case 2:
        var resultat = soustraction(premierNombre, deuxièmeNombre) 
        break;
    case 3:
        var resultat = multiplication(premierNombre, deuxièmeNombre) 
        break;
    case 4:
        var resultat = division(premierNombre, deuxièmeNombre) 
        break;

    default: Error(" une erreur est apparue ")
}
alert("le resultat de votre opération est : " + resultat)
}
catch(error){
    alert("erreur")
}