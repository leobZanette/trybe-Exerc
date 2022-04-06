let salarioBruto = 3000
let INSS;
let IR;


if (salarioBruto <=1556.94) {
    INSS = 0.08*salarioBruto
} else if (salarioBruto <= 2594.92) {
    INSS = 0.09*salarioBruto
} else if (salarioBruto <= 5189.82) {
    INSS = 0.11*salarioBruto
} else {
    INSS = 570.88
}

salarioBase = (salarioBruto - INSS)

if (salarioBase <=1903.98) {
    IR = 0
} else if (salarioBase <= 2826.65) {
    IR = 0.075*salarioBase-142.80
} else if (salarioBase <= 3751.05) {
    IR = 0.15*salarioBase-354.80
} else if (salarioBase<=4664.68) {
    IR =  0.225*salarioBase-636.13
} else { 
    IR = 0.275*salarioBase-869.36
}

salarioLiq = salarioBase-IR

console.log(INSS)
console.log(IR)
console.log(salarioLiq)