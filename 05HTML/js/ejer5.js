
function validarNumeroEntero(input) {
    input.value = input.value.replace(/[^\d]/g, ''); // Remover cualquier caracter no numérico
  }

function calcularPorcentaje() {
    var hombresCount = parseInt(document.getElementById("hombres").value);
    var mujeresCount = parseInt(document.getElementById("mujeres").value);

    var totalStudents = hombresCount + mujeresCount;
    var hombresPorcentaje = (hombresCount / totalStudents) * 100;
    var mujeresPorcentaje = (mujeresCount / totalStudents) * 100;

    document.getElementById("resultH").value = hombresPorcentaje.toFixed(2) + "%";
    document.getElementById("resultM").value = mujeresPorcentaje.toFixed(2) + "%";
  }
  
