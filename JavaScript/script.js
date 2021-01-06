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

var number = 0;

while (number <= 3) {
    console.log(number);
    number++;
}


do {
    console.log(number);
    number--;

} while (number > 0)

// Numbre paire 

function paire() {
    console.log("les nombres paires")
    for (var i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
paire();

function multiply(number1, number2, number3) {
    var resultMultiply = number1 * number2 * number3;
    return resultMultiply * 2;
}

var result = multiply(5, 6, 7);
console.log(result);

var fruits = ["pomme", "banane", "orange", "citron"];

for (var i = 0; i < fruits.length; i++) {
    if (fruits[i].indexOf("me") != -1) {
        console.log(fruits[i]);
    }
}

fruits.push("fraise");
// var personne = {
//     nom: "NEGAA",
//     prenom: "Litissia",
//     email: "litissianegaa95@gmail.com",
//     telephone: "0781347171",
//     langues: function() {
//         console.log("Français", "Anglais")
//     }
// };

function Personne(nom, prenom, email, telephone) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.telephone = telephone;

}

var personne = new Personne("NEGAA", "Litissia", "litissia.negaa@gmail.com", "0781347171");
console.log(personne);