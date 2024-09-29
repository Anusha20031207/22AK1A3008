function classifyNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) sum += i;
    }
    return sum > num ? "Abundant" : sum < num ? "Deficient" : "Perfect";
}

// Example usage:
console.log(`6 is a ${classifyNumber(6)} number.`);     // Perfect
console.log(`12 is a ${classifyNumber(12)} number.`);   // Abundant
console.log(`3 is a ${classifyNumber(3)} number.`);     // Deficient
