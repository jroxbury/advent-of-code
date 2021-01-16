var fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split('\n');
// const input = fs.readFileSync('input.test.txt').toString().split('\n');

let lastInstruction = input.length - 1;

let acc = 0;
let indexes = {};

// Check if already seen this index.
function haveSeenIndex(index) {
    if (indexes[index]) {
        return true;
    }
    indexes[index] = true;
    return false;
}

function nextMove(index, newInput) {

    if (haveSeenIndex(index)) {
        return;
    }

    if (newInput[index].includes('nop')) {
        if (index === lastInstruction) {
            console.log('LAST INSTRUCTION');
            console.log(acc);
            return;
        }
        nextMove(index += 1, newInput)
    }
    if (newInput[index].includes('acc')) {

        if (newInput[index].includes('+')) {
            const amount = newInput[index].split(/\+/)[1];
            acc += +amount;
            if (index === lastInstruction) {
                console.log('LAST INSTRUCTION');
                console.log(acc);
                return;
            }
            nextMove(index += 1, newInput)
        } else {
            const amount = newInput[index].split(/\-/)[1];
            acc -= +amount;
            if (index === lastInstruction) {
                console.log('LAST INSTRUCTION');
                console.log(acc);
                return;
            }
            nextMove(index += 1, newInput)
        }
    }
    if (newInput[index].includes('jmp')) {
        if (newInput[index].includes('+')) {
            const amount = newInput[index].split(/\+/)[1];
            if (index === lastInstruction) {
                console.log('LAST INSTRUCTION');
                console.log(acc);
                return;
            }
            nextMove(index += +amount, newInput)
        } else {
            const amount = newInput[index].split(/\-/)[1];
            if (index === lastInstruction) {
                console.log('LAST INSTRUCTION');
                console.log(acc);
                return;
            }
            nextMove(index -= +amount, newInput)
        }
    }
}

// nextMove(0);



for (let i = 0; i < input.length; i++) {
    if (input[i].includes('nop')) {
        let newInput = [...input];
        const newVal = newInput[i].replace('nop', 'jmp');
        newInput[i] = newVal;
        nextMove(0, newInput);
    }
    if (input[i].includes('jmp')) {
        let newInput = [...input];
        const newVal = newInput[i].replace('jmp', 'nop');
        newInput[i] = newVal;
        nextMove(0, newInput);
    }
    acc = 0;
    indexes = {};
}