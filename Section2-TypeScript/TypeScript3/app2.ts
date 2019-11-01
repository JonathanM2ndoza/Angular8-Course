//Definición de una clase básica en TypeScript
console.log("#####################Class TypeScript#####################");

class Pet2 {
  name: string;
  age: number;
  certificate: boolean;

  constructor(name: string, age: number, certificate: boolean) {
    this.name = name;
    this.age = age;
    this.certificate = certificate;
  }
}

let amber2: Pet2 = new Pet2("Amber", 3, true);
console.log(amber2);
