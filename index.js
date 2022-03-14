var rows = 10;
var columns = 10;

gridContainer = document.getElementById('gridContainer');
for (let rowNumber = 0; rowNumber<rows; rowNumber++){

    var row = document.createElement('div');
    row.classList.add('row');
    gridContainer.appendChild(row);

    for (let colNumber = 0; colNumber < columns; colNumber++){
        var gridItem = document.createElement('div');
        row.appendChild(gridItem);
        gridItem.classList.add('gridItem');
        gridItem.id = $(rowNumber)-$(colNumber);
    }
}

snakePosition = [
    [2, 2],
    [2, 3],
    [2, 4],
];

function render(){
    snakePositions.forEach(snakePosition) => {
        gridItem = documentElementById(
            ${snakePosition[0]}
        )
    }

}