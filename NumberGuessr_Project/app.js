// Game variables

let min =1,
    max = 10,
    winningNumber = 2,
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

// Add listener for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    // Validation of input.value
    if(isNaN(guess)|| guess < min || guess > max) {
        displayMessage(`Proszę wprowadź liczbę pomiędzy ${min} i ${max}`, 'red');
    }

    if(guess === winningNumber) {
        guessInput.diabled = true;
        guessInput.style.backgroundColor = "green";
        displayMessage(`Liczba ${guess} to poprawna odpowiedź - BRAWOOOO!`, 'green')
    } else {
        guessLeft -=1;

        if(guessLeft === 0) {
            guessInput.diabled = true;
            guessInput.style.backgroundColor = "red";
            displayMessage(`Gra skończona. Wygrywająca liczba to ${winningNumber} - PRZEGRAŁEŚ`, "red");
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