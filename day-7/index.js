var fs = require('fs');

// const input = fs.readFileSync('./input.test-2.txt').toString().split('\n');
const input = fs.readFileSync('./input.test.txt').toString().split('\n');
// const input = fs.readFileSync('./input.txt').toString().split('\n');

// Part 1
// let bags = {};

// for (let i = 0; i < input.length; i++) {
//     const bagType = input[i].match(/^([a-z\s]+)(\sbags\scontain\s)/)[1];

//     bags[bagType] = []
//     const regexp = /\d\s([a-z\s]+)\s/g;
//     const matches = input[i].matchAll(regexp);
//     for (const match of matches) {
//         bags[bagType].push(match[1]);
//     }
// }

// let start = ['shiny gold'];
// let validBags = new Set();

// function checkBags(array) {
//     let newArray = [];
//     if (array.length >= 1) {
//         Object.keys(bags).forEach(parent => {
//             // Loop through array and check if array contains any of the bags.
//             for (let i = 0; i < array.length; i++) {
//                 if (bags[parent].includes(array[i])) {
//                     validBags.add(parent);
//                     newArray.push(parent);
//                 }
//             }

//         })
//         checkBags(newArray);
//     }
// }

// checkBags(start);

// console.log(validBags.size);

// Part 2

let bags = {};
let bagCount = {};

for (let i = 0; i < input.length; i++) {
    const bagType = input[i].match(/^([a-z\s]+)(\sbags\scontain\s)/)[1];

    bags[bagType] = []
    const regexp = /(\d)\s([a-z\s]+)\s/g;
    const matches = input[i].matchAll(regexp);
    let count = 0;
    for (const match of matches) {
        count += +match[1];
        bags[bagType].push([match[2], match[1]])
    }
    bagCount[bagType] = count;
}


const start = bags['shiny gold'];


function checkBags(array) {
    console.log(array);
    let next = [];
    if (array.length >= 1) {
        for (let i = 0; i < array.length; i++) {
            if (array[i]) {
                const currentBag = array[i][0];
                const currentBagAmount = array[i][1];
                // console.log(bags[currentBag][0]);
                next.push(bags[currentBag][0]);
            }
        }
        checkBags(next);
    }
}
checkBags(start);


// 2431