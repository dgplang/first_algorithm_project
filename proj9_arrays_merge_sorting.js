function sortFn(numArr, ord) {
    if (order === "asc") {
        do {
            swapped = false
            for (i = 0; i < numArr.length - 1; i++) {
                if (numArr[i] > numArr[i + 1]) {
                    temp = numArr[i]
                    numArr[i] = numArr[i + 1]
                    numArr[i + 1] = temp
                    swapped = true
                }
            }    
        } while (swapped)
            console.log(`The merged & sorted array in ascending order is ${numArr}`)
    } else if ( order === "desc") {
        do {
            swapped = false
            for (i = 0; i < numArr.length - 1; i++) {
                if (numArr[i] < numArr[i + 1]) {
                    temp = numArr[i]
                    numArr[i] = numArr[i + 1]
                    numArr[i + 1] = temp
                    swapped = true
                }
            }    
        } while (swapped)
            console.log(`The merged & sorted array in descending order is ${numArr}`)
    }
}

function mergeSortFxn(arr1, arr2, order1) {

    order = order1.toLowerCase()
    
    merged = [...arr1, ...arr2];

    console.log(`The first array passed is ${arr1} and the second array passed is ${arr2}`)

    console.log(`The newly created array after merging is ${merged}`)

    direction = order.toLowerCase()

    sortFn(merged, order)

}

let arrPassed1 = [2, 5, 8, 23, 63, 1, 3]
let arrPassed2 = [3, 4, 75, 35, 20]

mergeSortFxn(arrPassed1, arrPassed2, "desc")