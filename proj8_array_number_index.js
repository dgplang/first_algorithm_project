const number = [3, 10, 18, 20, 35, 40, 45, 49, 35, 50, 49];

let index = 0

function findNumber(number) {
    return number == 49;
}

index = number.findIndex(findNumber)

console.log(`The index of the number is ${index}`)