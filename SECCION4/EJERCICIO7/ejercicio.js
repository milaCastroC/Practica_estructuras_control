// 7. Escriba un algoritmo que calcule la potencia de 𝑎𝑏 potencial = a * a * a * ... * a (b veces)

let base = parseInt(prompt("Ingrese la base (número entero):"));
let exponente = parseInt(prompt("Ingrese el exponente (número entero):"));

if (exponente < 0) {
    console.log("El exponente debe ser un número entero y tampoco puede ser negativo.");
} else {
    let resultado = 1;

    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }

    console.log(`El resultado de ${base} elevado a la potencia ${exponente} es: ${resultado}`);
}