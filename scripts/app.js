// Someone thinks of a word and we keep it secret from the other players
// We will display a series of underscores depending on the length of the word.
// Each turn the player will guess 1 letter from the word.
// If guess is correct we will display the letter in the blank word
// if incorrect we draw a piece of the hangman or tell the user they have x amount of guesses left.
// add incorrect guess to a div.
// start button
// replay button

// we'll need an id for 
// start button
// replay button
// SecretWord
// wrong guesses
// hangman
// guess / input

// Id section

let startBtn = document.getElementById("startBtn");
let restartBtn = document.getElementById("restartBtn");

let secretWord = document.getElementById("secretWord");
let wrongGuesses = document.getElementById("wrongGuesses");
let hangMan = document.getElementById("hangMan");
let userInput = document.getElementById("userInput");

// variables
// random wordwill be for our api call
// wrong guess will be the users incorrect input
// displayedword will be fore their correct input
let randomWord = "";
let wrongGuess = "";
let displayedWord = [];

let guesses = 0;
let maxGuesses = 5;

startBtn.addEventListener('click', function () {
    //we will call our API function
    ApiCall();
});

function ApiCall() {
    // we initiate the fetch request from our random word API
    fetch('https://random-word-api.herokuapp.com/word')
        .then((response) => {
            //were .json() to parse the response into json data
            return response.json();
        })
            .then((data) => {
                console.log(data[0]);
                startGame(data[0])
            })
};

function startGame(word) {
    randomWord = word;

    // now we have change our displayed to have _ for the length of our random word

    for(let i = 0; i < randomWord.length; i++){
        displayedWord[i] = "_";
    }
    // we will update our "game state"
    updateGameState();
};

function updateGameState() {
    secretWord.textContent = displayedWord.join(" ");

    hangMan.textContent = `Guesses left ${guesses} / ${maxGuesses}`
};