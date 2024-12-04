// 1. Construir un programa que reciba un número entero positivo no superior a 1.000.000.000 e indique si
// el número es primo. Por ejemplo: Dado el número 73 indicar true. Dado el número 35 indicar false

let numero = parseInt(prompt("Ingrese un número entero positivo no mayor a 1,000,000,000:"));

if (numero <= 0) {
    console.log("Debe ingresar un número entero positivo.");
} else if (numero <= 1 || numero > 1000000000) {
    console.log("El número debe ser mayor que 1 y no superar 1,000,000,000.");
} else {
    let esPrimo = true;

    if (numero === 2) {
        esPrimo = true; 
    } else if (numero % 2 === 0) {
        esPrimo = false; 
    } else {
        for (let i = 3; i * i <= numero; i += 2) {
            if (numero % i === 0) {
                esPrimo = false;
                break; 
            }
        }
    }

    console.log(`¿El número ${numero} es primo?: ${esPrimo}`);
}