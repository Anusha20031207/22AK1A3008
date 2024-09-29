function countCharacterOccurrences(str) {
    let charCount = {};
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } 
        else {
            charCount[char] = 1;
        }
    }
    return charCount;
}
let userInput = "raja";
let result = countCharacterOccurrences(userInput);
console.log(result);