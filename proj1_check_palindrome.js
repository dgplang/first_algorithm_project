// A palindrome is a word or sentence that’s spelled the same way both forward and backward,
// ignoring punctuation, case, and spacing
// Note: It is necessary to remove all non-alphanumeric characters (punctuation, spaces and symbols)
// and turn everything lower case in order to check for palindromes.
// Strings can be passed with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

function palindrome(str) {

    let cleanedString = ""

    // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
    cleanedString = newStr.replace(/[\W_]/gi, '').toLowerCase()
    
    // Step 2. Convert string to array using spread operator, reverse the character order and rejoin to form 'new' string
    strToArray = [...cleanedString]
    
    c = 0
    reversedArray = []
    for (i = strToArray.length - 1; i >= 0; i--) {
        reversedArray[i] = strToArray[c]
        ++c
    }
    
    rejoinedStr = ''
    for (j = 0; j < reversedArray.length; j++) {
        rejoinedStr += reversedArray[j]
    }

    // Step 3. Check if cleanedString is strictly equal to rejoinedString and return a Boolean
    return cleanedString === rejoinedStr

}

// Example of palindrome
newStr = "A man, a plan, a canal. Panama"

console.log(palindrome(newStr))