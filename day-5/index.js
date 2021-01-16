const fs = require('fs');

// const boardingPasses = fs.readFileSync('input.test.txt').toString().split('\n');
const boardingPasses = fs.readFileSync('input.txt').toString().split('\n');

const seatId = (row, column) => row * 8 + column;
const upperHalf = (min, max) => min + Math.floor((max - min) / 2);
const lowerHalf = (min, max) => min + Math.ceil((max - min) / 2);

// 64 513
let highest = 0;
for (let i = 0; i < boardingPasses.length; i++) {
    let rowMin = 0;
    let rowMax = 127;
    let colMin = 0;
    let colMax = 7;
    boardingPasses[i].split('').forEach(code => {
        if (code === 'F') {
            rowMax = upperHalf(rowMin, rowMax);
        }
        if (code === 'B') {
            rowMin = lowerHalf(rowMin, rowMax);
        }
        if (code === 'R') {
            colMin = lowerHalf(colMin, colMax);
        }
        if (code === 'L') {
            colMax = upperHalf(colMin, colMax);
        }
    })

    const seatIdVal = seatId(rowMin, colMin);
    if (rowMin >= 63 && rowMin <= 64) {

        // console.log(rowMin, seatIdVal);
    }
    if (seatIdVal > highest) {
        highest = seatIdVal;
    }
}
// console.log(highest);


// PART 2:
// It's a completely full flight, so your seat should be the only missing boarding pass in your list.
// However, there's a catch: some of the seats at the very front and back of the plane don't exist on this aircraft, so they'll be missing from your list as well.
// Your seat wasn't at the very front or back, though; the seats with IDs +1 and -1 from yours will be in your list.


let seatIds = [];
for (let i = 0; i < boardingPasses.length; i++) {
    let rowMin = 0;
    let rowMax = 127;
    let colMin = 0;
    let colMax = 7;
    boardingPasses[i].split('').forEach(code => {
        if (code === 'F') {
            rowMax = upperHalf(rowMin, rowMax);
        }
        if (code === 'B') {
            rowMin = lowerHalf(rowMin, rowMax);
        }
        if (code === 'R') {
            colMin = lowerHalf(colMin, colMax);
        }
        if (code === 'L') {
            colMax = upperHalf(colMin, colMax);
        }
    })

    const seatIdVal = seatId(rowMin, colMin);
    seatIds.push(seatIdVal);
}

sortedIds = seatIds.sort((a, b) => a - b);
let missingIds = [];
let last = 0;
for (let index = 0; index < sortedIds.length; index++) {
    if ((sortedIds[index] - last) > 1) {
        missingIds.push(last);
    }
    last = sortedIds[index];
}
console.log(missingIds);