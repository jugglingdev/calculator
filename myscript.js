// Themes

const root = document.documentElement;
const themeSlider = document.querySelector('input');

themeSlider.onchange = (e) => changeTheme(e.target.value);

function changeTheme(value) {
    changeBackgroundColors(value);
    changeKeyColors(value);
    changeTextColors(value);
}

function changeBackgroundColors(value) {
    if (value == '1') {
        root.style.setProperty('--mainBackground', 'hsl(222, 26%, 31%)');
        root.style.setProperty('--toggleBackground', 'hsl(223, 31%, 20%)');
        root.style.setProperty('--screenBackground', 'hsl(224, 36%, 15%)');
        root.style.setProperty('--keypadBackground', 'hsl(223, 31%, 20%)');
    } else if (value == '2') {
        root.style.setProperty('--mainBackground', 'hsl(0, 0%, 90%)');
        root.style.setProperty('--toggleBackground', 'hsl(0, 5%, 81%)');
        root.style.setProperty('--screenBackground', 'hsl(0, 0%, 93%)');
        root.style.setProperty('--keypadBackground', 'hsl(0, 5%, 81%)');
    } else {
        root.style.setProperty('--mainBackground', 'hsl(268, 75%, 9%)');
        root.style.setProperty('--toggleBackground', 'hsl(268, 71%, 12%)');
        root.style.setProperty('--screenBackground', 'hsl(268, 71%, 12%)');
        root.style.setProperty('--keypadBackground', 'hsl(268, 71%, 12%)');
    }
}

function changeKeyColors(value) {
    if (value == '1') {
        root.style.setProperty('--toggle', 'hsl(6, 63%, 50%)');
        root.style.setProperty('--delResBackground', 'hsl(225, 21%, 49%)');
        root.style.setProperty('--delResShadow', 'hsl(224, 28%, 35%)');
        root.style.setProperty('--equalsBackground', 'hsl(6, 63%, 50%)');
        root.style.setProperty('--equalsShadow', 'hsl(6, 70%, 34%)');
        root.style.setProperty('--numsBackground', 'hsl(30, 25%, 89%)');
        root.style.setProperty('--numsShadow', 'hsl(28, 16%, 65%)');
    } else if (value == '2') {
        root.style.setProperty('--toggle', 'hsl(25, 98%, 40%)');
        root.style.setProperty('--delResBackground', 'hsl(185, 42%, 37%)');
        root.style.setProperty('--delResShadow', 'hsl(185, 58%, 25%)');
        root.style.setProperty('--equalsBackground', 'hsl(25, 98%, 40%)');
        root.style.setProperty('--equalsShadow', 'hsl(25, 99%, 27%)');
        root.style.setProperty('--numsBackground', 'hsl(45, 7%, 89%)');
        root.style.setProperty('--numsShadow', 'hsl(35, 11%, 61%)');
    } else {
        root.style.setProperty('--toggle', 'hsl(176, 100%, 44%)');
        root.style.setProperty('--delResBackground', 'hsl(281, 89%, 26%)');
        root.style.setProperty('--delResShadow', 'hsl(285, 91%, 52%)');
        root.style.setProperty('--equalsBackground', 'hsl(176, 100%, 44%)');
        root.style.setProperty('--equalsShadow', 'hsl(177, 92%, 70%)');
        root.style.setProperty('--numsBackground', 'hsl(268, 47%, 21%)');
        root.style.setProperty('--numsShadow', 'hsl(290, 70%, 36%)');
    }
}

function changeTextColors(value) {
    if (value == '1') {
        root.style.setProperty('--headerText', 'hsl(0, 0%, 100%)');
        root.style.setProperty('--delResText', 'hsl(0, 0%, 100%)');
        root.style.setProperty('--equalsText', 'hsl(0, 0%, 100%)');
        root.style.setProperty('--numsText', 'hsl(221, 14%, 31%)');
    } else if (value == '2') {
        root.style.setProperty('--headerText', 'hsl(60, 10%, 19%)');
        root.style.setProperty('--delResText', 'hsl(0, 0%, 100%)');
        root.style.setProperty('--equalsText', 'hsl(0, 0%, 100%)');
        root.style.setProperty('--numsText', 'hsl(60, 10%, 19%)');
    } else {
        root.style.setProperty('--headerText', 'hsl(52, 100%, 62%)');
        root.style.setProperty('--delResText', 'hsl(0, 0%, 100%)');
        root.style.setProperty('--equalsText', 'hsl(198, 20%, 13%)');
        root.style.setProperty('--numsText', 'hsl(52, 100%, 62%)');
    }
}

// Calculator

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');

const point = document.querySelector('.point');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const times = document.querySelector('.times');
const dividedBy = document.querySelector('.divided-by');

const equals = document.querySelector('.equals');
const backspace = document.querySelector('.delete');
const clear = document.querySelector('.reset');

let screen = document.querySelector('.display');

let num = [];
let displayValue;
let num1;
let num2;
let operator;
let total;

one.onclick = () => setNum('1');
two.onclick = () => setNum('2');
three.onclick = () => setNum('3');
four.onclick = () => setNum('4');
five.onclick = () => setNum('5');
six.onclick = () => setNum('6');
seven.onclick = () => setNum('7');
eight.onclick = () => setNum('8');
nine.onclick = () => setNum('9');
zero.onclick = () => setNum('0');
point.onclick = () => setNum('.'); 

plus.onclick = () => setOperator('+');
minus.onclick = () => setOperator('-');
times.onclick = () => setOperator('*');
dividedBy.onclick = () => setOperator('/');
equals.onclick = () => calculate();
backspace.onclick = () => del();
clear.onclick = () => reset();

function setNum(buttonValue) {
    num.push(buttonValue);
    updateDisplayValue();
}

function updateDisplayValue() {
    displayValue = num.join('');
    displayValue = parseFloat(displayValue);
    screen.textContent = displayValue;
}

function setOperator(buttonValue) {
    operator = buttonValue;
    setNum1();
}

function setNum1() {
    num1 = num.join('');
    num1 = parseFloat(num1);
    clearNum();
}

function clearNum() {
    num = [];
}

function calculate() {
    total = num1 + operator + num1;
    displayResult();
}

function displayResult() {
    
}

// Add
const add = function(num1, num2) {
	return parseInt(num1 + num2);
};

// Subtract
const subtract = function(num1, num2) {
	return parseInt(num1 - num2);
};

// Multiply
const multiply = function(array) {
    let answer = 1;
    for (let item in array) {
      answer *= array[item];
    }
    return answer;
  };

function del() {
    num.pop();
}

function reset() {
    num = [];
    num1 = '';
    num2 = '';
    operator = '';
    total = '';
    displayValue = '';
}

// function operate(num1 operator num2)

// function reset()

// function updateDisplay() with solution

// hardest part is store all the values and call the operate() function with them

// be able to string together several operations (12 + 7 - 5 * 3 = 42) => 
// calculator should first evaluate the first pair of numbers (12 + 7), second display the result (19), and last use the result (19) as the first number in the new calculation along with the next operator (-)

// round answers with long decimals so they don't overflow the screen

//pressing = before entering all the numbers or an operator could cause problems!

// display an error message if the user tries to divide by 0

// don't allow more than one decimal (12.3.56..5)

// double check / support - check MDN event.preventDefault

