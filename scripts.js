
let displayValue = '';
const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');


buttons.forEach(button => {
    button.addEventListener('click', () => {
            displayValue += button.textContent;
            updateDisplay();
            console.log("Number pressed");
    });
});




function operate(num1, operator, num2)
{
    if (!operator) return '0';
    if (operator==='add') return add(num1,num2);
    if (operator==='subtract') return subtract(num1,num2);
    if (operator==='divide') return divide(num1,num2);
    if (operator==='multiply') return multiply(num1,num2);
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