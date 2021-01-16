var fs = require('fs');

let input = fs.readFileSync('input.test.txt').toString().split('\n');
// let input = fs.readFileSync('input.test-2.txt').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

input.sort((a, b) => +a - +b)
input = input.map(item => +item);

let one = 1;
let two = 0;
let three = 1;

console.log(input);
for (let i = 0; i < input.length; i++) {
    if (input[i + 1]) {
        if (input[i + 1] - input[i] === 1) {
            one++
        }
        if (input[i + 1] - input[i] === 2) {
            two++
        }
        if (input[i + 1] - input[i] === 3) {
            three++
        }

    }
}

console.log(one, two, three)