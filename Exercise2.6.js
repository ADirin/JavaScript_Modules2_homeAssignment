// Function to roll a dice and return a random number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Main program to keep rolling the dice until a 6 is rolled
function rollUntilSix() {
    const rolls = []; // Array to store the results of each roll
    let roll;

    do {
        roll = rollDice(); // Roll the dice
        rolls.push(roll); // Add the roll result to the array
        console.log(`Rolled: ${roll}`); // Output the result to the console
    } while (roll !== 6); // Continue until a 6 is rolled

    console.log("Final rolls:", rolls); // Print all rolls at the end
}

// Start the dice rolling process
rollUntilSix();
