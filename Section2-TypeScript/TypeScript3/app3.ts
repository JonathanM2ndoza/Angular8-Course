//Decoradores de Clases
console.log("#####################Decoradores de Clases#####################");

function console3(target:Function){
  console.log(target);
}

@console3
class Pet3 {
  name: string;
  age: number;
  certificate: boolean;

  constructor(name: string, age: number, certificate: boolean) {
    this.name = name;
    this.age = age;
    this.certificate = certificate;    
  }
}

