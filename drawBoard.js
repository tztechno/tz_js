
function drawBoard() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (board[i][j] == 1) {
                ctx.fillStyle = "blue";
                ctx.fillRect(j * blockWidth, i * blockHeight, blockWidth, blockHeight);
            } else {
                ctx.strokeStyle = "black";
                ctx.strokeRect(j * blockWidth, i * blockHeight, blockWidth, blockHeight);
            }
        }
    }
    document.getElementById("score").innerHTML = "Score: " + score;
}

/*
This JavaScript function drawBoard() is part of a game or puzzle implementation 
that involves drawing a game board on an HTML5 canvas using the Canvas API.

The function uses nested for-loops to iterate over each cell in the game board, 
which is likely represented as a 2D array named board.

For each cell in the board, the function checks if the value is 1, 
which likely represents a filled cell. If the value is 1, 
it sets the fill style of the canvas context (ctx) to "blue" 
using ctx.fillStyle and then draws a filled rectangle using ctx.fillRect() 
at the corresponding position on the canvas, calculated 
based on the current row and column, blockWidth, and blockHeight.
*/
