// Uso de Let y Const
console.log("#####################Uso de Let y Const#####################");
let nombre: string = "Angélica Mendoza";
let edad: number = 7;

const PERSONAJE: { nombre: string; edad: number } = {
  nombre: nombre,
  edad: edad
};

console.log(PERSONAJE);

// Cree una interfaz que sirva para validar el siguiente objeto
console.log(
  "#####################Cree una interfaz que sirva para validar el siguiente objeto#####################"
);
interface Hero {
  nombre: string;
  artesMarciales: string[];
}

let batman: Hero = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
console.log(batman);

// Convertir esta funcion a una funcion de flecha
console.log(
  "#####################Convertir esta funcion a una funcion de flecha#####################"
);
function resultadoDoble(a: number, b: number) {
  return (a + b) * 2;
}

let resultadoDoble2 = (a: number, b: number): number => (a + b) * 2;
console.log(resultadoDoble2(1, 3));

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
console.log(
  "#####################Función con parametros obligatorios, opcionales y por defecto#####################"
);
function getAvenger(nombre: string, poder?: string, arma: string = "arco") {
  let mensaje: string;
  if (poder) {
    //mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
  } else {
    //mensaje = nombre + " tiene un " + poder;
    mensaje = `${nombre} tiene un ${poder}`;
  }
  return mensaje;
}
console.log(getAvenger("Thor", "Trueno", "Martillo"));

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

console.log("#####################Clases#####################");

class Rectangulo {
  base: number;
  altura: number;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }

  calcularArea = (): number => this.base * this.altura;
}

let rectangulo: Rectangulo = new Rectangulo(2, 6);
console.log(rectangulo.calcularArea());
