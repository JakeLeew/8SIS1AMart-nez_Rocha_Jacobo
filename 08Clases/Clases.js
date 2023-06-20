


class FiguraGeometrica {
    constructor() {
      // puede o no tener una implementación
    }
  
    // métodos
    area() {
      // método que se encarga de calcular el área
    }
  
    perimetro() {
      // método para calcular perímetros
      console.log('Este método calcula el perímetro');
    }
  }
  
  class Rectangulo extends FiguraGeometrica {
    constructor(base, altura) {
      super();
      this._base = base;
      this._altura = altura;
      this._area = null;
      this._perimetro = null;
      this._actualizarArea = true;
      this._actualizarPerimetro = true;
    }
  
    set altura(altura) {
      this._altura = altura;
      this._actualizarArea = true;
      this._actualizarPerimetro = true;
    }
  
    set base(base) {
      this._base = base;
      this._actualizarArea = true;
      this._actualizarPerimetro = true;
    }
  
    get area() {
      if (this._actualizarArea || this._area === null) {
        this._area = this.calcularArea();
        this._actualizarArea = false;
      }
      return this._area;
    }
  
    get perimetro() {
      if (this._actualizarPerimetro || this._perimetro === null) {
        this._perimetro = this.calcularPerimetro();
        this._actualizarPerimetro = false;
      }
      return this._perimetro;
    }
  
    // métodos
    calcularArea() {
      console.log(this._base);
      console.log(this._altura);
      return this._base * this._altura;
    }
  
    calcularPerimetro() {
      console.log(this._base);
      console.log(this._altura);
      return 2 * (this._base + this._altura);
    }
  }
  
  const objetoRectangulo = new Rectangulo(2, 5);
  console.log(objetoRectangulo.calcularArea());
  console.log(objetoRectangulo.calcularPerimetro());
  

//spread
/* 
Es una sintaxis que nos permite a un elemento iterable (arreglo, atiz, vector, cadena) porder desde 0 ocntar los argumanetos que pasan por dicho elemento 
*/

const arregloOrdenadoDeMayorAMenor = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

console.log(`arreglo ordenado ${arregloOrdenadoDeMayorAMenor}`);

//supongamos que podemor obtener tantas varibales del arreglo como deseemos apartir del patron

const [valorMasGrande] = arregloOrdenadoDeMayorAMenor;
console.log(`Valor mas grande: ${valorMasGrande}`);

//Vamos a obtener el resto de valores 

const[valorMasGrande1, valorMasGrande2,valorMasGrande3, ...restoValores] = arregloOrdenadoDeMayorAMenor;
console.log(`VMG1, VMG2, VMG3, ...Resto : ${valorMasGrande1}, ${valorMasGrande2}, ${valorMasGrande3}, ${restoValores}`);

const resultadoDeBusqueda = {
    resultados:[
        "resultado1",
        "resultado2",
        "resultado3",
        "resultado4",
        "resultado5",
        "resultado6",
        "resultado7",
        "resultado8",
        "resultado9",
        "resultado10",
    ],
    total: 7,
    mejorCoincidencia: "resultados"
};

console.log(`Resultado de la busqueda : ${resultadoDeBusqueda}`);

const {mejorCoincidencia} = resultadoDeBusqueda;
 
//vamos a suponer que queremos cambiar el nombre derivado a que necesitamos mantener la persistencia de l codigo acorde a una nomeclatura

console.log(`Mejor coincidencia : ${mejorCoincidencia}`);

const copiaResultadoDeBusqueda = {... resultadoDeBusqueda};

//vamos a modificarlos

const copiaResultadoDeBusquedaModificar = {... resultadoDeBusqueda, cadenaBuscada : "resultado3"};

console.log(`Copia modificada : ${copiaResultadoDeBusquedaModificar}`);









