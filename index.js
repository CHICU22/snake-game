/*let ultimoTempoRenderizado = 0;
const velocidadeCobra = 1;
const gridContainer = document.getElementById('gridContainer');

function main(tempoAtual){
    window.requestAnimationFrame(main);
    const segundosDesdeUltimoRender = (tempoAtual - ultimoTempoRenderizado) / 1000;
    if (segundosDesdeUltimoRender < 1 / velocidadeCobra){
        return;
    } 


    ultimoTempoRenderizado = tempoAtual;

    atualizarCobra();
    drawSnake(gridContainer);
}*/

/*window.requestAnimationFrame(main);*/

var rows = 34;
var columns = 39;

gridContainer = document.getElementById('gridContainer');
for (let rowNumber = 0; rowNumber<rows; rowNumber++){


    var row = document.createElement('div');
    row.classList.add('row');
    gridContainer.appendChild(row);

    for (let colNumber = 0; colNumber < columns; colNumber++){
        var gridItem = document.createElement('div');
        row.appendChild(gridItem);
        gridItem.classList.add('gridItem');
        gridItem.id = `${rowNumber}-${colNumber}`;
    }
};

const corpoCobra = [
    { x: 12, y: 12}
] 

function drawSnake(){
    corpoCobra.forEach(segmento => {
        const elementoCobra = document.getElementById(`${segmento.x}-${segmento.y}`);
        console.log(elementoCobra);
        elementoCobra.classList.add('cobra');
    })
}

drawSnake();













  

