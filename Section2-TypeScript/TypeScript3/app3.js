"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decoradores de Clases
console.log("#####################Decoradores de Clases#####################");
function console3(target) {
    console.log(target);
}
let Pet3 = class Pet3 {
    constructor(name, age, certificate) {
        this.name = name;
        this.age = age;
        this.certificate = certificate;
    }
};
Pet3 = __decorate([
    console3
], Pet3);
