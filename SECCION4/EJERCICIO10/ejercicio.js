// 10. Haga un programa que diga si un número es o no perfecto. Un número N es perfecto si la suma de
// sus divisores (excluido el propio N) es N. por ejemplo 28 es perfecto, pues sus divisores (excluido el
// 28) son 1,2,4,7 y 14 su suma da 28.

let numero = parseInt(prompt("Ingrese un número para verificar si es perfecto:"));

if (numero <= 0) {
    console.log("El número debe ser mayor que 0.");
} else {
    let sumaDivisores = 0;

    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
    
    if (sumaDivisores === numero) {
        console.log(`${numero} es un número perfecto.`);
    } else {
        console.log(`${numero} no es un número perfecto.`);
    }
}
