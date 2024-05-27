const num1 = Math.round(Math.random() * 10);
const num2 = Math.round(Math.random() * 10);

const operators = ["+", "-", "*", "/"];
const randomIndex = Math.floor(Math.random() * operators.length);
const operator = operators[randomIndex];

let result;

if (operator == "+") {
  result = num1 + num2;
} else if (operator == "-") {
  result = num1 - num2;
} else if (operator == "*") {
  result = num1 * num2;
} else if (operator == "/") {
  result = num2 != 0 ? num1 / num2 : "division by zero not possible";
}

console.log(`${num1} ${operator} ${num2} = ${result}`);

// using switch
switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num2 != 0 ? num1 / num2 : "division by zero not possible";
    break;
}

console.log(`${num1} ${operator} ${num2} = ${result}`);
