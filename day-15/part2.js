var fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split(',');
// const input = fs.readFileSync('input.test.txt').toString().split(',');

const obj = {};
for (let i = 0; i < input.length; i++) {
    obj[input[i]] = [i + 1];
}
let start = input[input.length - 1];
let index = input.length;


while (index < 30000000) {
    index++;
    let newNumber = 0;

    if (obj[start].length === 1) {
        obj[0].unshift(index);
        if (obj[0].length === 3) {
            obj[0].pop();
        }
    } else {
        const newIndex = obj[start][0] - obj[start][1];
        if (obj[newIndex]) {
            obj[newIndex].unshift(index);
            if (obj[newIndex].length === 3) {
                obj[newIndex].pop();
            }
        } else {
            obj[newIndex] = [index];
        }
        newNumber = newIndex;
    }
    start = newNumber;
}
console.log(start);
// function checkNumber(lastNumber) {
//     if (index === 30,000,000) {
//         console.log(lastNumber);
//         return;
//     }
//     index++;
//     let newNumber = 0;
//     if (obj[lastNumber].length === 1) {
//         obj[0].unshift(index);
//     } else {
//         const newIndex = obj[lastNumber][0] - obj[lastNumber][1];
//         if (obj[newIndex]) {
//             obj[newIndex].unshift(index);
//         } else {
//             obj[newIndex] = [index];
//         }
//         newNumber = newIndex;
//     }
//     checkNumber(newNumber)
// }