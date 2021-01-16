var fs = require('fs');

// const input = fs.readFileSync('input.txt').toString().split('\n');
const input = fs.readFileSync('input.test.txt').toString().split('\n');

let grandTotal = 0;

for (let i = 0; i < input.length; i++) {
    input[i] = input[i].replace(/\s/g, '');
    let prevNum = 0;
    for (let j = 0; j < input[i].length; j++) {
        input[i][j]
    }
}

// Check next 3.
//If Num,Oper,Num => do math and set PrevNum
// 

function isNum(sym) {
    return parseInt(sym) !== NaN;
}

function isParenStart(sym) {
    return sym === '(';
}

function isParenEnd(sym) {
    return sym === ')';
}

function operate(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2
    }
    return num1 * num2;
}