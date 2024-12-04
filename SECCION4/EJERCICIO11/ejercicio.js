// 11. Calcular el MCD de dos números.

let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));

if (num1 <= 0 || num2 <= 0) {
    console.log("Por favor ingrese números enteros positivos.");
} else {
    while (num2 !== 0) {
        let resto = num1 % num2;
        num1 = num2;
        num2 = resto;
    }

    console.log(`El MCD de los dos números es: ${num1}`);
}
