// Variable 
var prenom = "litissia";
var nom = "NEGAA";
var x = 2;


var xString = '4';
//parseFlot : décimaux
var xNumber = parseInt(xString);

//String

var position = nom.indexOf('a');
var newnom = prenom.replace("sia", "ais");
var user = nom + ' ' + prenom;
console.log(user);
var xToString = x.toString();
var namelength = nom.length;

var speed = 120;
if (speed < 80) {
    console.log(" Bonne vitesse ")
} else if (speed < 100) {
    console.log("Il faudrais que vous ralentissez");
} else {
    console.log("Attention ! Danger");
}

var color = "yellow";
switch (color) {
    case "blue":
    case "yellow":
        console.log("Ce n'est pas ma couleur favoris");
        break;
    case "red":
        console.log("C'est ma couleur préferé");
        break;

    default:
        console.log("je ne connais pas la couleur");

}