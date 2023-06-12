function calcularSueldoFinal() {
  var sueldoBase = parseFloat(document.getElementById("sueldoBase").value);
  var venta1 = parseFloat(document.getElementById("venta1").value);
  var venta2 = parseFloat(document.getElementById("venta2").value);
  var venta3 = parseFloat(document.getElementById("venta3").value);

  // Verificar si se ingresaron valores no numéricos
  if (isNaN(sueldoBase) || isNaN(venta1) || isNaN(venta2) || isNaN(venta3)) {
    alert("Por favor, ingresa valores numéricos.");
    return;
  }

  // Verificar si se ingresaron valores negativos
  if (sueldoBase < 0 || venta1 < 0 || venta2 < 0 || venta3 < 0) {
    alert("Los valores no pueden ser negativos.");
    return;
  }

  var comision = 0.10; // 10% de comisión

  var totalVentas = venta1 + venta2 + venta3;
  var comisiones = totalVentas * comision;
  var sueldoFinal = sueldoBase + comisiones;

  // Verificar si el resultado es NaN
  if (isNaN(sueldoFinal)) {
    alert("Ha ocurrido un error en el cálculo.");
    return;
  }

  document.getElementById("sueldoFinal").value = sueldoFinal.toFixed(2);
}
