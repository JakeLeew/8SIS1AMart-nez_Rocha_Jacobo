//javascript es multiparadigmico vamos a iniciar a la programación por funciones

function validar(formulario) {
    //existen varias formas de obtner los parametros del formulario
        
    if (formulario.nombre.value.length <= 3) {
        alert("Escriba mas de 3 caracteres en el campo nombre");
        formulario.nombre.focus();

    }
}