// 13. Devolver un triángulo como el siguiente, pedir el n. Concatenar todo en un String 
// n = 4
// *
// * *
// * * *
// * * * *
// * * *
// * *
// *

let n = parseInt(prompt("Ingrese el valor de n:"));
let resultado = "";

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        resultado += "* "; 
    }
    resultado += "\n";
}

for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        resultado += "* "; 
    }
    resultado += "\n";
}

console.log(resultado);
