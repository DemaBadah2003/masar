// Function to calculate the sum of numbers in the array
function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Function to calculate the average of numbers in the array
function calculateAverage(numbers) {
  const sum = calculateSum(numbers);
  return sum / numbers.length;
}

// Function to find the maximum value in the array
function calculateMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// Function to find the minimum value in the array
function calculateMin(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

// List of numbers to test the functions
const numbers = [12, 45, 7, 23, 56, 3, 89, 34];

// Calling the functions and displaying results
console.log("Numbers:", numbers);
console.log("Sum:", calculateSum(numbers));
console.log("Average:", calculateAverage(numbers));
console.log("Max:", calculateMax(numbers));
console.log("Min:", calculateMin(numbers));