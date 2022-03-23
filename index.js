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

//Remover o que fica para trás
/*function limparGrid(){
    elementoCobra.classList.remove('cobra');
    elementoComida.classList.remove('comida');
}

limparGrid();*/
//Remover o que fica para trás

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
//Fazer a cobra movimentar de 1 em 1 segundos

/*function mudarDirecao(event) 
{  
   const LEFT_KEY = 37;
   const RIGHT_KEY = 39;
   const UP_KEY = 38;
   const DOWN_KEY = 40;
 
   const keyPressed = event.keyCode;
   const cima = dy === -10;
   const baixo = dy === 10;
   const direita = dx === 10;  
   const esquerda = dx === -10;
 
     if (keyPressed === LEFT_KEY && !direita)
     {    
          dx = -10;
          dy = 0;  
     }
 
     if (keyPressed === UP_KEY && !baixo)
     {    
          dx = 0;
          dy = -10;
     }
 
     if (keyPressed === RIGHT_KEY && !esquerda)
     {    
          dx = 10;
          dy = 0;
     }
 
     if (keyPressed === DOWN_KEY && !cima)
     {    
          dx = 0;
          dy = 10;
     }
}

mudarDirecao();

document.addEventListener("keydown", mudarDirecao);*/












  

