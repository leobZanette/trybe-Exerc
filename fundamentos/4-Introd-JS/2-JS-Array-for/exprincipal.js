let number = [5,9,3,19,70,8,100,2,35,27];


for (let i = 0; i < number.length; i +=1) {
    console.log(number[i]);
}

let result =0;
for (let i = 0; i < number.length; i +=1) {
    result += number[i];
}
console.log(result)




let media = result / number.length
console.log(media)

if (media > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor igual a 20');
}




let qtdimpar=0;

for (let i = 0; i < number.length; i +=1) {
    if ((number[i]%2) !==0) { 
        qtdimpar += 1
    }
}
console.log(qtdimpar)



let maior = number[0]

for (let i=0; i<number.length; i+=1) {
    if (number[i] > maior) {
        maior = number[i];
    }
}
console.log(maior)


let menor = number[0]

for (let i=0; i<number.length; i+=1) {
    if (number[i] < menor) {
        menor = number[i];
    }
}
console.log(menor)

let arr = []

for (i = 1; i <=25; i +=1) {
    arr.push(i);
}
console.log(arr);

for (i = 0; i <25; i+=1) {
    console.log(arr[i]/2)
}