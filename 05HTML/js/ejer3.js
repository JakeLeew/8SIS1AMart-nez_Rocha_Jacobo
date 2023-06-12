function calcularPrecioFinal() {
  var valor = document.getElementById("precioOriginal").value;
  
  // Verificar si se ingresaron valores no numéricos
  if (isNaN(parseFloat(valor))) {
    alert("Por favor, ingresa valores numéricos.");
    return;
  }
  
  // No se permiten números negativos
  if (valor.includes('-')) {
    alert('No se permiten números negativos.');
    return false;
  }
  
  // No se permiten números con doble punto
  if (valor.includes('..')) {
    alert('No se permiten números con doble punto.');
    return false;
  }
  
  // No se permiten letras
  if (/[a-zA-Z]/.test(valor)) {
    alert('No se permiten letras.');
    return false;
  }
  
  // No se permiten símbolos especiales
  if (/[^0-9.]/.test(valor)) {
    alert('No se permiten símbolos especiales.');
    return false;
  }

    var precioOriginal = parseFloat(document.getElementById("precioOriginal").value);
    var descuento = 0.15; // 15% de descuento

    var precioFinal = precioOriginal * (1 - descuento);

    document.getElementById("precioFinal").value = precioFinal.toFixed(2);
  }