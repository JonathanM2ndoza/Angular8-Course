//Tipos de datos
console.log("#####################Tipos de datos#####################");
let name1: string = "Amber";
let number1: number = 3;
let boolean1: boolean = true;

let today1: Date = new Date();
console.log(today1);

let anyone: any;
anyone = number1;
console.log(anyone);

let pet = {
  name: "Amber",
  age: 3
};

console.log("Name: " + pet.name + " | Edad: " + pet.age);

//Templates literales
console.log("#####################Templates literales#####################");
let template_texto = `Hello,
${name1} (${number1}) `;
console.log(template_texto);

function getName() {
  return "Amber Mendoza";
}
let template_texto2 = `${getName()}`;
console.log(template_texto2);

//Funciones: parámetros opcionales, obligatorios y por defecto.
console.log("#####################Funciones y parámetros#####################");

//Parámetro Obligatorio
function hello(name: string) {
  let message: string;
  message = `Hello ${name}`;
  console.log(message);
}
hello("Angélica Mendoza");

//Parámetro por defecto
function hello2(name: string, city: string = "Caracas") {
  let message: string;
  message = `Hello ${name} vive en ${city}`;
  console.log(message);
}
hello2("Angélica Mendoza");

//Parámetro opcional
function hello3(name: string, city: string = "Caracas", country?: string) {
  let message: string;

  if (country) 
      message = `Hello ${name} vive en ${city} , Pais: ${country}`;
  else 
      message = `Hello ${name} vive en ${city}`;

  console.log(message);
}
hello3("Angélica Mendoza","Tahona","Venezuela");
