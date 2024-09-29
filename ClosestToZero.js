function findClosestToZero(arr) {
    let closestSum = Infinity;  
    let num1 = 0, num2 = 0;   
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if (Math.abs(sum) < Math.abs(closestSum)) {
                closestSum = sum;
                num1 = arr[i];
                num2 = arr[j];
            }
        }
    }
    console.log(`${num1} + ${num2} = ${closestSum}`);
}
// Example input array
let arr = [-1, 2, 3, -4]; // Replace this with your own array
findClosestToZero(arr);