const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
// let newKey = 'lastName';
// const lastName = 'Ferreira';
// customer[newKey] = lastName;
// newKey = 'fullName';
// const fullName = `${customer.firstName} ${customer.lastName}`;
// customer[newKey] = fullName;
// console.log(customer);

const incluirChave = (objeto, chave, valor) => {
  objeto[chave] = valor;
  return objeto;
}

console.log(incluirChave(customer,'lastName','Ferreira'))






const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};
// for (const property in coolestTvShow) {
//   console.log(property);
// }
console.log(Object.keys(coolestTvShow));
// [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]






const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};
const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (const index in arrayOfSkills) {
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};
console.log('Estudante 1');
listSkills(student1);
console.log('Estudante 2');
listSkills(student2);

const person = {
  name:'Roberto',
};
const lastName = {
  lastName: 'Silva',
};
const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);