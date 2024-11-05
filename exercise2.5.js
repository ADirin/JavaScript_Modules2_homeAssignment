const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];
let enteredNumbers = new Set();

function askForNumber() {
    rl.question('Enter a number (or a previously entered number to stop): ', (input) => {
        const number = parseFloat(input); // Parse input as a float

        if (isNaN(number)) {
            console.log("That's not a valid number. Please try again.");
            askForNumber(); // Ask for input again
            return;
        }

        if (enteredNumbers.has(number)) {
            console.log(`The number ${number} has already been given.`);
            numbers.sort((a, b) => a - b); // Sort the numbers in ascending order
            console.log('Given numbers in ascending order:', numbers);
            rl.close();
        } else {
            numbers.push(number); // Add the new number to the array
            enteredNumbers.add(number); // Add to the set of entered numbers
            askForNumber(); // Continue asking for numbers
        }
    });
}

askForNumber(); // Start the input loop
