
let displayValue = '';
const screen = document.getElementById('screen');
const enter = document.getElementById('enter');
const clear = document.getElementById('clear');


const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

let num1 = 0;
let num2 = 0;
let currentOperation = '';

numbers.forEach(number => {
    number.addEventListener('click', () => {
            displayValue += number.textContent;
            updateDisplay();
            console.log("Number pressed");
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
            num1 = parseInt(displayValue);
            currentOperation = operator.textContent;
            displayValue = '';
            updateDisplay();
            console.log("Operator pressed");
    });
});

clear.addEventListener('click', () =>
    {
        displayValue = '';
        updateDisplay();
    });
    
enter.addEventListener('click', () =>
{
    num2 = parseInt(displayValue);
    let result = operate(num1, currentOperation, num2);
    displayValue = result;
    updateDisplay();
});

function calculate(equation)
{
    console.log('Recieved: ' + equation);
    equation = equation + '';
    let arr = equation.split("x");

    if (arr.length > 1) {
        //multiplaction left in the string
        multiply(calculate(parseInt(arr[0])),calculate(parseInt(arr[1])));
    }
    arr = equation.split('/',2);
    if (arr.length > 1) {
        divide(calculate(arr[0]), calculate(arr[1]));
    }
    arr = equation.split('+',2);
    if (arr.length > 1) {
        add(calculate(arr[0]), calculate(arr[1]));
    }
    arr = equation.split('-',2);
    if (arr.length > 1) {
        subtract(calculate(arr[0]), calculate(arr[1]));
    }

    return parseInt(arr[0]);
}

function operate(num1, operator, num2)
{
    if (!operator) return '0';
    if (operator==='+') return add(num1,num2);
    if (operator==='-') return subtract(num1,num2);
    if (operator==='/') return divide(num1,num2);
    if (operator==='x') return multiply(num1,num2);
    return 'ERROR';
}

function add(num1, num2){
    return num1 + num2;
}
function subtract (num1, num2)
{
    return num1 - num2;
}
function divide(num1, num2)
{
    return num1 / num2;
}
function multiply(num1, num2)
{
    return num1 * num2;
}

function updateDisplay()
{
    screen.textContent = displayValue; 
}