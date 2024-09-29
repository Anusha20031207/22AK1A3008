function calculateLuckyNumber(dob) {
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
      if (!isNaN(parseInt(dob[i]))) {
          sum += parseInt(dob[i]);
      }
  }
  while (sum > 9) {
      sum = sum.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
  }
  return sum;
}

// Example usage:
let dob = "07/12/2003";
console.log("Lucky number is: " + calculateLuckyNumber(dob.replace(/\//g, '')));