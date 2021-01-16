var fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split('\n')
// const input = fs.readFileSync('input.test.txt').toString().split('\n');

let mask = null;
let mem = {};

input.forEach(item => {
    if (item.includes('mask')) {
        mask = item.split('mask = ')[1];
    } else {
        const split = item.split(' = ');
        const spot = split[0].replace(/mem\[|\]/g, "")
        const int = +split[1];
        mem[spot] = applyMask(mask, int);
    }
})


function binaryToInt(binary) {
    return parseInt(binary, 2);
}

function intToBinary(int) {
    const binary = int.toString(2);
    const numZeros = '0'.repeat(36 - binary.length);
    return `${numZeros}${binary}`;
}

function applyMask(mask, int) {
    const binary = intToBinary(int);
    let result = "";
    for (let i = 0; i < mask.length; i++) {
        if (mask[i] === 'X') {
            result += binary[i];
        }
        if (mask[i] === '0' || mask[i] === '1') {
            result += mask[i];
        }
    }
    return binaryToInt(result);
}

let count = 0;
Object.keys(mem).forEach(key => {
    count += mem[key];
})

console.log(count);