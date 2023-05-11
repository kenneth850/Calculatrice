// afficher un menu à notre utilisateur, comportant les 4 modes

do{

    var choix = Number(prompt("Que souhaitez-vous faire ?\n\n1 - Addition\n2 - Multiplication\n3 - Soustraction\n4 - Division \n"));

} while(choix != 1 && choix != 2 && choix != 3 && choix != 4);

// demander à l'utilisateur de choisir 2 nombres
do {
    var premierNombre = Number(prompt("Choisissez un premier nombre."));
    var deuxiemeNombre = Number(prompt("Choisissez un second nombre."));
    
} while(isNaN(premierNombre) || isNaN(deuxiemeNombre));

// création des fonctions addition, multiplication, soustraction, division

function addition(nombreA, nombreB){
    return (nombreA + nombreB);
} 

function multiplication(nombreA, nombreB){
    return (nombreA * nombreB);
}

function soustraction(nombreA, nombreB){
    return (nombreA - nombreB);
}

function division(nombreA, nombreB) {
    if(nombreB == 0) {
        throw new Error("Impossible de diviser par 0.");
    }
    return nombreA / nombreB;
}

try{
    switch(choix){

        case 1 :
            var result = addition(premierNombre, deuxiemeNombre);
            break;

        case 2 : 
            var result = multiplication(premierNombre, deuxiemeNombre);
            break;

        case 3 :
            var result = soustraction(premierNombre, deuxiemeNombre);
            break;

        case 4 :
            var result = division(premierNombre, deuxiemeNombre);
            break;
        default:
            throw new Error("Une erreur est survenue.");
    }

    // Affichage du résultat
    alert("Le résultat de votre calcul est : " + result);
}
catch(error) {
    alert(error); // Si une erreur est survenue, on affiche l'erreur
}






