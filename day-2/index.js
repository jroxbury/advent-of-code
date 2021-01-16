var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");
let data = [];
for (i in array) {
    array[i] = array[i].replace(/\:/gi, "");
    let arr = array[i].split(' ');
    const minMax = arr[0].split('-');
    arr.shift();
    arr.unshift(...minMax);
    data.push(arr);
}

let numberValid = 0;

// for (let i = 0; i < data.length; i++) {
//     const min = data[i][0];
//     const max = data[i][1];
//     const char = data[i][2];
//     const password = data[i][3];
//     let count = {}

//     password.split('').forEach(letter => {
//         if (count[letter]) {
//             count[letter] += 1
//         } else {
//             count[letter] = 1;
//         }
//     })

//     if (count[char] >= min && count[char] <= max) {
//         numberValid += 1;
//     }
// }


for (let i = 0; i < data.length; i++) {
    const min = data[i][0] - 1;
    const max = data[i][1] - 1;
    const char = data[i][2];
    const password = data[i][3];
    let numVal = 0;

    if (password[min] === char) {
        numVal += 1;
    }
    if (password[max] === char) {
        numVal += 1;
    }
    if (numVal === 1) {
        numberValid += 1;
    }
}

console.log(numberValid);