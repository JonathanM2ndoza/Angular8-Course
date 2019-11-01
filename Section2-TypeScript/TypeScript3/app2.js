"use strict";
//Definición de una clase básica en TypeScript
console.log("#####################Class TypeScript#####################");
class Pet2 {
    constructor(name, age, certificate) {
        this.name = name;
        this.age = age;
        this.certificate = certificate;
    }
}
let amber2 = new Pet2("Amber", 3, true);
console.log(amber2);
