// Function to roll a dice and return a random number between 1 and the specified number of sides
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

// Main program to keep rolling the dice until the maximum number is rolled
function rollUntilMax(sides) {
    const rolls = []; // Array to store the results of each roll
    let roll;

    do {
        roll = rollDice(sides); // Roll the dice
        rolls.push(roll); // Add the roll result to the array
        console.log(`Rolled: ${roll}`); // Output the result to the console
    } while (roll !== sides); // Continue until the maximum number is rolled

    console.log("Final rolls:", rolls); // Print all rolls at the end
}

// Function to prompt the user for the number of sides on the dice
function promptForSides() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the number of sides on the dice: ', (answer) => {
        const sides = parseInt(answer); // Convert input to an integer
        if (isNaN(sides) || sides < 1) {
            console.log("Please enter a valid number of sides.");
        } else {
            rollUntilMax(sides); // Start rolling the dice
        }
        rl.close(); // Close the readline interface
    });
}

// Start the program by prompting the user for the number of sides
promptForSides();
