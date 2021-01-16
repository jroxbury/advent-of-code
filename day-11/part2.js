var fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split('\n');
// const input = fs.readFileSync('input.test.txt').toString().split("\n");
const grid = input.map(item => item.split(''));

function up(grid, row, col) {
    row = row - 1;
    if (grid[row] === undefined) {
        return false;
    }
    const space = grid[row][col];
    if (space === undefined || space === 'L') {
        return false;
    }
    if (space === '#') {
        return true;
    }
    return up(grid, row, col);
}

function upLeft(grid, row, col) {
    row = row - 1;
    col = col - 1;
    if (grid[row] === undefined) {
        return false;
    }
    const space = grid[row][col];
    if (space === undefined || space === 'L') {
        return false;
    }
    if (space === '#') {
        return true;
    }
    return upLeft(grid, row, col);
}

function upRight(grid, row, col) {
    row = row - 1;
    col = col + 1;
    if (grid[row] === undefined) {
        return false;
    }
    const space = grid[row][col];
    if (space === undefined || space === 'L') {
        return false;
    }
    if (space === '#') {
        return true;
    }
    return upRight(grid, row, col);
}

function right(grid, row, col) {
    col = col + 1;
    if (grid[row] === undefined) {
        return false;
    }
    const space = grid[row][col];
    if (space === undefined || space === 'L') {
        return false;
    }
    if (space === '#') {
        return true;
    }
    return right(grid, row, col);
}

function left(grid, row, col) {
    col = col - 1;
    if (grid[row] === undefined) {
        return false;
    }
    const space = grid[row][col];
    if (space === undefined || space === 'L') {
        return false;
    }
    if (space === '#') {
        return true;
    }
    return left(grid, row, col);
}

function down(grid, row, col) {
    row = row + 1;
    if (grid[row] === undefined) {
        return false;
    }
    const space = grid[row][col];
    if (space === undefined || space === 'L') {
        return false;
    }
    if (space === '#') {
        return true;
    }
    return down(grid, row, col);
}

function downLeft(grid, row, col) {
    row = row + 1;
    col = col - 1;
    if (grid[row] === undefined) {
        return false;
    }
    const space = grid[row][col];
    if (space === undefined || space === 'L') {
        return false;
    }
    if (space === '#') {
        return true;
    }
    return downLeft(grid, row, col);
}

function downRight(grid, row, col) {
    row = row + 1;
    col = col + 1;
    if (grid[row] === undefined) {
        return false;
    }
    const space = grid[row][col];
    if (space === undefined || space === 'L') {
        return false;
    }
    if (space === '#') {
        return true;
    }
    return downRight(grid, row, col);
}

function checkAround(grid, row, col) {
    const space = grid[row][col];

    // Floor Spot
    if (space === '.') {
        return '.';
    }
    let occupied = 0;

    // Up Left Diagonal
    if (upLeft(grid, row, col)) {
        occupied++
    }
    // Up
    if (up(grid, row, col)) {
        occupied++
    }
    // Up Right Diagonal
    if (upRight(grid, row, col)) {
        occupied++
    }
    // Right
    if (right(grid, row, col)) {
        occupied++
    }
    // Left
    if (left(grid, row, col)) {
        occupied++
    }
    // Down Left Diagonal
    if (downLeft(grid, row, col)) {
        occupied++
    }
    // Down
    if (down(grid, row, col)) {
        occupied++
    }
    // Down Right Diagonal
    if (downRight(grid, row, col)) {
        occupied++
    }

    if (space === 'L' && occupied === 0) {
        return '#'
    }
    if (space === '#' && occupied >= 5) {
        return 'L';
    }
    return space;

}

let seenBefore = [];

function checkAllSpots(grid) {
    let occupied = 0;
    const newGrid = JSON.parse(JSON.stringify(grid));
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid.length; col++) {
            const item = checkAround(grid, row, col);
            if (item === '#') {
                occupied++
            }
            newGrid[row][col] = item;
        }
    }
    if (!seenBefore.includes(occupied)) {
        seenBefore.push(occupied);
        checkAllSpots(newGrid);
    } else {
        console.log(occupied);
    }
}

checkAllSpots(grid);