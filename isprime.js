function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}
function isPalindrome(num) {
    let str = num.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

function nextPalindrome(num) {
    while (true) {
        num++;
        if (isPalindrome(num)) {
            return num;
        }
    }
}

function checkPrimeAndPrintNextPalindrome(num) {
    if (isPrime(num)) {
        console.log(nextPalindrome(num));
    } else {
        console.log("not prime");
    }
}

// Example usage
let number = 13;
checkPrimeAndPrintNextPalindrome(number); // Output: 22

number = 15;
checkPrimeAndPrintNextPalindrome(number); // Output: not prime