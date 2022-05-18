const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// ex2 ------------------------------------------------------------------------

const redNames = books.map((a) => a.author.name).reduce((acc, cur) => acc + ', ' + cur)

console.log(redNames)

// ex3 ----------------------------------------------------------------------

const idades = books.map((a) => a.releaseYear - a.author.birthYear);
const mediaAge = idades.reduce((a, c) => a + c) / idades.length

console.log(mediaAge)

// ex4 --------------------------------------------------------------

const maiorLivro = (acc, current) => (current.length > acc.length) ? current : acc
const nomeLivro = books.map((a) => a.name).reduce(maiorLivro)
const filtro = books.filter((a) => a.name === nomeLivro)

console.log(filtro)

// ex4 2

const nomeLivro2 = books.reduce((biggestBoook, currentBook) => (currentBook.author.name.length > biggestBoook.author.name.length) ? currentBook : biggestBoook)

console.log(nomeLivro2)

// ex5 --------------------------------------------------------

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const string = names.reduce((a, c) => a + c.split('').reduce((b, d) => (d === 'a' || d === 'A') ? b += 1 : b, 0), 0)

console.log(string)

// ex 6---------------------------------------------------------------------

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const mapa = students.map((value, index) => {
  return {
    name: value,
    average: (grades[index].reduce((a,c) => a+c))/grades[index].length
  }
})

console.log(mapa)