var fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split('\n');

const regex = /(\d+-\d+)/g
const instructions = new Set();
const obj = {};
let myTicket;
let nearByTickets = [];
let count = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i] === '') {
        continue;
    }
    if (input[i] === 'your ticket:') {
        count += 1;
        continue
    }
    if (input[i] === 'nearby tickets:') {
        count += 1;
        continue
    }
    if (count === 0) {
        const valid = new Set();
        const range1 = input[i].match(regex)[0].split('-');
        const range2 = input[i].match(regex)[1].split('-');

        for (let i = range1[0]; i <= range1[1]; i++) {
            instructions.add(+i);
            valid.add(+i);
        }
        for (let i = range2[0]; i <= range2[1]; i++) {
            instructions.add(+i);
            valid.add(+i);
        }

        obj[i + 1] = valid;
    }
    if (count === 1) {
        myTicket = input[i].split(',');
    }
    if (count === 2) {
        nearByTickets.push(input[i].split(','));
    }
}


const validTickets = nearByTickets.reduce((previous, ticket) => {
    isValid = true;
    for (let i = 0; i < ticket.length; i++) {
        const num = +ticket[i];
        if (!instructions.has(num)) {
            isValid = false;
            break;
        }
    }
    if (isValid) {
        previous = [...previous, ticket];
    }
    return previous;
}, []);

validTickets.push(myTicket);

const byIndex = {
    1: new Set(),
    2: new Set(),
    3: new Set(),
    4: new Set(),
    5: new Set(),
    6: new Set(),
    7: new Set(),
    8: new Set(),
    9: new Set(),
    10: new Set(),
    11: new Set(),
    12: new Set(),
    13: new Set(),
    14: new Set(),
    15: new Set(),
    16: new Set(),
    17: new Set(),
    18: new Set(),
    19: new Set(),
    20: new Set()
};

for (let i = 0; i < validTickets.length; i++) {
    for (let j = 0; j < validTickets[i].length; j++) {
        byIndex[j + 1].add(validTickets[i][j]);
    }
}

function eqSet(as, bs) {
    if (as.size !== bs.size) return false;
    for (var a of as)
        if (!bs.has(a)) return false;
    return true;
}
// obj => Ranges
// byIndex => Each ticket by index(Column); Column 1, Column 2, ...
const arr = [];
for (let i = 1; i <= 20; i++) {
    const theThing = Array.from(byIndex[6]).sort((a, b) => a - b).every(item => {
        return obj[i].has(+item)
    })

    if (theThing) {
        arr.push(i);
    }
}
console.log(arr);

// 1: 7,11,18,20
// 2: 1,  7, 11, 12, 13, 18, 20
// 3: 1,  5,  6,  7, 11, 12, 13, 18, 20
// 4: 1,  5,  6,  7, 11, 12, 13, 15, 18, 20
// 5: 7, 11, 12, 18, 20
// 6: 7, 11, 12, 13, 18, 20
// 7: 1,  5,  7, 11, 12, 13, 18, 20
// 8: 7, 11, 12, 18, 20
// 9: 7, 11, 12, 18, 20
// 10: 1,  5,  6,  7, 10, 11, 12, 13, 15, 18, 19, 20
// 11: 7, 11, 12, 18, 20
// 12: 7, 11, 18, 20
// 13: 11, 18 
// 14: 1,  5,  6,  7, 10, 11, 12, 13, 15, 18, 20
// 15: 18
// 16: 7, 11, 18
// 17: 1,  5,  7, 11, 12, 13, 18, 20
// 18: 1,  5,  6,  7, 11, 12, 13, 18, 20
// 19: 1,  5,  6,  7, 10, 11, 12, 13, 15, 18, 19, 20
// 20: 1,  5,  7, 11, 12, 13, 18, 20


// 83, 53, 73, 139, 127, 131, 97, 113, 61, 101, 107, 67, 79, 137, 89, 109, 103, 59, 149, 71

// Wrong Answers
// 347140880993 => Too high
// console.log(71 * 97 * 107 * 67 * 79 * 89)
// 327675037199 => Too high
// console.log(71 * 97 * 101 * 67 * 79 * 89)

// 66238993967 => Too low
// console.log(53 * 59 * 61 * 67 * 71 * 73)

// 269277505817 => Too Low
// console.log(67 * 71 * 79 * 83 * 89 * 97)