var fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split('\n\n');
// const input = fs.readFileSync('input.test.txt').toString().split('\n\n');


// Part 1

// let count = 0;
// for (let index = 0; index < input.length; index++) {
//     const unique = new Set();
//     input[index] = input[index].replace(/\n/g, '');
//     input[index].split('').forEach(letter => {
//         unique.add(letter)
//     })
//     count += unique.size;
// }

// console.log(count);


// Part 2
// In the first group, everyone (all 1 person) answered "yes" to 3 questions: a, b, and c.
// In the second group, there is no question to which everyone answered "yes".
// In the third group, everyone answered yes to only 1 question, a. Since some people did not answer "yes" to b or c, they don't count.
// In the fourth group, everyone answered yes to only 1 question, a.
// In the fifth group, everyone (all 1 person) answered "yes" to 1 question, b.

const addToObj = (obj, letter) => {
    if (obj[letter]) {
        obj[letter] += 1;
    } else {
        obj[letter] = 1;
    }
}

let count = 0;
for (let index = 0; index < input.length; index++) {
    let currentLength = 0;
    let obj = {};
    input[index] = input[index].split(/\n/);

    // Store length
    currentLength = input[index].length;

    // flatten
    input[index].forEach(letter => {
        if (letter.length === 1) {
            addToObj(obj, letter)
        } else {
            letter.split("").forEach(letter => {
                addToObj(obj, letter)
            })
        }
    });

    // Compare letters to num of people
    Object.keys(obj).forEach(letter => {
        if (obj[letter] === currentLength) {
            count += 1;
        }
    })
}
console.log(count);