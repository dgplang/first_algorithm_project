function mergeSortFxn(arr1, arr2, order) {
    
    merged = arr1.concat(arr2);

    console.log(`The first array passed is ${arr1} and the second array passed is ${arr2}`)

    console.log(`The newly created array after merging is ${merged}`)

    direction = order.toLowerCase()

    if (direction === "asc") {
        merged.sort(function(a, b) {return a - b});
        console.log(`The sorted merged array in ascending order is ${merged}`)
    } else if (direction === "desc") {
        merged.sort(function(a, b) {return b - a});
        console.log(`The sorted merged array in descending order is ${merged}`)
    }
}

let arrPassed1 = [2, 5, 8, 23, 63, 1, 3]
let arrPassed2 = [3, 4, 75, 35, 20]

mergeSortFxn(arrPassed1, arrPassed2, "ASC")