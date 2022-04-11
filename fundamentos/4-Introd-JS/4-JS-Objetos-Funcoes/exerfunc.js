// 1 ---------------------------------------------------
// function ehPalindromo(a) {

//     let word = a
//     let arr = ""
//     for (i = (a.length - 1); i >= 0; i -= 1) {
//         arr += (a[i])
//     }
//     return word === arr
// }
// 2--------------------------------------------------------
// let a = [2, 4, 6, 7, 10,11, 0, -3]

// function indMaior(b) {
//     let maior = b[0];
//     for(i = 0; i < b.length; i+= 1) {
//         if (b[i] > maior) {
//             maior = b[i]
//         }
//     }
// console.log(b.indexOf(maior))
// }

// indMaior(a)
// 3-----------------------------------------------
// function indMenor(b) {
//     let menor = b[0];
//     for(i = 0; i < b.length; i+= 1) {
//         if (b[i] < menor) {
//             menor = b[i]
//         }
//     }
//     let iMenor = b.indexOf(menor) 
// console.log(iMenor)
// }

// indMenor(a)
// 4--------------------------------------------------------------
// let a = ['jose', 'lucas', 'nadia', 'fernanda', 'cairo', 'joana']

// function maiorNome(b) {
//     let maior = b[0]
//     for (i = 0; i < b.length; i += 1) {
//         if (b[i].length > maior.length) {
//             maior = b[i]
//         }
//     }
//     console.log(maior)
// }
// maiorNome(a)

// // 5 ------------------------------------------------------
let a = [2,3,2,5,8,2,3]

function rep (b) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumRepetido = 0;

    for (i in b) {
        let verificaNumero = b[i];
        for (i2 in b) {
            if( verificaNumero === b[i2]) {
                contNumero +=1;
            }
        }
    if(contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumRepetido = i;
    }
    contNumero = 0;
    }
    return b[indexNumRepetido];
}

console.log(rep(a))

// // 6 -------------------------------------------------
// function soma (a) {
//     let result = 0
//     for (i = 0; i <=a; i+=1) {
//         result += i
//     }
// console.log(result)
// }
// soma(5)


// 7 ----------------------------------------


