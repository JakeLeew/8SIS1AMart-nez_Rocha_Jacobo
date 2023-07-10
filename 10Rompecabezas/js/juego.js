//vamos a crear un arreglo para contener las instrucciones

var instrucciones = ["Utiliza las flecas para mover las piezas", "Ordenar las piezas hasta alcanzar la imagen objetivo"];

//vamos a crar una varibale para guardar los movimientso

var movimientos = [];

var rompe = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]; 

var rompeCorrecta = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


//necesito una varible para guardar la posicion de la piesa vacia

var fliaVacia = 2;
var columnaVacia = 2;

//vamos a hacer una funcion para mostrar las instrucciones

function mostrarInstrucciones(instrucciones) {

    for(var i = 0;i < instrucciones.length; i++){

        mostrarInstruccionesEnLista(instrucciones[i],"lista-instrucciones");
    }
}

function mostrarInstruccionesEnLista(instruccion,idlista){

    var ul = document.getElementById(idlista);
    var li = document.createElement("li");
    li.textContent = instruccion;
    ul.appendChild(li);
}

function agrgarUltimoMovimiento(direccion){

    movimientos.push(direccion);
}

function checarsiGano(){
    for(var i = 0; i < rompe.length; i++){
        //comparar
        for(var j = 0; j < rompe[i].length; j++){

            var rompeActual = rompe[i][j];
            if(rompeActual !== rompe[i][j]){
                return false;
            }
        }
    }
}

function mostrarCartelGanador(){
    if(checarsiGano()){
        alert("Ha ganado mimir time")
    }
    return false;

}

//vamos a crear una funcion que se encarga del intercambio de las posiciones del rompecabezas
/*
arreglo [1][2] = arreglo [0][0]
arreglo [1][2] = arreglo [0][0]*/

function intercambiarPosiciones(filapos1, columnaPos1, filapos2, columnaPos2){

    var pos1 = rompe[filapos1][columnaPos1];
    var pos2 = rompe[filapos2][columnaPos2];

    rompe[filapos1][columnaPos1] = pos2;
    rompe[filapos2][columnaPos2] = pos1;
}

//tengo que saber dondne esta la vacia

function actualizarPosicion (nuevaFila, nuevaColumna){

    fliaVacia = nuevaFila;
    columnaVacia = nuevaColumna;
}

//tenemos que crear una funcion que se encargue de saber si la posicion es correcta

function posicionValida (fila, columna){
    return (fila >= 0 && fila <= 2 && columna >= o && columna <= 2);
}

//parte del movimiento que es por parte de las flechas hay que identificar el mov, arriba 38 abajo 40 izquierda 37 derecha 39

function moverEnDireccion(direccion){

    var nuevaFilaPiezaVacia;
    var nuevaColumnaPiezaVacia;

    //si se mueve hacia abajo
    if (direccion === coidgosDireccion.ABAJO){

        nuevaFilaPiezaVacia = fliaVacia + 1;
        nuevaColumnaPiezaVacia = columnaVacia;
    }

    //si se mueve hacia arriba
    else if(direccion === coidgosDireccion.ARRIBA){

        nuevaFilaPiezaVacia = fliaVacia - 1;
        nuevaColumnaPiezaVacia = columnaVacia;
    }

    //si se mueve a la izquierda
    else if(direccion === coidgosDireccion.IZQUIERDA){

        nuevaFilaPiezaVacia = fliaVacia ;
        nuevaColumnaPiezaVacia = columnaVacia - 1;
    }

    //si se meuve a la derecha
    else if(direccion === coidgosDireccion.DERECHA){

        nuevaFilaPiezaVacia = fliaVacia;
        nuevaColumnaPiezaVacia = columnaVacia + 1;
    }


    if(posicionValida(nuevaFilaPiezaVacia,nuevaColumnaPiezaVacia)){

        intercambiarPosiciones(fliaVacia,columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        //agregar el ultimo mov
        agregarUltimoMovimiento(direccion);
    }
}

//codigos de direccion
var coidgosDireccion = {
    IZQUIERDA : 37,
    ARRIBA : 38,
    DERECHA : 39,
    ABAJO : 40,

};

function intercambiarPosiciones(fila1, columna1, fila2, columna2){

    var pieza1 = rompe [fila1][columna1];
    var pieza2 = rompe [fila2][columna2];

    intercambiarPosicionesRompe(fila1,columna1,fila2,columna2);
    intercambiarPosicionesDOM('Pieza' + pieza1 + 'pieza' + pieza2);
}

function intercambiarPosicionesDOM (idPieza1, idPieza2){

    var elementoPieza1 = document.getElementById(idPieza1);
    var elementoPieza2 = document.getElementById(idPieza2);

    var padre = elementoPieza1.parentNode;

    var cloneElemento1 = elementoPieza1.cloneNode(true);
    var cloneElemento2 = elementoPieza2.cloneNode(true);

    padre.replaceChild(cloneElemento1, elementoPieza2);
    padre.replaceChild(cloneElemento2, elementoPieza1);
}

//necesito actualizar los movimientos 

function actualizarUltimoMovimiento(direccion){

    var ultimoMov = document.getElementById('flecha');
    switch(direccion){

        case coidgosDireccion.ARRIBA:
            ultimoMov.textContent = '↑';
            break;
        case coidgosDireccion.ABAJO:
            ultimoMov.textContent = '↓';
            break;
        case coidgosDireccion.DERECHA:
            ultimoMov.textContent = '→';
            break;
        case coidgosDireccion.IZQUIERDA:
            ultimoMov.textContent = '←';
            break;    
    }
}

function mezclaPiezas (veces){

    if(veces <= 0){
        return;
    }

    var direcciones = [coidgosDireccion.ABAJO,coidgosDireccion.ARRIBA,coidgosDireccion.IZQUIERDA,coidgosDireccion.DERECHA];

    var direccion = direcciones[Math.floor(Math.random() * direcciones.length)];

    moverEnDireccion(direccion);

    setTimeout(function(){
        mezclaPiezas(veces-1);
    }, 100);
}

//veces que el jugador a ingresado las teclas
function capturarTeclas (){

    document.body.onkeydown = direccion (function (evento){
        if(evento.which === coidgosDireccion.ABAJO || evento.which === coidgosDireccion.ARRIBA || evento.which === coidgosDireccion.IZQUIERDA || evento.which === coidgosDireccion.DERECHA){

            moverEnDireccion(evento.which);
            actualizarUltimoMovimiento(event.which);

            var gano = checarsiGano;
            if(gano){

                setTimeout(function(){
                    mostrarCartelGanador();
                },500);
            }

            evento.preventDefault;
        }
    });
}

function iniciar(){
    mezclaPiezas(30);
    capturarTeclas();
}

//ejecutar las funciones
iniciar();
mostrarInstrucciones(instrucciones);