// variables for the game
var wordBank = ["haim"] //["madonna", "rihanna", "beyonce", "cardi-b", "haim", "selena"];
// var availableLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var guessCounter = 5; //decreasing amount of guesses remaining
var lettersGuessed = []; //what they have guessed -- all letters
var word = []; // stores wordBank as getting random string 
var blanks = []; // display _ _ _ _ to user of word 
var wins = 0;
var losses = 0;
// let gamesWon = 0;
// let gamesLost = 0;

// var questionBank=new Array;
// var wordArray=new Array;
// var previousGuesses=new Array;
// var currentWord;
// var currentClue;
// var wrongAnswerCount;

// var name = prompt("What is your name?");
// console.log("Hello" + name);

var remainingGuesses = document.getElementById("remaining_guesses");
var word = wordBank[Math.floor(Math.random() * wordBank.length)];
var lettersToGuess = word.length;

var guess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {
    // Exit the game loop

} else if (guess.length !== 1) {
    alert("Please enter a single letter.");
} else {
    // Update the game state with the guess

    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            wordBank[j] = guess; lettersToGuess--;
        }
    }
}
console.log(wordBank);
console.log(lettersToGuess);
// for (i = 0; i < word.length; i++) {
//     blanks.push("_"); //I am going to add _ to the array for the word chosen and matches the amount of letters to _
// }


// document.onkeyup = function (event) {
//     // user presses a button
//     var userInput = event.key;
//     // console.log(userInput);
//     // computer grabs a word from wordBank
//     // let rand = Math.floor(Math.random() * choices.length);
//     lettersGuessed.push(userInput);
//     console.log(lettersGuessed);

//     document.getElementById("letters_picked").textContent = `Letters you've guessed: ${lettersGuessed}`; //"Your Choise: " + variable + "!")
//     document.getElementById("display_word").textContent = `${blanks}`;

//     if (word.indexOf(userInput) !== -1) {
//         console.log("correct guess", word.indexOf(userInput));
//         blanks[word.indexOf(userInput)] = userInput; //blanks at spot 5 should = user input
//         console.log(blanks);
//     }

// }

// //    if (choices.indexOf(userInput) !== -1) {
// // var userInput = "G";
// // for (j)

// // for (var i = 0; i < word.length; i++) {
// //     lettersGuessed[i] = "_";
// // }
// // var lettersLeft = word.length;

// // while (lettersLeft > 0) {
// //     // Game code goes here
// //     // Show the player their progress
// //     // Take input from the player
// //     // Update answerArray and remainingLetters for every correct guess
// // }





// //"selena gomez", "katy perry", "avril lavigne", "jennifer lopez", "p!nk, rihanna", "alicia keys", "adele", "icki minaj", "whitney houston", "lana del rey", "ariana grande", "lady gaga", "britney spears"
// //"selena gomez", "katy perry", "avril lavigne", "jennifer lopez", "p!nk, rihanna", "alicia keys", "adele", "icki minaj", "whitney houston", "lana del rey", "ariana grande", "lady gaga", "britney spears"
// //"Selena Gomez", "Katy Perry", "Avril Lavigne", "Jennifer Lopez", "P!nk", "Rihanna", "Alicia Keys", "Adele", "Nicki Minaj", "Whitney Houston", "Lana Del Rey", "Ariana Grande", "Lady Gaga", "Britney Spears"

