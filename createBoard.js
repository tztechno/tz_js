
function createBoard(rows, cols) {
    var board = [];
    for (var i = 0; i < rows; i++) {
        board.push([]);
        for (var j = 0; j < cols; j++) {
            board[i].push(0);
        }
    }
    return board;
}

/*
this function creates a 2D array with a specified number of rows and columns, 
where each element is initialized to 0, representing a board 
that can be used for various purposes such as games, grids, or matrices.
*/
