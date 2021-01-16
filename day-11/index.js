var fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split('\n');
// const input = fs.readFileSync('input.test.txt').toString().split("\n");
const grid = input.map(item => item.split(''));

const isSpotOccupied = (position) => {
    return position && position === '#';
}

function checkAround(grid, row, col) {
    const space = grid[row][col];

    // Floor Spot
    if (space === '.') {
        return '.';
    }
    let occupied = 0;

    if (grid[row - 1]) {
        // Up Left Diagonal
        if (isSpotOccupied(grid[row - 1][col - 1])) {
            occupied++
        }
        // Up
        if (isSpotOccupied(grid[row - 1][col])) {
            occupied++
        }
        // Up Right Diagonal
        if (isSpotOccupied(grid[row - 1][col + 1])) {
            occupied++
        }
    }

    // Right
    if (isSpotOccupied(grid[row][col + 1])) {
        occupied++
    }
    // Left
    if (isSpotOccupied(grid[row][col - 1])) {
        occupied++
    }

    if (grid[row + 1]) {

        // Down Left Diagonal
        if (isSpotOccupied(grid[row + 1][col - 1])) {
            occupied++
        }
        // Down
        if (isSpotOccupied(grid[row + 1][col])) {
            occupied++
        }
        // Down Right Diagonal
        if (isSpotOccupied(grid[row + 1][col + 1])) {
            occupied++
        }
    }

    if (space === 'L' && occupied === 0) {
        return '#'
    }
    if (space === '#' && occupied >= 4) {
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