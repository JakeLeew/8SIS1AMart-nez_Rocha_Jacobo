

function validarn(e){

    var teclado = (document.all)?e.keycode : e.which

    if (teclado == 8) return true;

    var patron = /[0-9\d .]/; //esto es una expresión regular en este caso va desde el 0 al 9 y toma los puntos y la letra d es digito o digit

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function interes(e){
    /*
    if (isNaN(parseFloat(validarEntrada))) {
        alert('La entrada esta vacia, por favor ingrese un número.');
        return false;
    }*/

    var valor = document.formulario.cantidad.value;
    var resul = parseInt(valor);
    var interes = resul*0.02;
    var total = interes + resul;
    
    document.formulario.sueldoid.value = "$" + total;

}

function borrar () {
    document.formulario.sueldoid.value = "";
    document.formulario.cantidad.value = "";
}


//mscript existen 8 en total, estamos usando la versión 4 y vamos a ver la 6