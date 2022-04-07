let number = [5,9,3,19,70,8,100,2,35,27];
let novo = [];

for(let i = 0; i < (number.length -1); i+= 1) { 
    let multi = number[i] * number[i+1]
    novo.push(multi)
}
novo.push((number[number.length-1]*2))
console.log(novo)
