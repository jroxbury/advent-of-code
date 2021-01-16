var fs = require('fs');

const arr = fs.readFileSync('input.txt').toString().split('\n\n');
// const arr = fs.readFileSync('input.test.txt').toString().split('\n\n');

// Required Fields
// cid is optional
const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

let numPassportsValid = 0;

arr.forEach(passport => {
    let formattedPass = passport.replace(/\n/gi, ' ');
    let allFields = false;
    let allValid = 0;

    allFields = fields.every(item => formattedPass.indexOf(item) !== -1);

    if (allFields) {

        formattedPass = formattedPass.split(' ');

        formattedPass.forEach(item => {
            item = item.split(':');

            // byr (Birth Year) - four digits; at least 1920 and at most 2002.
            if (item[0] === 'byr') {
                if (item[1].length === 4 && item[1] >= 1920 && item[1] <= 2002) {
                    allValid++
                }
            }

            // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
            if (item[0] === 'iyr') {
                if (item[1].length === 4 && item[1] >= 2010 && item[1] <= 2020) {
                    allValid++
                }
            }

            // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
            if (item[0] === 'eyr') {
                if (item[1].length === 4 && item[1] >= 2020 && item[1] <= 2030) {
                    allValid++
                }
            }

            // hgt (Height) - a number followed by either cm or in:
            if (item[0] === 'hgt') {
                if (item[1].match(/[0-9]+cm|[0-9]+in/)) {
                    if (item[1].match(/[0-9]+cm/)) {
                        const num = item[1].split('cm')[0];
                        // If cm, the number must be at least 150 and at most 193.
                        if (num >= 150 && num <= 193) {
                            allValid++
                        }
                    }
                    if (item[1].match(/[0-9]+in/)) {
                        const num = item[1].split('in')[0];
                        // If in, the number must be at least 59 and at most 76.
                        if (num >= 59 && num <= 76) {
                            allValid++
                        }
                    }
                }
            }

            // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
            if (item[0] === 'ecl') {
                if (item[1] === 'amb' || item[1] === 'blu' || item[1] === 'brn' || item[1] === 'gry' || item[1] === 'grn' || item[1] === 'hzl' || item[1] === 'oth') {
                    allValid++
                }
            }

            // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
            if (item[0] === 'hcl') {
                if (item[1].match(/^#[0-9a-f]{6}/i)) {
                    allValid++
                }
            }
            // pid (Passport ID) - a nine-digit number, including leading zeroes.
            if (item[0] === 'pid') {
                if (item[1].match(/^[0-9]{9}$/)) {
                    allValid++
                }
            }
        })
    }

    if (allFields && allValid === 7) {
        numPassportsValid++;
    }
})

console.log(numPassportsValid);