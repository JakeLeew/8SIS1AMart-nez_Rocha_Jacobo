function validarn(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
  
    if (teclado == 8) return true;
  
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
  
    return patron.test(codigo);
  }
  
  function interes() {
    var valor = document.getElementById("validarEntrada").value;
  
    // Verificar si se ingresaron valores no numéricos
    if (isNaN(parseFloat(valor))) {
      alert("Por favor, ingresa valores numéricos.");
      return;
    }
  
    var resul = parseFloat(valor);
    var interes = resul * 0.02;
    var total = interes + resul;
  
    document.getElementById("cantidadid").value = "$" + total.toFixed(2);
  }
  
  function borrar() {
    document.getElementById("cantidadid").value = "";
    document.getElementById("validarEntrada").value = "";
  }
  


//mscript existen 8 en total, estamos usando la versión 4 y vamos a ver la 6