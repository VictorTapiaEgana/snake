const SNAKE = $('#grid');
const SEGMENTO = 25;

const SnakeInitialPosition = 613;
let SnakeActualPosition = SnakeInitialPosition;

var SnakeNextPosition = 0;
var Velocidad = 120;
var ActualDirection = '';
var TamañoCola = 1 ;
var Intervalo = 0;
var Score  = 0;
var ArrayPocisiones = [SnakeInitialPosition];

const MAPA = [
               1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1,                
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
               1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1,                
];

$(document).ready(function () {    
   
    CrearMapa(MAPA)    
    PintarMapa(MAPA)    
    $('#613').addClass('snake-head')   
    GenerarGalleta()

});

function CrearMapa(arrayMap){

    for (var x = 0; x <=  arrayMap.length - 1 ;x++){
        
        arrayMap[x] === 1 
        ? $(SNAKE).append(`<div id=${x+1} class="pared"></div>`)
        : $(SNAKE).append(`<div id=${x+1} class="camino"></div>`);        

    }

}

let count = 1;

 function PintarMapa(arrayMap){

    for (var x= 0; x<= arrayMap.length-1; x++){

        if ($(`#${x}`).hasClass('camino')){

            if(count % 2){
                $(`#${x}`).addClass('verdeClaro')
            }else{
                $(`#${x}`).addClass('verdeOscuro')
            }

            count++;

        }

    };
}

function MoverSnake(direccion){

    switch (direccion) {

        case 'ArrowUp':

                if (!$(`#${SnakeActualPosition - SEGMENTO}`).hasClass('pared') 
                && (!$(`#${SnakeActualPosition - SEGMENTO}`).hasClass('snake'))){                         

                    SnakeNextPosition = SnakeActualPosition - SEGMENTO;

                }else{
                    GameOver()                   
                }  

            break;
        
        case 'ArrowDown':
            
                if (!$(`#${SnakeActualPosition + SEGMENTO}`).hasClass('pared') 
                && (!$(`#${SnakeActualPosition + SEGMENTO}`).hasClass('snake') )){       
                    SnakeNextPosition = SnakeActualPosition + SEGMENTO; 
                }else{
                    GameOver()                   
                }    

           break;
        
        case 'ArrowLeft':
            
                if (!$(`#${SnakeActualPosition - 1}`).hasClass('pared')
                && (!$(`#${SnakeActualPosition - 1}`).hasClass('snake') )){       
                    SnakeNextPosition = SnakeActualPosition - 1; 
                }else{
                    GameOver()                   
                }   

            break;
        
        case 'ArrowRight':
       
                if (!$(`#${SnakeActualPosition + 1}`).hasClass('pared')
                && (!$(`#${SnakeActualPosition + 1}`).hasClass('snake') )){       
                    SnakeNextPosition = SnakeActualPosition + 1; 
                }else{
                    GameOver()                   
                }  

           break;
    
        default:
           break;
    }   

    SnakeActualPosition =+SnakeNextPosition;               

    ArrayPocisiones.push(SnakeActualPosition)

    ComprobarGalleta()    

    ArrayPocisiones = ArrayPocisiones.slice(-TamañoCola);

    LimpiarTablero()

     for( var x=0; x<= ArrayPocisiones.length - 1; x++){

        if (x ===  ArrayPocisiones.length - 1) {
            $(`#${ArrayPocisiones[x]}`).addClass('snake-head')
        } else {
            $(`#${ArrayPocisiones[x]}`).addClass('snake')
        }
        
     }
}

$('body').on('keydown',(e)=> {

        if(ActualDirection != e.key){
                
                clearInterval(Intervalo)        
                $(`#score`).html(`Score : ${Score}`)        

                Intervalo =  setInterval( ()=>{              
                
                    MoverSnake(ActualDirection)  

                },Velocidad)

                ActualDirection = e.key    
        }   
   }
)

function GenerarGalleta(){

    var newGalleta = Math.floor(Math.random() * (MAPA.length-1))

    if($(`#${newGalleta}`).hasClass('pared') || $(`#${newGalleta}`).hasClass('snake') ){
        GenerarGalleta()
    }else{
        $(`#${newGalleta}`).addClass('galleta')
    }
}

function ComprobarGalleta(){
    
    if($(`#${SnakeNextPosition}`).hasClass('galleta')){
        $(`#${SnakeNextPosition}`).removeClass('galleta')
        TamañoCola ++;
        Score += 100;
        
        GenerarGalleta()
        Velocidad -= 3;        

        $(`#score`).html(`Score : ${Score}`)
    }
    
}

function LimpiarTablero (){
    for (var x= 0; x<= MAPA.length-1;x++){
        if( $(`#${x}`).hasClass('snake') || $(`#${x}`).hasClass('snake-head') ){
            $(`#${x}`).removeClass('snake')
            $(`#${x}`).removeClass('snake-head')
        }
    }
}

function GameOver () {

    clearInterval(Intervalo)    
    $(`#score`).html(`Puntaje Final "${Score}"`)
    
    LimpiarTablero()
    PintarMapa(MAPA)    
    
    $('#613').addClass('snake-head')   
    Score = 0;
    ArrayPocisiones = [];
    TamañoCola = 1;
    Velocidad = 120;

    alert(`💀 jugar otra vez?`)
}