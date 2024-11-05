// Function to filter even numbers from an array
function even(arr) {
    const evenNumbers = []; // Initialize an empty array to store even numbers

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) { // Check if the number is even
            evenNumbers.push(arr[i]); // Add it to the new array
        }
    }

    return evenNumbers; // Return the new array with even numbers
}

// Hardcoded array of numbers
const originalArray = [2, 7, 4, 9, 10, 3];

// Call the even function and store the result
const evenArray = even(originalArray);

// Print both the original array and the new array to the console
console.log("Original Array:", originalArray);
console.log("Even Numbers Array:", evenArray);
