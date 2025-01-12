function math(a = 0, b = 0, Operator) {
  if (!isNaN(a + b)) {
    switch (Operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
    } 
  } return console.log("error")
}

console.log(math(10,20,"/"))