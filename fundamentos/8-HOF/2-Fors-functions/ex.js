const emailList = [  '1@email','2email', '3email','4email']

const showEmailList = (email) => {
  console.log(`${email} esta cadastrado`)
}

emailList.forEach(showEmailList)
//-----------------------------------------------------------------------------
const numbers = [19,21,30,3,45,22,15];

const divisivelPor5 = numbers.find((number) => number % 5 === 0 && number % 3 === 0 )

console.log(divisivelPor5)

//---------------------------------------------------------------------------

const names = ['joao', 'irene', 'fernando', 'maria']

const nome5Letras = () =>  names.find((nome) => nome.length === 5)
  

console.log(nome5Letras())

//-----------------------------------------------

const musicas = [
  {id:'31031685', title: 'patita om c ,pç'},
  {id: '31031686', title: '2 jdsdskç-'},
  {id: '31031687', title: '3chacone dsdsdjsk'},
]

function findMusic(id) {

return musicas.find((musica) => musica.id === id)

}

console.log(findMusic('31031685'))

//-------------------------------------------------------------------

const names2 = ['mateus', 'ana','jose','claudia','bruna']

const hasName = (arr, name2) => arr.some((opa) => opa === name2)

console.log(hasName(names2,'aa'))

//----------------------------------------------------------------------

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((v) => v.age >= minimumAge)

console.log(verifyAges(people, 10));

//--------------------------------------------------------------------

const people2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// people2.sort(function(a,b){
//   if(a.age > b.age) {
//     return 1;
//   }
//   if(a.age < b.age) {
//     return -1
//   }
//   return 0
// })
people2.sort((a,b) => a.age - b.age)

console.log(people2);
people2.sort((a,b) => b.age - a.age)
console.log(people2);