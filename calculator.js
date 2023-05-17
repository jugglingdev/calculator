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

let screenValue = document.querySelector('.screen-value');
    screenValue.textContent = '0';

let num = [];
let total;
let operator;

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
    disablePoint(num);
    updateScreenValue(num);
    // exceptions();
}

function disablePoint(num) {
    const decimal = '.';
    if (num.includes(decimal)) {
        point.onclick = null;
    }
    return;
}

function updateScreenValue(num) {
    num = num.join('');
    screenValue.textContent = num;
}

// function setOperator(buttonValue) {
//     operator = buttonValue;
//     updateTotal();
// }

// function updateTotal() {
//     total = parseFloat(num);
//     clearNum();
// }

// function clearNum() {
//     num = [];
// }

// function calculate() {
//     add();
//     subtract();
//     multiply();
//     divide();
// }

// function add() {
//     num = parseFloat(num);
//     if (operator == '+') {  
//         total += num;
//         displayTotal(total);
//     };
// }

// function subtract() {
//     num = parseFloat(num);
//     if (operator == '-') {  
//         total -= num;
//         displayTotal(total);
//     }
//     return;
// }

// function multiply() {
//     num = parseFloat(num);
//     if (operator == '*') {  
//         total *= num;
//         displayTotal(total);
//     }
//     return;
// }

// function divide() {
//     num = parseFloat(num);
//     if (operator == '/') {  
//         total /= num;
//         displayTotal(total);
//     }
//     return;
// }

// function displayTotal(total) {
//     screenValue.textContent = total;
// }

// function del() {
//     num.pop();
//     screenValue.textContent = num;
// }

// function reset() {
//     num = [];
//     operator = '';
//     total = '';
//     screenValue.textContent = '';
// }






// function exceptions() {
//     const decimals = ['.', '.'];
//     try {
//         if (operator == '/' && num == '0') throw 'Error';
//         if (decimals.every(i => screenValue.textContent.includes(i))) throw 'Error';
//         if (screenValue.textContent.length > 11) throw 'Overflow';
//     }
//     catch (err) {
//         screenValue.textContent = err;
//     }
// }
