function isFibonacci(num) {
  let a = 0, b = 1, position = 1;
  while (b < num) {
    [a, b] = [b, a + b];
    position++;
  }
  console.log(b === num ? Fibonaccinumber : Not a Fibonaccinumber , closest position : ${position + 1}');
}

let num = prompt("Enter an integer:");
isFibonacci(num);