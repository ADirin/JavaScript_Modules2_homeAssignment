// Function to concatenate an array of strings
function concat(arr) {
    let result = ''; // Initialize an empty string to store the concatenated result
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]; // Concatenate each string to the result
    }
    return result; // Return the final concatenated string
}

// Hardcoded array of strings
const names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];

// Call the concat function and store the result
const concatenatedString = concat(names);

// Print the result to the console
console.log(`Concatenated String: ${concatenatedString}`);
