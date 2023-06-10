function validarNumeroEntero(input) {
    input.value = input.value.replace(/[^\d]/g, '');
    
    if (isNaN(parseFloat(calificacion1, calificacion2, calificacion3, calificacionFinal, trabajoFinal))) {
      alert('La entrada esta vacia.');
      return false;
    }
    
  }

  function calcularCalificacionFinal() {
    var calificacion1 = parseInt(document.getElementById("calificacion1").value);
    var calificacion2 = parseInt(document.getElementById("calificacion2").value);
    var calificacion3 = parseInt(document.getElementById("calificacion3").value);
    var examenFinal = parseInt(document.getElementById("examenFinal").value);
    var trabajoFinal = parseInt(document.getElementById("trabajoFinal").value);

    // Calcular el promedio de los tres parciales
    var promedioParciales = (calificacion1 + calificacion2 + calificacion3) / 3;

    // Calcular la calificación final
    var calificacionFinal =
      (promedioParciales * 0.55) +
      (examenFinal * 0.30) +
      (trabajoFinal * 0.15);

    document.getElementById("calificacion_final").value = calificacionFinal.toFixed(2);
  }