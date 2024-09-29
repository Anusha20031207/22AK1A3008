function isArmstrong(num) {
  let sum = 0, temp = num;
  while (temp > 0) {
    sum += (temp % 10) ** num.toString().length;
    temp = Math.floor(temp / 10);
  }
  console.log(sum === num ? "Armstrong number" : "It's not an Armstrong number");
}

isArmstrong(153);  // Armstrong number
isArmstrong(123);  // It's not an Armstrong number