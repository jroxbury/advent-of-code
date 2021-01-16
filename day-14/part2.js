var fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split('\n')
// const input = fs.readFileSync('input-part-2.test.txt').toString().split('\n');

let mask = null;
let mem = {};

input.forEach(item => {
    if (item.includes('mask')) {
        mask = item.split('mask = ')[1];
    } else {
        const split = item.split(' = ');
        const spot = +split[0].replace(/mem\[|\]/g, "")
        const int = +split[1];
        newMemArray = applyMask(mask, spot);
        newMemArray.forEach(spot => {
            mem[spot] = int;
        })
    }
})

function intToBinary(int) {
    const binary = int.toString(2);
    const numZeros = '0'.repeat(36 - binary.length);
    return `${numZeros}${binary}`;
}

function applyMask(mask, int) {
    const binary = intToBinary(int);
    let result = "";
    for (let i = 0; i < mask.length; i++) {
        if (mask[i] === '0') {
            result += binary[i];
        }
        if (mask[i] === 'X' || mask[i] === '1') {
            result += mask[i];
        }
    }

    return getAllPossibleSpots([result]);
}

function getAllPossibleSpots(arr) {
    // 'X10X'
    let newArr = [];
    let nextOne = '';
    let nextTwo = ''
    arr.forEach(element => {
        let firstX = false;
        for (let i = 0; i < element.length; i++) {
            if (element[i] === 'X' && !firstX) {
                nextOne += '1';
                nextTwo += '0';
                firstX = true;
            } else {
                nextOne += element[i];
                nextTwo += element[i];
            }
        }
        newArr.push(nextOne, nextTwo);
        nextOne = '';
        nextTwo = '';
    });

    const hasX = newArr.some(item => {
        return item.includes('X');
    })

    if (hasX) {
        return getAllPossibleSpots(newArr);
    } else {
        return newArr;
    }
}

let count = 0;
Object.keys(mem).forEach(key => {
    count += mem[key];
})

console.log(count);