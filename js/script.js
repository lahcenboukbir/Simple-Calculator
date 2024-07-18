// Get the display element by its ID
let display = document.getElementById("display");

// Initialize variables for storing the current input, operator, and first operand
let currentInput = "";
let operator = "";
let firstOperand = null;

// Function to append a number to the current input
function appendNumber(number) {
    // Concatenate the number to the current input
    currentInput += number;
    // Update the display with the current input
    display.textContent = currentInput;
}

// Function to perform an operation
function performOperation(op) {
    // If there's no current input, do nothing
    if (currentInput === "") return;

    // If there's no first operand yet, set it and the operator
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        operator = op;
        // Clear the current input and display
        currentInput = "";
        display.textContent = "";
    } else {
        // If there's already a first operand, calculate the result first
        calculateResult();
        // Set the new operator
        operator = op;
    }
}

// Function to calculate the result of the operation
function calculateResult() {
    // If there's no first operand or current input, do nothing
    if (firstOperand === null || currentInput === "") return;

    // Parse the current input as the second operand
    let secondOperand = parseFloat(currentInput);
    let result;

    // Perform the calculation based on the operator
    switch (operator) {
        case "+":
            result = firstOperand + secondOperand;
            break;
        case "-":
            result = firstOperand - secondOperand;
            break;
        case "*":
            result = firstOperand * secondOperand;
            break;
        case "/":
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    // Display the result and set it as the new current input
    display.textContent = result;
    currentInput = result;
    // Reset the first operand and operator
    firstOperand = null;
    operator = "";
}

// Function to clear the display and reset all variables
function clearDisplay() {
    currentInput = "";
    operator = "";
    firstOperand = null;
    display.textContent = "";
}
