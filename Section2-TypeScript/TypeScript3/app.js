"use strict";
//Interfaces de TypeScript
console.log("#####################Interfaces de TypeScript#####################");
let amber = {
    name: "Amber",
    age: 3
};
function hello(pet) {
    console.log("function hello: " + pet.name);
}
function bye(pet) {
    console.log("function bye: " + pet.name);
}
hello(amber);
bye(amber);
