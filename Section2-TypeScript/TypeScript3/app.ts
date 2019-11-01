//Interfaces de TypeScript
console.log(
  "#####################Interfaces de TypeScript#####################"
);

interface Pet {
  name: string;
  age: number;
}

let amber: Pet = {
  name: "Amber",
  age: 3
};

function hello(pet: Pet) {
  console.log("function hello: " + pet.name);
}

function bye(pet: Pet) {
  console.log("function bye: " + pet.name);
}

hello(amber);
bye(amber);
