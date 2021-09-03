function add(num1, num2) {return num1 + num2}

function subtract(num1, num2) {return num1 - num2}

function multiply(num1, num2) {return num1 * num2}

function divide(num1, num2) {return (num1 / num2).toFixed(2)}


function operate(operator, num1, num2) {
  if (operator === "+") return add(num1, num2);
  if (operator === "–") return subtract(num1, num2);
  if (operator === "×") return multiply(num1, num2);
  if (operator === "÷") return divide(num1, num2);
}


function evaluateExpression() {
  const display = document.querySelector("#num-display");
  let expStr = display.textContent;
  let expArr = expStr.split(" ");

  if (expArr[1] === "÷" && (expArr[0] === "0" || expArr[2] === "0")) {
    return "You're dumb"
  }
  
  return operate(expArr[1], parseInt(expArr[0]), parseInt(expArr[2]));
}


function checkOperation() {
  let displayStr = display.textContent;
  let displayArr = displayStr.split(" ");

   return displayArr.some(operation => {
      operation === "÷" || operation === "–" || operation === "×" || operation === "+";
    });
}


function updateDisplay() {
  const display = document.querySelector("#num-display");
  const numButtons = document.querySelectorAll(".number");
  const operButtons = document.querySelectorAll(".operation");
  const clearButton = document.querySelector("#clear-button");
  const equalButton = document.querySelector("#equal-button");

  numButtons.forEach(numButton => {
    numButton.addEventListener("click", () => {
      display.textContent += numButton.textContent;
    });
  });


    operButtons.forEach(operButton => {

      

      operButton.addEventListener("click", () => {

        // while (checkOperation === false) {
        display.textContent += ` ${operButton.textContent} `;
        // }
      });
    });

  clearButton.addEventListener("click", () => {
    display.textContent = "";
  });

  equalButton.addEventListener("click", () => {
    display.textContent = evaluateExpression();
  });

}

  

updateDisplay();