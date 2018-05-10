var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// Wins number counter
var wins = 0;
var wins = document.getElementById('wins');

// Losses number counter
var losses = 0;
var losses = document.getElementById('losses');

// How many guesses the user has
var numberGuess = 9;
var numberGuess = document.getElementById('numberGuess');
 
var guessChoices = [];

// User should be able to press any key and get it to show up on screen
document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    if (letters.indexOf(userGuess) > -1) {
        
        if (userGuess === computerGuess) {
            wins++;
            numberGuess = 9;
            guessChoices = [];
    
        }
    
        if (userGuess != computerGuess) {
            numberGuess --;
            guessChoices.push(userGuess);
        }
    
        if (numberGuess === 0) {
            numberGuess = 9;
            losses ++;
            guessChoices = [];
        } 
    };
};
