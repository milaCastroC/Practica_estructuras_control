// 4. Construir un programa que reciba tres números de un dígito y los combine mostrando todos los posibles
// números pares que se pueden construir con estos tres.

let num1 = parseInt(prompt("Ingrese el primer número de un dígito:"));
let num2 = parseInt(prompt("Ingrese el segundo número de un dígito:"));
let num3 = parseInt(prompt("Ingrese el tercer número de un dígito:"));

if (num1 < 0 || num1 > 9 || num2 < 0 || num2 > 9 || num3 < 0 || num3 > 9) {
    console.log("Todos los números deben ser dígitos entre 0 y 9.");
} else {
    let resultado = false;

    if ((num1 * 100 + num2 * 10 + num3) % 2 === 0) {
        console.log(num1 * 100 + num2 * 10 + num3);
        resultado = true;
    }
    if ((num1 * 100 + num3 * 10 + num2) % 2 === 0) {
        console.log(num1 * 100 + num3 * 10 + num2);
        resultado = true;
    }
    if ((num2 * 100 + num1 * 10 + num3) % 2 === 0) {
        console.log(num2 * 100 + num1 * 10 + num3);
        resultado = true;
    }
    if ((num2 * 100 + num3 * 10 + num1) % 2 === 0) {
        console.log(num2 * 100 + num3 * 10 + num1);
        resultado = true;
    }
    if ((num3 * 100 + num1 * 10 + num2) % 2 === 0) {
        console.log(num3 * 100 + num1 * 10 + num2);
        resultado = true;
    }
    if ((num3 * 100 + num2 * 10 + num1) % 2 === 0) {
        console.log(num3 * 100 + num2 * 10 + num1);
        resultado = true;
    }

    if (!resultado) {
        console.log("No se pueden formar números pares con los dígitos proporcionados.");
    }
}