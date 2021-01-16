var fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split(',');
// const input = fs.readFileSync('input.test.txt').toString().split(',');

const obj = {};
for (let i = 0; i < input.length; i++) {
    obj[input[i]] = [i + 1];
}
const start = input[input.length - 1];
let index = input.length;

function checkNumber(lastNumber) {
    if (index === 2020) {
        console.log(lastNumber);
        return;
    }
    index++;
    let newNumber = 0;
    if (obj[lastNumber].length === 1) {
        obj[0].unshift(index);
    } else {
        const newIndex = obj[lastNumber][0] - obj[lastNumber][1];
        if (obj[newIndex]) {
            obj[newIndex].unshift(index);
        } else {
            obj[newIndex] = [index];
        }
        newNumber = newIndex;
    }
    checkNumber(newNumber)
}

checkNumber(start);

// Then, each turn consists of considering the most recently spoken number:

// First time the number has been spoken => 0.
// If Spoken before => how many turns apart the number is from when it was previously spoken.
// So, after the starting numbers, each turn results in that player speaking aloud either 0 (if the last number is new) or an age (if the last number is a repeat).

// If 1st time then next number is 0
// if not first time then next number is current index minus last time index.
// For example, suppose the starting numbers are 0,3,6:
// 0 - 1
// 3 - 2
// 6 - 3
// 0 - 4
// 3 - 5
// 3 - 6
// 7 - 1
// 0 - 8
// 4 - 9
// 0 - 10
// 2 - 11
// Turn 1: The 1st number spoken is a starting number, 0.
// Turn 2: The 2nd number spoken is a starting number, 3.
// Turn 3: The 3rd number spoken is a starting number, 6.

// Turn 4: Now, consider the last number spoken, 6. Since that was the first time the number had been spoken, the 4th number spoken is 0.
// Turn 5: Next, again consider the last number spoken, 0. Since it had been spoken before, the next number to speak is the difference between the turn number when it was last spoken (the previous turn, 4) and the turn number of the time it was most recently spoken before then (turn 1). Thus, the 5th number spoken is 4 - 1, 3.
// Turn 6: The last number spoken, 3 had also been spoken before, most recently on turns 5 and 2. So, the 6th number spoken is 5 - 2, 3.
// Turn 7: Since 3 was just spoken twice in a row, and the last two turns are 1 turn apart, the 7th number spoken is 1.
// Turn 8: Since 1 is new, the 8th number spoken is 0.
// Turn 9: 0 was last spoken on turns 8 and 4, so the 9th number spoken is the difference between them, 4.
// Turn 10: 4 is new, so the 10th number spoken is 0.

// what will be the 2020th number spoken? In the example above, the 2020th number spoken will be 436.

// Here are a few more examples:

// Given the starting numbers 1,3,2, the 2020th number spoken is 1.
// Given the starting numbers 2,1,3, the 2020th number spoken is 10.
// Given the starting numbers 1,2,3, the 2020th number spoken is 27.
// Given the starting numbers 2,3,1, the 2020th number spoken is 78.
// Given the starting numbers 3,2,1, the 2020th number spoken is 438.
// Given the starting numbers 3,1,2, the 2020th number spoken is 1836.
// Given your starting numbers, what will be the 2020th number spoken?

// Your puzzle input is 15,12,0,14,3,1.