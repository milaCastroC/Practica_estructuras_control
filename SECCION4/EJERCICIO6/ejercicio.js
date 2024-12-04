// 6. Construya un programa que dados dos números enteros, encuentre su cociente mediante restas sucesivas

let dividendo = parseInt(prompt("Ingrese el dividendo (número entero):"));
let divisor = parseInt(prompt("Ingrese el divisor (número entero):"));

if (divisor === 0) {
    console.log("El divisor no puede ser cero.");
} else if (dividendo < 0 || divisor < 0) {
    console.log("Por favor, ingrese números enteros positivos.");
} else {
    let cociente = 0;
    let resta = dividendo;

    while (resta >= divisor) {
        resta -= divisor;
        cociente++;
    }

    console.log(`El cociente de ${dividendo} dividido entre ${divisor} es: ${cociente}`);
}