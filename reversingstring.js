function reverseWords(sentence) {
    // Split the sentence into an array of words
    let words = sentence.split(' ');
    
    // Reverse each word in the array
    let reversedWords = words.map(word => word.split('').reverse().join(''));
    
    // Join the reversed words back into a sentence
    let reversedSentence = reversedWords.join(' ');
    
    return reversedSentence;
}

// Example usage
let sentence = "Hello World";
let result = reverseWords(sentence);
console.log(result); // Output: "olleH dlroW"