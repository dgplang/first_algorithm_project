// Function to return the vowels count in any word

function vowelsCount(wordToProcess) {

    transformedWord = wordToProcess.toLowerCase()

    // String conversion to array using the spread operator (...)
    wordArr = [...transformedWord]
    vowelsArr = []
    let counter = 0

    for (i = 0; i < wordArr.length; i++) {
        if (wordArr[i] === "a" || wordArr[i] === "e" || wordArr[i] === "i" || wordArr[i] === "o" || wordArr[i] === "u") {
            vowelsArr[counter] = wordArr[i]
            counter++
        }
    }

    return console.log(`The word, ${transformedWord}, has ${counter} vowels as follows: ${vowelsArr}`)

}

// Calling the function

vowelsCount("Digital Computer")