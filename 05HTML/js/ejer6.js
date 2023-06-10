const FechaNacimiento = document.getElementById("FechaNacimiento");
const edad = document.getElementById("edad"); //en este h1 es donde va a salir el output o la edad final

//lo siguiente es una funcion flecha y esta nos ayuda a poder hacer una funcion normal "mas corta" si se requiere, es para funciones cortas, por así decirlo ji

const calcularEdad=(FechaNacimiento)=>{
    const fechaActual=new Date(); //fecha actual con la instancia date
    const annoActual=parseInt(fechaActual.getFullYear()); //año actual 
    const mesActual=parseInt(fechaActual.getMonth()) + 1; //mes actual, se suma uno por que el retorno es en 0
    const diaActual=parseInt(fechaActual.getDate()); //dia actual

    // AAA-MM-DD
    //los const estan sujetos al formato de fecha que esta arriba
    //la extrancción de los valores de día, mes y año se realizan por posiciones de acuerdo al formato de fecha ya especificado

    const anoNacimiento = parseInt(String(FechaNacimiento).substring(0,4));
    const mesNacimiento = parseInt(String(FechaNacimiento).substring(5,7));
    const diaNacimiento = parseInt(String(FechaNacimiento).substring(8,10)); 

    //operación para la resta de años con el año ingresado
    let edad = annoActual-anoNacimiento;
    if(mesActual<mesNacimiento){
        edad--;
    }else if(mesActual===mesNacimiento){
        if (mesActual<diaNacimiento) {
            edad--;
        }
    }
    return edad;

}

window.addEventListener('load', function(){

    FechaNacimiento.addEventListener('change', function(){
        
        if(this.value){
            
            edad.innerText = `La edad es ${calcularEdad(this.value)} años`;
            
            // El formato ${marcador} nos permite insertar un valor dinámico en la cadena. Todo lo que hay dentro ${} es evaluado como JavaScript. Por ejemplo, podríamos escribir Se estima que la Tierra tiene ${edad + 10} mil millones de años. , y funcionaría como si hiciéramos const edad = 4.5 + 10; . 
            //El marcador ${} es donde se va a concatenar una variable que muestre la edad final, en este ejercicio               
            // si no es posible indicar el marcador es posible que no este escrito correctamente, entonces debemos usar " `` " que son *acentos graves* y así es como si permite indicar marcadores  
        }
    })
});