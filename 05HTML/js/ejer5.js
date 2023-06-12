function validarEntrada(e) {
  var teclado = (document.all) ? e.keyCode : e.which;

  if (teclado == 8) return true;

  var patron = /^[0-9]+(\.[0-9]*)?$/;
  var codigo = String.fromCharCode(teclado);
  var valido = patron.test(codigo);

  if (!valido) {
    e.preventDefault();
    return false;
  }

  return valido;
}


function calcularPorcentaje() {
    var hombresCount = parseFloat(document.getElementById("hombres").value);
    var mujeresCount = parseFloat(document.getElementById("mujeres").value);
    var totalStudents = hombresCount + mujeresCount;

    if (isNaN(hombresCount) || isNaN(mujeresCount)){
      alert("Ingrese cantidades numéricas positivas.");
      return;
    }

    if (hombresCount < 0 || mujeresCount < 0){
      alert("Ingrese números positivos.")
      return;
    }

    
    var hombresPorcentaje = (hombresCount / totalStudents) * 100;
    var mujeresPorcentaje = (mujeresCount / totalStudents) * 100;

    document.getElementById("resultHombres").value = hombresPorcentaje.toFixed(2) + "%";
    document.getElementById("resultMujeres").value = mujeresPorcentaje.toFixed(2) + "%";
  }
  
  //--------------------------
  /*
  function calcularPorcentaje() {
    var hombres = parseFloat(document.getElementById("hombres").value);
    var mujeres = parseFloat(document.getElementById("mujeres").value);
    var totalAlumnos = hombres + mujeres;
    
    if (isNaN(hombres) || isNaN(mujeres)) {
        alert("Por favor, ingresa valores numéricos.");
        return;
    }

    if (hombres < 0 || mujeres < 0){
      alert("Ingrese números positivos.")
      return;
    }
    
    var porcentajeHombres = (hombres / totalAlumnos) * 100;
    var porcentajeMujeres = (mujeres / totalAlumnos) * 100;
    
    document.getElementById("resultHombres").value = porcentajeHombres.toFixed(2) + "%";
    document.getElementById("resultMujeres").value = porcentajeMujeres.toFixed(2) + "%";
}

  
*/