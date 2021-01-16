var fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split('\n');
// const input = fs.readFileSync('input.test.txt').toString().split('\n');

// let east = 0;
// let north = 0;

// let current = 'E';

// const rotate = (leftOrRight, amount, currentDirection) => {
//     const directions = {
//         'NR': ['E', 'S', 'W'],
//         'NL': ['W', 'S', 'E'],
//         'ER': ['S', 'W', 'N'],
//         'EL': ['N', 'W', 'S'],
//         'SR': ['W', 'N', 'E'],
//         'SL': ['E', 'N', 'W'],
//         'WR': ['N', 'E', 'S'],
//         'WL': ['S', 'E', 'N']
//     };
//     const degrees = (amount / 90) - 1;
//     current = directions[currentDirection + leftOrRight][degrees];
// }

// for (let i = 0; i < input.length; i++) {
//     let direction = input[i][0];
//     const num = +input[i].slice(1);
//     if (direction === 'F') {
//         direction = current;
//     }
//     switch (direction) {
//         case 'N':
//             north += num;
//             break;
//         case 'S':
//             north -= num;
//             break;
//         case 'E':
//             east += num;
//             break;
//         case 'W':
//             east -= num;
//             break;
//         case 'L':
//             rotate('L', num, current)
//             break;
//         case 'R':
//             rotate('R', num, current)
//             break;
//     }

// }

// console.log(north, east);



// Part 2
let east = 0;
let north = 0;
let currentOne = 'N1';
let currentTwo = 'E10';


//    N
//  W   E
//    S
const rotate = (leftOrRight, amount) => {
    const directions = {
        'NR': ['E', 'S', 'W'],
        'NL': ['W', 'S', 'E'],
        'ER': ['S', 'W', 'N'],
        'EL': ['N', 'W', 'S'],
        'SR': ['W', 'N', 'E'],
        'SL': ['E', 'N', 'W'],
        'WR': ['N', 'E', 'S'],
        'WL': ['S', 'E', 'N']
    };
    const degrees = (amount / 90) - 1;
    const oneNum = currentOne.slice(1);
    const twoNum = currentTwo.slice(1)
    oneNewDir = directions[currentOne[0] + leftOrRight][degrees];
    twoNewDir = directions[currentTwo[0] + leftOrRight][degrees];
    currentOne = oneNewDir + oneNum;
    currentTwo = twoNewDir + twoNum;
}

for (let i = 0; i < input.length; i++) {
    let direction = input[i][0];
    const num = +input[i].slice(1);

    const oneDir = currentOne[0];
    const oneAmount = +currentOne.slice(1) * num;

    const twoDir = currentTwo[0];
    const twoAmount = +currentTwo.slice(1) * num;

    console.log({
        direction,
        num,
        oneAmount,
        oneDir,
        twoAmount,
        twoDir,
        currentOne,
        currentTwo,
        east,
        north
    });

    if (direction === 'F') {

        // N38 E170
        switch (oneDir) {
            case 'N':
                north += oneAmount;
                break;
            case 'S':
                north -= oneAmount;
                break;
            case 'E':
                east += oneAmount;
                break;
            case 'W':
                east -= oneAmount;
                break;
        }
        switch (twoDir) {
            case 'N':
                north += twoAmount;
                break;
            case 'S':
                north -= twoAmount;
                break;
            case 'E':
                east += twoAmount;
                break;
            case 'W':
                east -= twoAmount;
                break;
        }
    } else {
        const oneDir = currentOne[0];
        const twoDir = currentTwo[0];
        const oneNum = +currentOne.slice(1);
        const twoNum = +currentTwo.slice(1);

        if (direction === 'N') {
            if (currentOne.includes('N')) {
                currentOne = oneDir + (oneNum + num);
            }
            if (currentOne.includes('S')) {
                currentOne = oneDir + (oneNum - num);
            }
            if (currentTwo.includes('N')) {
                currentTwo = twoDir + (twoNum + num);
            }
            if (currentTwo.includes('S')) {
                currentTwo = twoDir + (twoNum - num);
            }
        }

        if (direction === 'S') {
            if (currentOne.includes('N')) {
                currentOne = oneDir + (oneNum - num);
            }
            if (currentOne.includes('S')) {
                currentOne = oneDir + (oneNum + num);
            }
            if (currentTwo.includes('N')) {
                currentTwo = twoDir + (twoNum - num);
            }
            if (currentTwo.includes('S')) {
                currentTwo = twoDir + (twoNum + num);
            }
        }
        if (direction === 'E') {
            if (currentOne.includes('E')) {
                currentOne = oneDir + (oneNum + num);
            }
            if (currentOne.includes('W')) {
                currentOne = oneDir + (oneNum - num);
            }
            if (currentTwo.includes('E')) {
                currentTwo = twoDir + (twoNum + num);
            }
            if (currentTwo.includes('W')) {
                currentTwo = twoDir + (twoNum - num);
            }
        }
        if (direction === 'W') {
            if (currentOne.includes('E')) {
                currentOne = oneDir + (oneNum - num);
            }
            if (currentOne.includes('W')) {
                currentOne = oneDir + (oneNum + num);
            }
            if (currentTwo.includes('E')) {
                currentTwo = twoDir + (twoNum - num);
            }
            if (currentTwo.includes('W')) {
                currentTwo = twoDir + (twoNum + num);
            }
        }

        if (direction === 'L') {
            rotate('L', num);
        }
        if (direction === 'R') {
            rotate('R', num);
        }
    }

}
console.log(east, north);
console.log(131925 + 47061)


// Wrong Answers
// 151740
// 1254100

//    10N
//  1W   E
//    S

//    N
//  W   E
//    S
// 1 N 10 E
// 1 W 10 N
// 1 W 15 N
// 3 W 15 N
// 3 W 20 N
// 3 S 20 W
// 4 S 20 W
// 4 W 20 N
// 2 W 16 N
// 0 W 16 N
// 1 W 16 N