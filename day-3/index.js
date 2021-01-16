var fs = require('fs');
var arr = fs.readFileSync('./input.txt').toString().split('\n');
// var arr = fs.readFileSync('./input.test.txt').toString().split('\n');

const rowLength = arr[0].length - 1;
let numTrees = 0;
let colIndex = 0;
let right = 1;

let arrLength = arr.length;

for (let i = 2; i < arrLength; i += 2) {
    var row = arr[i].split('');
    if (colIndex + right <= rowLength) {
        colIndex += right
    } else {
        let next = colIndex + right;
        next = (next - rowLength) - 1;
        colIndex = next;
    }

    if (row[colIndex] === '#') {
        numTrees++;
    }
}

// console.log(numTrees);

console.log(90 * 244 * 97 * 92 * 48)