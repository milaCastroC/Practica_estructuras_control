// 12. Hallar el mcm de dos números.

let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));

if (num1 <= 0 || num2 <= 0) {
    console.log("Por favor ingrese números enteros positivos.");
} else {
    let a = num1;
    let b = num2;

    while (b !== 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }

    let mcd = a; 

    let mcm = (num1 * num2) / mcd;

    console.log(`El MCM de ${num1} y ${num2} es: ${mcm}`);
}

