
let user = prompt('Inserisci una parola');
// Check if the input is a palindrome
if (isPalindrome(user)) {
    alert('La parola ' + user + ' è palindroma');
} else {
    alert('La parola ' + user + ' non è palindroma');
}

let userChoice = prompt('Scegli pari o dispari');
let number = parseInt(prompt('Inserisci un numero da 1 a 5'));
evenOdd(userChoice, number);

/**
 * Checks if the given input is a palindrome.
 *
 * @param {any} input - The input to be checked.
 * @return {boolean} Returns true if the input is a palindrome, false otherwise.
 */
function isPalindrome(input) {
    // input validation
    if (input == null || input == undefined || input == '') {
        alert('Scelta non valida');
        user = prompt('Inserisci una parola');
        return isPalindrome(user);
    }

    for (let i = 0; i < input.length; i++) {
        if (input[i] != input[input.length - 1 - i]) {
            return false;
        }
    }
    return true
}

/**
 * Determines if the sum of a number and a random CPU number is even or odd.
 *
 * @param {string} input - The user's choice of 'pari' or 'dispari'.
 * @param {number} number - The number to be added to the CPU number.
 * @return {undefined} - This function does not return a value.
 */
function evenOdd(input, number) {
    // input validation
    if (input.toLowerCase() != 'pari' && input.toLowerCase() != 'dispari') {
        alert('Scelta non valida');
        return evenOdd(prompt('Scegli pari o dispari'), number);
    }
    if (number < 1 || number > 5 || isNaN(number)) {
        alert('Numero non valido');
        return evenOdd(input, prompt('Inserisci un numero da 1 a 5'));
    }

    const CPU = Math.floor(Math.random() * 5) + 1;
    const summ = sum(number, CPU);
    alert("Il numero scelto dal computer è " + CPU);
    alert('La somma dei due numeri è ' + summ);
    if (input.toLowerCase() == 'pari') {
        if (summ % 2 == 0) {
            alert('Hai vinto');
        } else {
            alert('Hai perso');
        }
    } else {
        if (summ % 2 == 0) {
            alert('Hai perso');
        } else {
            alert('Hai vinto');
        }       
    }            
}


/**
 * Adds two numbers together.
 *
 * @param {number} a - The first number to be added.
 * @param {number} b - The second number to be added.
 * @return {number} The sum of the two numbers.
 */
function sum(a, b) {
    return a+b;
}