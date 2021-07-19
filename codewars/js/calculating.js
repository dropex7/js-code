let firstNumber, operation;
function solution(a, b, c) {
  console.log(a, b, c);
  switch (c) {
    case "plus":
      firstNumber = undefined;
      return a + b;
    case "minus":
      firstNumber = undefined;
      return a - b;
    case "times":
      firstNumber = undefined;
      return a * b;
    case "divided":
      firstNumber = undefined;
      return Math.floor(a / b);
  }
}

function zero() {
  if (firstNumber != undefined) return solution(0, firstNumber, operation);
  firstNumber = 0;
}
function one() {
  if (firstNumber != undefined) return solution(1, firstNumber, operation);
  firstNumber = 1;
}
function two() {
  if (firstNumber != undefined) return solution(2, firstNumber, operation);
  firstNumber = 2;
}
function three() {
  if (firstNumber != undefined) return solution(3, firstNumber, operation);
  firstNumber = 3;
}
function four() {
  if (firstNumber != undefined) return solution(4, firstNumber, operation);
  firstNumber = 4;
}
function five() {
  if (firstNumber != undefined) return solution(5, firstNumber, operation);
  firstNumber = 5;
}
function six() {
  if (firstNumber != undefined) return solution(6, firstNumber, operation);
  firstNumber = 6;
}
function seven() {
  if (firstNumber != undefined) return solution(7, firstNumber, operation);
  firstNumber = 7;
}
function eight() {
  if (firstNumber != undefined) return solution(8, firstNumber, operation);
  firstNumber = 8;
}
function nine() {
  if (firstNumber != undefined) return solution(9, firstNumber, operation);
  firstNumber = 9;
}

function plus() {
  operation = "plus";
}
function minus() {
  operation = "minus";
}
function times() {
  operation = "times";
}
function dividedBy() {
  operation = "divided";
}

let resl = eight(minus(three()));
console.log(resl);
