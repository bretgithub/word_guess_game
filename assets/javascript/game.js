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

// function to draw to the page, manipulate the DOM, and display to the user
function drawStuff() {
    // updates blanks with letters guessed from the user
    document.getElementById("display_word").textContent = `Word: ${blanks}`;
    // updates the remaining guesses when a user guesses a wrong letter
    document.getElementById("remaining_guesses").textContent = `Guesses remaining: ${guessCounter}`;
    // upgates letters guessed to the user, correct or wrong
    document.getElementById("letters_picked").textContent = `Letters you've guessed: ${lettersGuessed}`; //"Your Choise: " + variable + "!")
}

// function to start game with starting conditions
function startGame() {
    // resets counter to 5 guesses remaining
    guessCounter = 5;
    // gets a random word from the wordBank and sets it equal to variable word
    word = wordBank[Math.floor(Math.random() * wordBank.length)];
    // resets the blanks to an empty array
    blanks = [];
    // resets the lettersGuessed to an empty array
    lettersGuessed = [];
    // resets _ to the new word chosen and puts new _ to match how many letters are in the word chosen stored in word
    for (i = 0; i < word.length; i++) {
        blanks.push("_");
    }
    // calls drawStuff function
    drawStuff();
}

// the page is waiting for an event, a key which will run code within the  { }
document.onkeyup = function (event) {
    // calls startGame function
    startGame();
    // the user presses a key again 
    document.onkeyup = function (event) {
        // stores the key the user pressed into a variable userInput 
        var userInput = event.key;
        // ceeates the variable indexOfLetter and matches with the letter guesed to where it appears in the chosen word (?)
        var indexOfLetter = word.indexOf(userInput);
        // debugging
        console.log(userInput);
        lettersGuessed.push(userInput);
        // debugging
        console.log(lettersGuessed);
        // calls guess function
        guess(userInput);

        // the function guess with argument ltr (in this case ltr represents userGuess)
        function guess(ltr) {
            // if the letter the user guessed is not equal to 1, meaning a correct guess, do below
            if (indexOfLetter !== -1) {
                // update the blanks with the matching letter the user picked and put it in the matching index 
                blanks[indexOfLetter] = ltr;
                // debugging
                console.log(blanks);
                // debugging
                console.log("this letter is in the word");
                // if the user does not pick the correct letter
            } else {
                // decrease the amount of guesses the user has remaining
                guessCounter--;
                // debugging
                console.log("this letter is not in the word");
            }
            // calls the drawStuff function to update the DOM to the user
            drawStuff();
            // below handles when the uer wins by matching what is filled in blanks with word
            if (blanks.join('') === word) {
                // alerts to the user that they have won, display the word, and to click ok to play again
                alert("You've won! The word was '" + word.toUpperCase() + "' Click ok to play again!");
                // calls startGame function
                startGame();
            }
            // below handles when the guesses remaining, guessCounter, 0 
            if (guessCounter === 0) {
                // alerts to the user that they have lost, display the word, and to click ok to play again
                alert("You lost. The word was '" + word.toUpperCase() + "' Click ok to play again.");
                // calls the startGame function
                startGame();
            }
        }
        // debugging
        console.log(wordBank);
        // debugging
        console.log(lettersToGuess);
    }
}

// full arrays to use when more logic is figured out with upper and lowercase, repeating letters in the word like banana
// //"selena gomez", "katy perry", "avril lavigne", "jennifer lopez", "p!nk, rihanna", "alicia keys", "adele", "Nicki minaj", "whitney houston", "lana del rey", "ariana grande", "lady gaga", "britney spears"
// //"selena gomez", "katy perry", "avril lavigne", "jennifer lopez", "p!nk, rihanna", "alicia keys", "adele", "nicki minaj", "whitney houston", "lana del rey", "ariana grande", "lady gaga", "britney spears"
// //"Selena Gomez", "Katy Perry", "Avril Lavigne", "Jennifer Lopez", "P!nk", "Rihanna", "Alicia Keys", "Adele", "Nicki Minaj", "Whitney Houston", "Lana Del Rey", "Ariana Grande", "Lady Gaga", "Britney Spears"

