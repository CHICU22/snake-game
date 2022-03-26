var rows = 34;
var columns = 34;

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


//Corpo Cobra
let corpoCobra = [
    { x: 12, y: 12}, 
    { x: 12, y: 13},
    { x: 12, y: 14}
] 

function desenharCobra(){
    corpoCobra.forEach(segmento => {
        const elementoCobra = document.getElementById(`${segmento.y}-${segmento.x}`);
        console.log(elementoCobra);
        elementoCobra.classList.add('cobra');
    })
}

desenharCobra();
//Corpo Cobra

//Colocar Comida no Mapa
let comida = {x: 17, y: 17};

function desenharComida(){
        const elementoComida = document.getElementById(`${comida.y}-${comida.x}`);
        elementoComida.classList.add('comida');
}

desenharComida();
//Colocar Comida no Mapa

//Fazer a cobra movimentar de 1 em 1 segundos
let dx = +1;
let dy = -1;

function movimentarCobra(){
    const cabeca = {x: corpoCobra[0].x + dx, y: corpoCobra[0].y} ;
    console.log("------");
    console.log(cabeca);
    console.log(corpoCobra);
    corpoCobra.unshift(cabeca);
    corpoCobra.pop();
    console.log(corpoCobra);
}

setInterval(()=>{
    movimentarCobra();
    desenharCobra();
    desenharComida();
}, 1000);


function limparGrid(){
    elementoCobra.classList.remove('cobra');
    elementoComida.classList.remove('comida');
}

limparGrid();

function baterParede(cobra) {
    // If you bump into yourself 
    for (let i = 1; i < corpoCobra.length; i++) {
        if(cobra[i].x === cobra[0].x && cobra[i].y === cobra[0].y){
            return true;
        }
    }
    // If you bump into the wall
    if(cobra[0].x >= 18 || cobra[0].x <=0 || cobra[0].y >= 18 || cobra[0].y <=0){
        return true;
    }
}

let inputDir = {x: 0, y: 0}; 

window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{
    inputDir = {x: 0, y: 1} // Start the game
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
});











  

