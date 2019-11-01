"use strict";
//Tipos de datos
console.log("#####################Tipos de datos#####################");
var name1 = "Amber";
var number1 = 3;
var boolean1 = true;
var today1 = new Date();
console.log(today1);
var anyone;
anyone = number1;
console.log(anyone);
var pet = {
    name: "Amber",
    age: 3
};
console.log("Name: " + pet.name + " | Edad: " + pet.age);
//Templates literales
console.log("#####################Templates literales#####################");
var template_texto = "Hello,\n" + name1 + " (" + number1 + ") ";
console.log(template_texto);
function getName() {
    return "Amber Mendoza";
}
var template_texto2 = "" + getName();
console.log(template_texto2);
//Funciones: parámetros opcionales, obligatorios y por defecto.
console.log("#####################Funciones y parámetros#####################");
//Parámetro Obligatorio
function hello(name) {
    var message;
    message = "Hello " + name;
    console.log(message);
}
hello("Angélica Mendoza");
//Parámetro por defecto
function hello2(name, city) {
    if (city === void 0) { city = "Caracas"; }
    var message;
    message = "Hello " + name + " vive en " + city;
    console.log(message);
}
hello2("Angélica Mendoza");
//Parámetro opcional
function hello3(name, city, country) {
    if (city === void 0) { city = "Caracas"; }
    var message;
    if (country)
        message = "Hello " + name + " vive en " + city + " , Pais: " + country;
    else
        message = "Hello " + name + " vive en " + city;
    console.log(message);
}
hello3("Angélica Mendoza", "Tahona", "Venezuela");
//Funciones Lambda
console.log("#####################Funciones Lambda#####################");
var pet2 = {
    name: "Amber",
    bark: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.name); }, 1500);
    }
};
pet2.bark();
