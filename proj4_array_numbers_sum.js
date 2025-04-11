// Function to calculate the sum of numbers in an array
function arraySum(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

// A sample array to be processed by the function above
anyArr = [4, 20, 300, 100, 20, 400, 100, 200, 8, 120]

// To screen display the result
console.log(`The sum of the array elements ${anyArr} is ${arraySum(anyArr)}`)