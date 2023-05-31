// JavaScript es multiparadigmático, vamos a iniciar con la programación por funciones

function validar(formulario) {
    // Existen varias formas de obtener los parámetros del formulario
        
    if (formulario.nombre.value.length <= 3) {
        alert("Escriba más de 3 caracteres en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    // Esta verificación es para asegurarse de que solo se ingresen letras en el campo nombre
    var checkok = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var checkstring = formulario.nombre.value;
    var todoEsValido = true;

    for (var i = 0; i < checkstring.length; i++) {
        var ch = checkstring.charAt(i);

        if (checkok.indexOf(ch) === -1) {
            todoEsValido = false;
            break;
        }
    }

    if (!todoEsValido) {
        alert("Escriba solamente letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    // Esta verificación es para asegurarse de que solo se ingresen números en el campo edad
    var checkstring = formulario.edad.value;
    var todoEsValido = true;

    for (var i = 0; i < checkstring.length; i++) {
        var ch = checkstring.charAt(i);

        if (isNaN(ch)) {
            todoEsValido = false;
            break;
        }
    }

    if (!todoEsValido) {
        alert("Escriba solamente números en el campo edad");
        formulario.edad.focus();
        return false;
    }

    var txt = formulario.email.value;
    var emailRegex = /\S+@\S+\.\S+/; // La estructura es simple: antes del arroba "algo", luego el "arroba", después "algo" y al final "." después "algo"

    alert("Email" + (emailRegex.test(txt) ? " " : " no ") + "válido");

    return emailRegex.test(txt);
}
