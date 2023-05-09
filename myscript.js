const themeSlider = document.querySelector('input');
let currentTheme = themeSlider.value;

const root = document.documentElement;

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

function changeTextColors() {
    // header, screen, numbers
    // del, reset, equals
}

// add
// subtract
// multiply
// divide

// variables:  num1 operator num2
// also: displayValue

// function operate(num1 operator num2)

// function reset()

// function updateDisplay() with solution

// hardest part is store all the values and call the operate() function with them

// be able to string together several operations (12 + 7 - 5 * 3 = 42) => 
// calculator should first evaluate the first pair of numbers (12 + 7), second display the result (19), and last use the result (19) as the first number in the new calculation along with the next operator (-)

// round answers with long decimals so they don't overflow the screen

//pressing = before entering all the numbers or an operator could cause problems!

// pressing clear/reset should wipe out any existing data

// display an error message if the user tries to divide by 0

// don't allow more than one decimal (12.3.56..5)

// backspace/delete for undoing a number

// double check / support - check MDN event.preventDefault