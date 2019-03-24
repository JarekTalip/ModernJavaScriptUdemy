// Game variables

let min =1,
    max = 10,
    winningNumber = getWinningNum(min, max),
    guessLeft =3;

// Create UI elements
const   game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');

// Assigng UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener
game.addEventListener('mousedown', (e) => {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
} );

// Add listener for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    // Validation of input.value
    if(isNaN(guess)|| guess < min || guess > max) {
        displayMessage(`Proszę wprowadź liczbę pomiędzy ${min} i ${max}`, 'red');
        return false;
    }

    if(guess === winningNumber) {
        
        gameOver(true, `Liczba ${guess} to poprawna odpowiedź - BRAWOOOO!`)
        
    } else {
        guessLeft -=1;

        if(guessLeft === 0) {
            
            gameOver(false, `Gra skończona. Wygrywająca liczba to ${winningNumber} - SPRÓBUJ JESZCZE RAZ.`);
        } 
        else {
            guessInput.diabled = true;
            guessInput.style.backgroundColor = "orange";

            if(guess < winningNumber) {
                displayMessage(`Liczba ${guess} jest mniejsza od wygrywającej - - masz jeszcze ${guessLeft} próby.`, 'orange');
            }
            else {
                displayMessage(`Liczba ${guess} jest większa od wygrywającej - masz jeszcze ${guessLeft} próby.`, 'orange');
            }
            
        }
        

    }

});

//displayMessage function
function displayMessage (msg, color) {
    message.style.color = color;
    message.style.fontWeight = 700;
    message.textContent = msg;
}

// Game over function
function gameOver (ifWon, msg) {
    let color;

    ifWon === true ? color = 'green' : color = 'red';

    guessInput.diabled = true;
    guessInput.style.backgroundColor = color;
    displayMessage(msg, color);

    //Play again
    guessBtn.value = "Zagraj jeszcze raz!"
    guessBtn.className += "play-again";
}

// getWinningNum function
function getWinningNum(min, max) {
    return Math.floor((Math.random() * (max-min +1))+min);
}