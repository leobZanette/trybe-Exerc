// p1--------------------------------------------------------
const frutas = ['maça', 'laranja', 'melancia']

const outras = ['pera', 'kiwi', 'melao']

const fruitSalad = (fruit, adtional) => [...fruit, ...adtional];

console.log(fruitSalad(frutas, outras))

// p2---------------------------------------------------------

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};
const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const tudo = { ...user, ...jobInfos };

const texto = ({ name, age, nationality, profession, squad, squadInitials }) => `Hi, my name is ${name}, i am ${age} years old, and ${nationality}. i work as a ${profession}, and my squad is ${squadInitials}-${squad}`

console.log(texto(tudo))

// p3------------------------------------------------------
const saudacao = ['ola', (saudacao) => console.log(saudacao)];

const [param1, param2] = saudacao

param2(param1)

// p4--------------------------------------

let comida = 'gato';
let animal = 'agua';
let bebida = 'arroz';

[comida, bebida, animal] = [bebida, animal, comida]

console.log(comida, animal, bebida)

// p5----------------------------------------------------------------

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[, , , ...numerosPares] = numerosPares;

console.log(numerosPares)

// p6 -------------------------------------------------------------

const getNationality = ({ firstName, nationality = 'Brasilian' }) => `${firstName} is ${nationality}`;
const person = {
  firstName: 'João',
  lastName: 'Jr II',
};
const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

// p7------------------------------------------------------------

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude
});
console.log(getPosition(-19.8157, -43.9542));

// p8--------------------------------------

const multiply = (number, value = 1) => number * value

console.log(multiply(8))
