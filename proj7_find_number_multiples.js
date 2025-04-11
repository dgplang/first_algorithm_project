function numMultiples(num) {
    let multiples = []
    let output = ""
    for (i = num - 1; i >= 1; i--) {
        if (num % i == 0) {
            multiples.push(i)
        }
    }

    if (multiples.length > 0) {
        if (multiples.length > 1) {
            return console.log(`The multiples of ${num} are ${multiples}`)
        } else {
            return console.log(`The multiple of ${num} is ${multiples}`)
            }
        } else {
            return console.log(`The number ${num} has no multiples`)
    }
}

numMultiples(45)