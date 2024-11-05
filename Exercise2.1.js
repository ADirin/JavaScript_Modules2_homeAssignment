const readline = require('readline');

// Create an interface to read from standard input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create an array to store numbers
const numbers = [];

// Function to prompt the user for numbers
function askForNumber(i) {
  if (i < 5) {
    rl.question(`Please enter number ${i + 1}: `, (num) => {
      numbers.push(num); // Store input number in array
      askForNumber(i + 1); // Recursively ask for the next number
    });
  } else {
    rl.close(); // Close the readline interface when done
    console.log("Numbers in reverse order:", numbers.reverse().join(", "));
  }
}

// Start prompting the user
askForNumber(0);
