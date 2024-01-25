/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}
//don't add custom parameters in parenthesis for something called in an event
function addNumbers() {
    let num1 = parseFloat(document.querySelector("#add1").value);
    /* .value is for input fields and will get me what is inputted into the field*/
    let num2 = parseFloat(document.querySelector("#add2").value);
    let sum = add(num1, num2)

    document.getElementById("sum").value = sum;
}
/* the click indicates when to call the function for the button addNumbers */
document.getElementById("addNumbers").addEventListener("click", addNumbers);
//no parenthesis because I don't want the function called right away, just when there is a click
/* Function Expression (function assigned to a variable) - Subtract Numbers */

const subtract = function(number1, number2) {
    return number1 - number2;
}
const subtractNumber = function() {
    let num1 = parseFloat(document.querySelector("#subtract1").value);
    let num2 = parseFloat(document.querySelector("#subtract2").value);
    let difference = subtract(num1, num2);

    document.getElementById("difference").value = difference;
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumber);

/* Arrow Function - Multiply Numbers*/

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let num1 = parseFloat(document.querySelector("#factor1").value);
    let num2 = parseFloat(document.querySelector("#factor2").value);
    let product = multiply(num1, num2);

    document.getElementById("product").value = product;
 }

 document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2){
    return number1/number2;
}

function divideNumbers() {
    let num1 = parseFloat(document.querySelector("#dividend").value);
    let num2 = parseFloat(document.querySelector("#divisor").value);
    let quotient = divide(num1, num2)

    document.getElementById("quotient").value = quotient;
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
function getTotal() {
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    if (document.getElementById("member").checked) {
        subtotal = subtotal - (subtotal * 0.20);
    }

    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;    
}
document.getElementById("getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").innerHTML = numberArray;
/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numberArray.filter(number => number % 2 === 1);
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numberArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numberArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
const multipliedArray = document.querySelector("#multiplied").innerHTML = numberArray.map((number) => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = multipliedArray.reduce((sum, number) => sum + number);