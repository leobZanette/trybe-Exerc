//1

// let result = 1
// let x = 5

// for(let i = x; i > 0; i-=1) {
//  result *= i;
//  }

//  console.log(result)
//-----------------------------------------


//2

// let word = 'leo'
// let arr = ""

// for(i = (word.length-1); i >= 0; i-=1) {
// arr += (word[i])
// }

// console.log(arr)

//-------------------------------------------------

//3

// let arr = ['java', 'javascript','pithon','html', 'css']
// let maior = arr[0];
// let menor = arr[0];

// for(i = 0; i < arr.length; i+= 1) {
//     if (arr[i].length > maior.length) {
//         maior = arr[i]
//     }
// }

// for(i = 0; i < arr.length; i+= 1) {
//     if (arr[i].length < menor.length) {
//         menor = arr[i]
//     }
// }

// console.log(maior);
// console.log(menor);

//-----------------------------------------

// 4

let numerosPrimos = []
let maiorPrimo = 0

for (i = 1; i <= 50; i += 1) {
    let nPrimo = true
    for (a = 2; a < i; a += 1) {
        if (i % a === 0) {
            nPrimo = false
        }
    }
    if (nPrimo) {
        maiorPrimo = i
    }
}
console.log(maiorPrimo)