function validarNumeroEntero() {
  var entrada = document.getElementById('entrada').value;

  if (isNaN(parseFloat(precioOriginal))) {
    alert('La entrada esta vacia.');
    return false;
  }
  
  // No se permiten números negativos
  if (entrada.includes('-')) {
    alert('No se permiten números negativos.');
    return false;
  }
  
  // No se permiten números con doble punto
  if (entrada.includes('..')) {
    alert('No se permiten números con doble punto.');
    return false;
  }
  
  // No se permiten letras
  if (/[a-zA-Z]/.test(entrada)) {
    alert('No se permiten letras.');
    return false;
  }
  
  // No se permiten símbolos especiales
  if (/[^0-9.]/.test(entrada)) {
    alert('No se permiten símbolos especiales.');
    return false;
  }
  
  return true;
}

function calcularPrecioFinal() {
    var precioOriginal = parseFloat(document.getElementById("precioOriginal").value);
    var descuento = 0.15; // 15% de descuento

    var precioFinal = precioOriginal * (1 - descuento);

    document.getElementById("precioFinal").value = precioFinal.toFixed(2);
  }