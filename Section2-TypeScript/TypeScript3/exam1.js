"use strict";
// Uso de Let y Const
console.log("#####################Uso de Let y Const#####################");
let nombre = "Angélica Mendoza";
let edad = 7;
const PERSONAJE = {
    nombre: nombre,
    edad: edad
};
console.log(PERSONAJE);
// Cree una interfaz que sirva para validar el siguiente objeto
console.log("#####################Cree una interfaz que sirva para validar el siguiente objeto#####################");
let batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
console.log(batman);
// Convertir esta funcion a una funcion de flecha
console.log("#####################Convertir esta funcion a una funcion de flecha#####################");
function resultadoDoble(a, b) {
    return (a + b) * 2;
}
let resultadoDoble2 = (a, b) => (a + b) * 2;
console.log(resultadoDoble2(1, 3));
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
console.log("#####################Función con parametros obligatorios, opcionales y por defecto#####################");
function getAvenger(nombre, poder, arma = "arco") {
    let mensaje;
    if (poder) {
        //mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
        mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
    }
    else {
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
    constructor(base, altura) {
        this.calcularArea = () => this.base * this.altura;
        this.base = base;
        this.altura = altura;
    }
}
let rectangulo = new Rectangulo(2, 6);
console.log(rectangulo.calcularArea());
