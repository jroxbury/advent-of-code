var fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split('\n');
// const input = fs.readFileSync('input.test.txt').toString().split('\n');

// const rangeLength = 25;

// for (let i = 0; i < input.length; i++) {
//     let nextNumber = +input[i + rangeLength];
//     let check = [];

//     for (let j = i; j < (i + rangeLength); j++) {
//         for (let k = j + 1; k < (i + rangeLength); k++) {
//             check.push((+input[j]) + (+input[k]));
//         }
//     }
//     // console.log(check.includes(nextNumber));
//     if (!check.includes(nextNumber)) {
//         console.log(nextNumber);
//     }
// }

// 217430975
for (let i = 0; i < input.length; i++) {

    if ((
            +input[i] +
            +input[i + 1] +
            +input[i + 2] +
            +input[i + 3] +
            +input[i + 4] +
            +input[i + 5] +
            +input[i + 6] +
            +input[i + 7] +
            +input[i + 8] +
            +input[i + 9] +
            +input[i + 10] +
            +input[i + 11] +
            +input[i + 12] +
            +input[i + 13] +
            +input[i + 14] +
            +input[i + 15] +
            +input[i + 16]
        ) === 217430975) {
        const nums = [];
        nums.push(
            +input[i],
            +input[i + 1],
            +input[i + 2],
            +input[i + 3],
            +input[i + 4],
            +input[i + 5],
            +input[i + 6],
            +input[i + 7],
            +input[i + 8],
            +input[i + 9],
            +input[i + 10],
            +input[i + 11],
            +input[i + 12],
            +input[i + 13],
            +input[i + 14],
            +input[i + 15],
            +input[i + 16]
        )
        const sorted = nums.sort((a, b) => a - b)
        console.log(sorted[0] + sorted[16]);
    }
}