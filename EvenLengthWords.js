function printEvenLengthWords(str) {
    let words = str.split(' ');
    let evenLengthWords = words.filter(word => word.length % 2 === 0);
    console.log(evenLengthWords.join(' '));
}
let input = "Sun sets in the west";
printEvenLengthWords(input);