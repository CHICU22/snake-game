var rows = 30;
var columns = 30;

gridContainer = document.getElementById('gridContainer');
for (let rowNumber = 0; rowNumber<rows; rowNumber++){

    var row = document.createElement('div');
    row.classList.add('row');
    gridContainer.appendChild(row);

    for (let colNumber = 0; colNumber < columns; colNumber++){
        var gridItem = document.createElement('div');
        row.appendChild(gridItem);
        gridItem.classList.add('gridItem');
        gridItem.id = (rowNumber) - (colNumber);
    }
}



/*snakePosition = [
    [2, 2],
    [2, 3],
    [2, 4],
];

function drawSnake(gridContainer){
    snakePositions.forEach(snakePosition => {
        const snake = document.createElement('div')
        snake.style.gridRowStart = snakePosition.x
        snake.style.gridColumnStart = snakePosition.y
        snake.classList.add('snake');
        gridContainer.appendChild(snake)
    })
}  */

