const arrayContainer = [3, 10, 18, 20, 35, 40, 45, 49, 35, 50, 49];

function findIndex(num, arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return console.log(`The index of the number ${num} is ${i}`)
        }
    }
    return console.log(`The number ${num} does not exist in this array => [${arr}]`)

}

findIndex(52, arrayContainer)