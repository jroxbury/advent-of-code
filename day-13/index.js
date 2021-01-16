// PART 1

// var fs = require('fs');

// const input = fs.readFileSync('input.txt').toString().split('\n');
// // const input = fs.readFileSync('input.test.txt').toString().split('\n');

// // Earliest timestamp you could depart on a bus
// const leave = +input[0];

// // The second line lists the bus IDs that are in service.
// // Entries that show x must be out of service, so you decide to ignore them.
// // Each bus has an ID number that also indicates how often the bus leaves for the airport.
// const busIds = input[1].split(',').filter(id => id !== 'x').map(id => +id);

// let num = null;
// let bestId = null;
// busIds.forEach(id => {
//     const diff = ((Math.floor(leave / id) + 1) * id) - leave;
//     if (num === null) {
//         num = diff;
//         bestId = id;
//     }
//     if (diff < num) {
//         num = diff;
//         bestId = id;
//     }
// })

// // Multiplying the bus ID by the number of minutes you'd need to wait
// console.log(num * bestId)


// PART 2

var fs = require('fs');

// const input = fs.readFileSync('input.txt').toString().split('\n');
const input = fs.readFileSync('part-2-test-2.txt').toString().split(',').map((id, idx) => {
    return [+id, +id + idx];
});

let num1 = 17;
let num2 = 15;
let num3 = 22;
const obj = {};
while (true) {
    num1 += 17;
    num2 += 13;
    num3 += 19;
    console.log('...')
    if (obj[num1]) {
        obj[num1] += 1;
        if (obj[num1] === 3) {
            console.log(num1);
            return;
        }
    } else {
        obj[num1] = 1;
    }
    if (obj[num2]) {
        obj[num2] += 1;
        if (obj[num2] === 3) {
            console.log(num2);
            return;
        }
    } else {
        obj[num2] = 1;
    }
    if (obj[num3]) {
        obj[num3] += 1;
        if (obj[num3] === 3) {
            console.log(num3);
            return;
        }
    } else {
        obj[num3] = 1;
    }

}

console.log(input)

// 17 0
// X 1
// 13 2
// 19 3
// Test 2 => 3417

// 17,34,51,68,85
// 15,28,41,54,67
// 22,41,60,79,98

// Test 1 => 1068788
// Test 3 => 754018
// Test 4 => 779210
// Test 5 => 1261476
// Test 6 => 1202161486


// An x in the schedule means there are no constraints on what bus IDs must depart at that time.
// const busIds = input[1].split(',').filter(id => id !== 'x').map(id => +id);

// let num = null;
// let bestId = null;
// busIds.forEach(id => {
//     const diff = ((Math.floor(leave / id) + 1) * id) - leave;
//     if (num === null) {
//         num = diff;
//         bestId = id;
//     }
//     if (diff < num) {
//         num = diff;
//         bestId = id;
//     }
// })