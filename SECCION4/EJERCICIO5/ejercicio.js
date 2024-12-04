// 5. Construya un programa que dado un número n, calcule el resultado de la serie: 
// x= 1/2 + 1/3 - 1/3 +1/4+1/5 - 1/6 + 1/7 + 1/8 - 1/9 +- 1/n

let n = parseInt(prompt("Ingrese un número n:"));

let resultado = 0;

for (let i = 2; i <= n; i++) {
    if (i % 3 === 0) {
        resultado -= 1 / i;
    } else {
        resultado += 1 / i;
    }
}

console.log(`El resultado de la serie es: ${resultado}`);