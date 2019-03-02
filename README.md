# Word Guess Game aka Hangman

## Description
This was our first homework, advanced assignment, using JavaScript in conjunction with HTML and CSS to create a game. The minimum requirements of the game are listed below:
* The app pics a word at random
* The user has to guess letters to make the word (english - US)
* The word picked at random is displayed as _ on the screen
* Wons
* Losses
* Guesses left
* Guesses made so far
* When the player won, increase wins counter
* When a player lost, increase loses counter
* Display all these results (wins, losses, guesses left, guesses made) to the user
* If the user guesses a correct letter, the result is displayed on screen an replaces one of the _
* If the user guesses an incorrect letter, the result is displayed on screen and the amount of guesses remaining decreases
* Display specific text on the page 
* There is a counter, guesses remaining that the user has until the game is lost

I modified the requirements because I was not interested in displaying losses or wins, you either win and the game reselts or you run out of guesses and the game resets, the counter is set on the guesses left so I met the requirement there and made a more realistic game experience.

On top of the requirements and modifications listed above, I added:
* alerts to let the user know when they won or lost and what the correct letter was
* if the user chose a letter they had already chosen, the user is alerted to picj another letter
* the counter only decreases if the user only pics a unique wrong letter, not a repeat
* the game resets after the user won or lost

The exercise had us manipulate:
* Functions
* Callbacks
* DOM
* Arrays
* Strings
* Debugging

###$ NOTE: I DID NOT FINISH THIS HOMEWORK BUT I WOULD LIKE TO CONTINUE TO WORK ON THIS AND FINISH THE LOGIC

## Roadmap
I intend to redesign this page with more styling using Bootstrap to jazz it up, also, to finish the logic so it works as expected, I did not include the following logic:
* How to handle a word with more than one of the same letter like banana
* How to handle words in different cases (simply by turning it all to lowerCase or upperCase)
* If the user repeats a letter guess it alerts the user and does not count towards a guess remaining

## Feedback
Open to feedback and how to finish the logic, restructure code.

## Shoutout
Props to Molly, Joe, and Trae who are our cohort's TAs who helped work through logic and how to better structure the code in a way that would allow me to write more efficient functions.
