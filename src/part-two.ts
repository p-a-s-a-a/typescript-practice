enum Profession {
  Actress,
  Baker
}

type Person = {
  name: string,
  age: number,
  profession: Profession
}

let person0: Person = {
  name: 'mary',
  age: 29,
  profession: Profession.Actress
};

let person1: Person = {
  name: 'robert',
  age: 19,
  profession: Profession.Baker
};

let person2: Person = {
  name: 'laura',
  age: 32,
  profession: Profession.Actress
};

let pperson3: Person = {
  name: "karl",
  age: 19,
  profession: Profession.Baker
}