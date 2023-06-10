function calcularSueldoFinal() {

  if (isNaN(parseFloat(sueldoBase, venta1, venta2, venta3))) {
    alert('La entrada esta vacia.');
    return false;
}

    var sueldoBase = parseFloat(document.getElementById("sueldoBase").value);
    var venta1 = parseFloat(document.getElementById("venta1").value);
    var venta2 = parseFloat(document.getElementById("venta2").value);
    var venta3 = parseFloat(document.getElementById("venta3").value);
    var comision = 0.10; // 10% de comisión

    var totalVentas = venta1 + venta2 + venta3;
    var comisiones = totalVentas * comision;
    var sueldoFinal = sueldoBase + comisiones;

    document.getElementById("sueldoFinal").value = sueldoFinal.toFixed(2);
  }