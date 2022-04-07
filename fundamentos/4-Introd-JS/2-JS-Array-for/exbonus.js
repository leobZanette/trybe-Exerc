let number = [5,9,3,19,70,8,100,2,35,27];
//ordenar em ordem crescente
for(i = 1; i < number.length; i +=1) {
    for(i2 = 0; i2 < i; i2+=1) {
        if(number[i] <number[i2]) {
            let position = number[i];
            number[i] = number[i2];
            number[i2] = position;
        }
    }
}

console.log(number)

for(i = 1; i < number.length; i +=1) {
    for(i2 = 0; i2 < i; i2+=1) {
        if(number[i] > number[i2]) {
            let position = number[i];
            number[i] = number[i2];
            number[i2] = position;
        }
    }
}
console.log(number)