let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('bem vinda ' + info.personagem)

info['recorrente'] = 'Sim'

//   console.log(info)

//   for (key in info) {
//       console.log(key)
//   }

//   for (key in info) {
//     console.log(info[key])
// }

// let info2 = {
//     personagem: 'Tio Patnhas',
//     origem: 'Crhistimas on bear',
//     nota: 'o ultimo macpatinhas',
//     recorrente: 'Sim',
// };

// for (key in info) {
//     for (chave in info2) {
//         if (key === chave) {
//             console.log(info[key] + info2[chave])
//         }
//     }
// }


let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};

leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter',
        autor: 'Jk',
        editora: 'rocco',
    },
)

console.log(leitor.livrosFavoritos)
console.log(leitor.livrosFavoritos.length)