/*

Las variables que se ocupan en js son 3:
 var -> de acuerdo a EJS6 esta siendo sustituida; pero es la de uso mas común para determinar una varibale es de acceso publico y privado
 let -> Es una variable protegida que solo funciona dentro de una función o declaración de código
 const -> la cual es un valor constante en todo el docuemento 

*/

/*
let = "x";

if (true) {
    const x = "y";
    console.log(x);
}

*/

//funcion flecha 
//es una funcion en js que a diferencia de una funcion normal no genera su propio contexto no maneja la palabra reservada (this) y necesita ser declarada antes de ser usada y no necesita de un return
/*
function sumarFuncionNormal(n1,n2) {
    return n1+n2;
}*/

//cuando usamos este tipo de comillas `` es para poder mandar a llamar relementos de nombres de funciones que van a ser evaluados y/o incorporar etiquetas de htl y css en js

//console.log(`realizaremos la suma de dos números (3,4): ${sumarFuncionNormal(3,4)}`);

/*

una funcion flecha tiene la siguiente estructura 

"cadena" -> id, clase, name, atributo

`` y "" es para el uso de id, clases, name

``es para incorporar codigo en html e invocar funciones

*/

/*
const sumarFuncionFlecha = (n1, n2) => n1+n2;

console.log(`Vamos a sumar 5 y 6: ${sumarFuncionFlecha(5,6)}`);
*/

/*si solamnete se usa un parametro
const cuadradoFuncionFlecha = n1 => n1**2;

console.log(`vamos a hacer una funcion cuadratica de 7: ${cuadradoFuncionFlecha(7)}`);
*/
const razarPerros = [

    "gran danes",
    "pastor aleman",
    "chihuahua",
    "belga",
    "pitbull",
    "dalmata",
    "san bernando",

]
/*
for (let indice = 0; indice <razarPerros.length; indice++){

    console.log(razarPerros[indice]);

}

for (const raza of razarPerros) {
    console.log(raza);   
}
*/
/*
for (const indice in razarPerros) {
    console.log(razarPerros[indice]);   
}*/

/*es la iteración de los elementos del arreglo de que no regresan nada

razarPerros.forEach((raza,indice,arregloOriginal) => console.log(raza));

razarPerros.forEach((raza) => console.log(raza));

*/

//funcion map es la que se encarga de iterer sobre los elementos de un arreglo y regresar un arreglo diferentes con el cual podemos hacer diferentes operaciones

//const razasDePerrosEnMayusculas = razarPerros.map ((raza, indice, arregloOriginal) => console.log(raza.toUpperCase()));
//const razasDePerrosEnMayusculas = razarPerros.map ((raza) => console.log(raza.toUpperCase()));

//FIND nos permite buscar un elemento dentro del arreglo y si lo encunetra, lo regresa y sino lanza un "undefinend"
/*
if(razarPerros.find((raza) => raza === "belga")){
    
    console.log("La raza se encuentra dentro del arreglo");
    console.log(razarPerros);

} else{

    razarPerros.push("belga");
    console.log("se a agregado la raza de perro en el arreglo");
    console.log(razarPerros);

}*/

//FINDINDEX es similar a la busqueda, pero en lugar de regresar el elemento, regresa su indice y si no lo encunetra nos deveuelve un -1 esta funcion es particularmente util si queremos modificar el elemento original dentro de un arreglo

const indiceChihuahua = razarPerros.findIndex((raza) => raza === "chihuahua");

//si no encuentra el nombre indicado con index
if (indiceChihuahua > -1) {
    
    //el resultado esperado si esta adentro del arreglo
    console.log(razarPerros[indiceChihuahua]);
    //aparte se agrega la raza es pequeña
    razarPerros[indiceChihuahua] += "(raza de perros pequeña y escandalosa)";
    console.log(razarPerros[indiceChihuahua]);
    console.log(razarPerros);
}else{

    console.log("No se encuentra en el arreglo");
}
