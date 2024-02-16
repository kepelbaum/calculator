const display = document.querySelector('.display');
const ce = document.querySelector('.ce');
const c = document.querySelector('.c');
const back = document.querySelector('.back');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const plusminus = document.querySelector('.plusminus');
const blue = document.querySelector('.blue');
const decimal = document.querySelector('.decimal');
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
let firstargument = '0';
let secondargument = '';
let op = '';
let dtoggle = 0; /* 0 - decimal not active, 1 - decimal active to avoid double decimals*/
one.onclick = () => {
    firstargument == '0' ? firstargument = '1' : op == '' ? firstargument += '1' : secondargument == '0' ? secondargument = '1' : secondargument += '1';
    refresh();
}
two.onclick = () => {
    firstargument == '0' ? firstargument = '2' : op == '' ? firstargument += '2' : secondargument == '0' ? secondargument = '2' : secondargument += '2';
    refresh();
}
three.onclick = () => {
    firstargument == '0' ? firstargument = '3' : op == '' ? firstargument += '3' : secondargument == '0' ? secondargument = '3' : secondargument += '3';
    refresh();
}
four.onclick = () => {
    firstargument == '0' ? firstargument = '4' : op == '' ? firstargument += '4' : secondargument == '0' ? secondargument = '4' : secondargument += '4';
    refresh();
}
five.onclick = () => {
    firstargument == '0' ? firstargument = '5' : op == '' ? firstargument += '5' : secondargument == '0' ? secondargument = '5' : secondargument += '5';
    refresh();
}
six.onclick = () => {
    firstargument == '0' ? firstargument = '6' : op == '' ? firstargument += '6' : secondargument == '0' ? secondargument = '6' : secondargument += '6';
    refresh();
}
seven.onclick = () => {
    firstargument == '0' ? firstargument = '7' : op == '' ? firstargument += '7' : secondargument == '0' ? secondargument = '7' : secondargument += '7';
    refresh();
}
eight.onclick = () => {
    firstargument == '0' ? firstargument = '8' : op == '' ? firstargument += '8' : secondargument == '0' ? secondargument = '8' : secondargument += '8';
    refresh();
}
nine.onclick = () => {
    firstargument == '0' ? firstargument = '9' : op == '' ? firstargument += '9' : secondargument == '0' ? secondargument = '9' : secondargument += '9';
    refresh();
}
zero.onclick = () => {
    firstargument == '0' ? firstargument = '0' : op == '' ? firstargument += '0' : secondargument == '0' ? secondargument = '0' : secondargument += '0';
    refresh();
}

blue.onclick = () => {
    solveEquation();
}

plus.onclick = () => {
    solveCheck();
    op = '+';
    refresh();
}

minus.onclick = () => {
    solveCheck();
    op = '-';
    refresh();
}

multiply.onclick = () => {
    solveCheck();
    op = '*';
    refresh();
}

divide.onclick = () => {
    solveCheck();
    op = '/';
    refresh();
}

ce.onclick = () => {
    if (op == '') {
        fullClear();
    }
    else if (secondargument != '') {
        secondargument = '0';
        dtoggle = 0;
        refresh();
    }
}

plusminus.onclick = () => {
    if (secondargument == '') {
        let arr = firstargument.split('');
        if (arr[0] == '-') {
            arr.shift();
            firstargument = arr.join('');
        }
        else if (firstargument != '0') {
            arr.unshift('-');
            firstargument = arr.join('');
            }
    }
    else if (secondargument != '0') {
        let arr = secondargument.split('');
        if (arr[0] == '-') {
            arr.shift();
            secondargument = arr.join('');
        }
        else {
            arr.unshift('-');
            secondargument = arr.join('');
            }
    }
    refresh();
}

back.onclick = () => {
    if (op != '' && secondargument != '0' && secondargument != '') {
        if (secondargument.slice(secondargument.length - 1) == '.') {
            dtoggle = 0;
        }
        if (secondargument.length == 1) {
                secondargument = 0;
            }
        else {
            secondargument = secondargument.slice(0, secondargument.length - 1);
        }
     }
     else if (op == '') {
        if (firstargument.slice(firstargument.length - 1) == '.') {
            dtoggle = 0;
        }
        if (firstargument.length == 1) {
                firstargument = 0;
            }
        else {
            firstargument = firstargument.slice(0, firstargument.length - 1);
        }
     }
     refresh();
}

decimal.onclick = () => {
    if (dtoggle == 0) {
        dtoggle = 1;
        op == '' ? firstargument += '.' : secondargument += '.';
        refresh();
    }
}

c.onclick = () => {
    fullClear();
}

function refresh() {
    display.textContent = firstargument + " " + op + " " + secondargument;
}

function solveEquation() {
    let a = parseFloat(firstargument);
    let b = parseFloat(secondargument);
    if (op == '+') {
        firstargument = a + b;
    }
    else if (op == '-') {
        firstargument = a - b;
    }
    else if (op == '*') {
        firstargument = a * b;
    }
    else if (op == '/') {
        firstargument = Math.round(a / b * 10000) / 10000;
    }
    secondargument = '';
    op = '';
    firstargument = firstargument.toString();
    if (firstargument.split('').includes('.')) {
        dtoggle = 1;
    }
    else {
        dtoggle = 0;
    }
    refresh();
}

function solveCheck() {
    if (secondargument != '') {
        solveEquation();
    }
    else {
        dtoggle = 0;
    }
}

function fullClear() {
    dtoggle = 0;
    firstargument = '0';
    secondargument = '';
    op = '';
    refresh();
}