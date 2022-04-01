// //Código butão
// submit.onclick = () => {
//     gridContainer.style.backgroundColor = cobra.value;
//     gridContainer.style.backgroundColor = comida.value;
// }
// //Código butão

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
// let dx = +1;
// let dy = -1;
inputDir = {x: 0, y: -1}; 

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
//Fazer a cobra movimentar de 1 em 1 segundos

//Limpar o que fica para trás
function limparGrid(){    
        for (let colNumber = 0; colNumber < columns; colNumber++){
        var gridItem = document.createElement('div');
        row.appendChild(gridItem);
        gridItem.classList.add('gridItem');
        gridItem.id = `${rowNumber}-${colNumber}`;
        gridItem.classList.remove('cobra');
        gridItem.classList.remove('comida');
    }
}

// limparGrid();
//Limpar o que fica para trás

let randomFood;
function getRandomFood(){
    return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}   


function baterParede(cobra) {
//Se bateres em ti próprio 
    for (let i = 1; i < corpoCobra.length; i++) {
        if(cobra[i].x === cobra[0].x && cobra[i].y === cobra[0].y){
            return true;
        }
     }
     // se bateres na parede
    if(cobra[0].x >= 18 || cobra[0].x <=0 || cobra[0].y >= 18 || cobra[0].y <=0){
        return true;
    }
}

let inputDir = {x: 0, y: 0}; 


Keyboard.Keymap = {
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    87: "W",
    83: "S",
    65: "A",
    68: "D"
  };

window.addEventListener('keydown', e =>{
    inputDir = {x: 0, y: 1} // Start the game
    switch (e.key) {
        case "ArrowUp" || "W":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown" || "S":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft" || "A":
             console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight" || "D":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
});











  

