// array to hold the words that we will grab a string at random
var wordBank = ["haim", "golf"];
// variable to start the amount of guesses the user has to make before they lost the game
var guessCounter = 5;
// array to store the letters that the user inputs as their guess
var lettersGuessed = [];
// empty array to store the string picked at random from wordBank
var word = [];
// empty array which will later display _ equal to the letters in the word picked
var blanks = [];

function drawStuff() {
    // put all the stuff to be drawn on the screen
    document.getElementById("display_word").textContent = `Word: ${blanks}`;
    document.getElementById("remaining_guesses").textContent = `Guesses remaining: ${guessCounter}`;
    document.getElementById("letters_picked").textContent = `Letters you've guessed: ${lettersGuessed}`; //"Your Choise: " + variable + "!")
}

function startGame() {
    guessCounter = 5;
    word = wordBank[Math.floor(Math.random() * wordBank.length)];
    blanks = [];
    lettersGuessed = [];
    for (i = 0; i < word.length; i++) {
        blanks.push("_"); //I am going to add _ to the array for the word chosen and matches the amount of letters to _
    }
    drawStuff();
}


document.onkeyup = function (event) {
    startGame();
    document.onkeyup = function (event) {
        var userInput = event.key;
        var indexOfLetter = word.indexOf(userInput);
        console.log(userInput);
        lettersGuessed.push(userInput);
        console.log(lettersGuessed);
        guess(userInput);

        function guess(ltr) {
            if (indexOfLetter !== -1) { //for loop to check if letter is in the entire word
                blanks[indexOfLetter] = ltr;
                console.log(blanks);
                console.log("this letter is in the word");
            } else {
                guessCounter--;
                console.log("this letter is not in the word");
            }
            drawStuff();

            if (blanks.join('') === word) {
                alert("You've won! The word was '" + word.toUpperCase() + "' Click ok to play again!");
                startGame();
            }

            if (guessCounter === 0) {
                alert("You lost. The word was '" + word.toUpperCase() + "' Click ok to play again.");
                startGame();
            }
        }
        console.log(wordBank);
        console.log(lettersToGuess);
    }
}


// //"selena gomez", "katy perry", "avril lavigne", "jennifer lopez", "p!nk, rihanna", "alicia keys", "adele", "Nicki minaj", "whitney houston", "lana del rey", "ariana grande", "lady gaga", "britney spears"
// //"selena gomez", "katy perry", "avril lavigne", "jennifer lopez", "p!nk, rihanna", "alicia keys", "adele", "nicki minaj", "whitney houston", "lana del rey", "ariana grande", "lady gaga", "britney spears"
// //"Selena Gomez", "Katy Perry", "Avril Lavigne", "Jennifer Lopez", "P!nk", "Rihanna", "Alicia Keys", "Adele", "Nicki Minaj", "Whitney Houston", "Lana Del Rey", "Ariana Grande", "Lady Gaga", "Britney Spears"

