//vamos a crear una funcion que se encargue de aperturar la pagina y tome las dimensiones y se adecue al tamaño de la resolucion

window.onload = () => {
    //queremos que cargue un carrucel de imagenes 
    const imagenes = [
        //aqui es donde se incorporan las imagenes
        "https://images.alphacoders.com/127/1277109.jpg",
        "https://images4.alphacoders.com/801/80134.jpg",
        "https://images8.alphacoders.com/356/356391.jpg",
        "https://images8.alphacoders.com/371/371786.jpg"

    ];

    /*
    Vamos a crear unna API desde el DOM por que el DOM necesita apis para poder acceder a los elementos del html y para ello se debe de obtener los id de cada uno de los componentes
    */

    const display = document.getElementById ("display");
    const botones = Array.from(document.getElementsByName("boton"));
    const campoMensajes = document.getElementById("mensaje");
    const mesanjes = document.getElementById("mensajes");
    const colorValor = document.getElementById("colorValor");

    //vamos a necesitar crear una funcion que se encargue de ir al siguiente

    const imagenActual = 0;

    const imagenSiguiente = () => {
        //primero se accede al arreglo de las iamgenes actuales
        //quiere decir que es la posicion de una imagen -1 en este caso la posicion 3-1=2 que es la tercera
        if(imagenActual < imagenes.lenght -1){
            imagenActual ++;
        }else{
            imagenActual = 0;
        }
        display.src = imagenes[imagenActual];
    }

    const imagenAnterior = () => {
        if(imagenActual > 0){
            imagenActual --;
        }else{
            imagenActual = imagenes.lenght -1;
        }
        display.src = imagenes[imagenActual];
    }

    const pantallaCompleta = () => {
        //esta funcion es especial por que debe ser porgramada como una promesa, son solicitudes con el objeto request con la esperanza de que nos devuelva una respuesta en el caso x de tiempo asincrono
        display.requestFullscreen;
    }

    const mostrarMensaje = () => {
        //Para mostrar los mensajes es necesario modificar el comportamiento de los componentes del html, porque vamos a agregar nuevos componentes o nuevos comportamientos desde el JS
        //[+=] es un operador agrega o une
        mesanjes.innerHTML += `${campoMensajes.value} <br/>`
        campoMensajes.value = "";
        /*Si queremos agregar otros componentes del html, o queremos crear nuevos utilizmos
        createElemnet por ejemplo

        const lista = document.createElement("ul");
        const elementoLista = document.createElement("il");

        elemntoLista.onclick = pantallaCompleto;
        elemntoLista.innerHTML = `${campoMensajes.value}`;
        lista.append(elemtoLista);
        mensajes.append(lista)
        */

    }

    const cambiarColor = () => {
        colorValor.click();
    }

    const inicializar = () => {
        
        botones.find(boton => boton.id === "siguiente").onclick = imagenSiguiente;
        botones.find(boton => boton.id === "Anterior").onclick = imagenAnterior;
        botones.find(boton => boton.id === "pantallacompleta").onclick = pantallaCompleta;
        botones.find(boton => boton.id === "mostrarMensaje").onclick = mostrarMensaje;
        botones.find(boton => boton.id === "cambiarColor").onclick = cambiarColor;

        colorValor.onchange = () =>{
            mesanjes.style.color = colorValor.value;
        };

        display.src = imagenes[0];

    }

    inicializar();

}