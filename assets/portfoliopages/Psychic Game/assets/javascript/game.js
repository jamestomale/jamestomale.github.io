// getting the var from the html

var winsHTML =document.getElementById('wins');
var lossesHTML = document.getElementById('losses');
var guessesleftHTML = document.getElementById('guesses-left');
var guessesHTML =document.getElementById('guesses');

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
var randomLetter = getRandomLetter;

var wins =0;
var losses =0;
var guessesleft =9;
var guessesarray=[];

document.onkeyup = function (event) {
    var guesses=event.key.toLowerCase();

    
    if (guessesleft > 0) {

        if(guesses != getRandomLetter) {
            guessesleft--;
            guessesarray.push(guesses);

        }
        else {
            wins++;
            alert("You won");
            guessesleft=9;
            guessesarray=[];
        }
    }
    else {
        losses++;
        guessesleft=9;
        guessesarray=[];
        alert("The game has been reset");
    }
    
    //Write results to html
    winsHTML.textContent = wins;
    lossesHTML.textContent = losses;
    guessesleftHTML.textContent = guessesleft;
    guessesHTML.textContent = guessesarray;
};
