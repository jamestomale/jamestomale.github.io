var availableLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var movies = ['lion - king', 'pinocchio', 'bambi', 'fantasia', 'snow - white', 'cinderella', 'peter - pan', 'alice - in - wonderland', 'sleeping - beauty', 
			  'lady - and - the - tramp', 'the - jungle - book', 'the - aristocats', 'the - little - mermaid', 'aladdin', 'pocahontas', 'toy - story', 'dalmatians',
			  'hercules', 'mulan', 'tarzan', 'the - tigger movie', 'cars', 'lilo - and - stitch', 'monsters - inc', 'atlantis', 'ratatouille', 'beaty - and - the -beast', 'frozen', 'dumbo', 'Moana'];
var selectedWord = "";
var lettersinWord = [];
var numBlanks= 0;
var blanksAndSuccesses = [];
var wrongLetters= [];

//Game Counters
var wins = 0;
var loss = 0
var guessesLeft = 15;

//Start Game

function startGame() {
//Computer picks random movie title from list of array
    selectedWord = movies[Math.floor(Math.random() * movies.length)];

	//Slipt the words by letters with .split
	//lettersinWord = selectedWord.split('');
	lettersinWord = selectedWord.replace(/[a-z]/g,'_', ' ');

	numBlanks = lettersinWord.length;


	//Reset Counters
	guessesLeft = 15;
	wrongLetters = [];
	blanksAndSuccesses = [];
}
// Change HTML to reflect round conditions
	document.getElementById("wordToGuess").innerHTML = 'Movie Title:'+ blanksAndSuccesses.join(" ");
	document.getElementById('numGuesses').innerHTML = 'Wrong Guesses:'+ guessesLeft;
	document.getElementById("wins").innerHTML = 'Wins:' + wins;
	document.getElementById("loss").innerHTML = 'Loss:' + loss;


	// Testing / Debugging
	console.log(selectedWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);	


function checkLetters(letter) {
	// Check if letter exists in word at all
	var isLetterInWord = false;
	for (var i=0; i<numBlanks; i++) {
		if(selectedWord[i] == letter) {
			isLetterInWord = true;
		}
	}

	// Check where in word letter exists, then populate out blanks and sucesses
	if (isLetterInWord) {
		for (var i=0; i<numBlanks; i++) {
			if(selectedWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}	
	}

	// Letter wasnt found
	else {
		wrongLetters.push(letter);
		guessesLeft	--;
	}
	// Test and Debugging 
	console.log(blanksAndSuccesses);
}

function roundComplete() {
	console.log("Wins: " + wins + " | Loss: " + loss + " | Guesses Left " + guessesLeft);

	// Update the HTML to reflect the most recent count stats
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

	// Check is user won
	if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
		//Timeout to let winning letter populate
		setTimeout(function(){ 
			wins++;
			alert("You Won!");
		// Update the win counter 
		document.getElementById("winCounter").innerHTML = wins;

		startGame();

		}, 1000);
	}

	// Check if user lost
	else if (guessesLeft == 0) {
		loss++;
		alert("You Lost!");

		// Update HTML 
		document.getElementById("loss").innerHTML = loss;

		startGame();
	}
}
//MAIN PROCESS ()

startGame();

//Register keyclicks

document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();

	//Testing / Debugging
	console.log(letterGuessed); 

}