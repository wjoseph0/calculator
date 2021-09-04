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
    return "Can't divide by zero"
  }
  
  return operate(expArr[1], parseInt(expArr[0]), parseInt(expArr[2]));
}


function checkForOperation() {
  const display = document.querySelector("#num-display");
  let displayStr = display.textContent;
  let displayArr = displayStr.split(/[ ]+/).filter(Boolean);
  console.log(displayArr);
  let searchForOperation = () => {
    if (displayArr.includes("÷")) return true;
    if (displayArr.includes("×")) return true;
    if (displayArr.includes("–")) return true;
    if (displayArr.includes("+")) return true;
    return false;
  }

  return searchForOperation();
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
      let displayStr = display.textContent;
      let displayArr = displayStr.split(/[ ]+/).filter(Boolean);
      if (checkForOperation() === true) {
        if (displayArr.length === 3 && displayArr[2] !== "" && displayArr[0] !== "") {
          console.log(displayArr.length);
          display.textContent = `${evaluateExpression()} ${operButton.textContent} `;
        }
      }

      else if (checkForOperation() === false && display.textContent !== "") {
        display.textContent += ` ${operButton.textContent} `;
      }
    });
  });
    

  clearButton.addEventListener("click", () => {
    display.textContent = "";
  });


  equalButton.addEventListener("click", () => {
    let displayStr = display.textContent;
    let displayArr = displayStr.split(/[ ]+/).filter(Boolean);
    console.log(displayArr);

    if (displayArr.length === 3) display.textContent = evaluateExpression();
  });

}

  

updateDisplay();