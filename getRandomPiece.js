
function getRandomPiece() {
    var pieces = [
        [
            [1, 1],
            [1, 1],
        ],
        [
            [1, 0, 0],
            [1, 1, 1],
        ],
        [
            [0, 0, 1],
            [1, 1, 1],
        ],
        [
            [1, 1, 0],
            [0, 1, 1],
        ],
        [
            [0, 1, 1],
            [1, 1, 0],
        ],
        [
            [1, 1, 1, 1],
        ],
        [
            [1, 1, 1],
            [0, 1, 0],
        ],
    ];
    return pieces[Math.floor(Math.random() * pieces.length)];
}

/*
This JavaScript function getRandomPiece() returns a randomly selected 2D array 
representing a game piece for a game or puzzle. The pieces array contains 
several predefined pieces, each represented as a 2D array of 0s and 1s, 
where 1s represent filled cells and 0s represent empty cells.
*/
