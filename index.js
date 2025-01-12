const firstNumber = +prompt("enter your number.");
const secondNumber = +prompt("emter your second number.");
const operator = prompt("enter sign");

if (isNaN(firstNumber + secondNumber)) {
  console.log("sth Wrong!");
} else {
  switch (operator) {
    case "+":
      console.log(firstNumber + secondNumber);
      break;
    case "-":
      console.log(firstNumber - secondNumber);
      break;
    case "*":
      console.log(firstNumber * secondNumber);
      break;
    case "/":
      console.log(firstNumber / secondNumber);
      break;
      default : console.log("sth is wrong2.")
  }
}
