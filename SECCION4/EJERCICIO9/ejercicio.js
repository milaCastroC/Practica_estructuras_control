// 9. Haga un método para descomponer un número en sus factores primos, retornando el resultado en
// forma de cadena.
let numero = parseInt(prompt("Ingrese un número para descomponer en factores primos:"));

if (numero <= 1) {
    console.log("El número debe ser mayor que 1.");
} else {
    let numeroOriginal = numero;
    let resultado = ""; 
    let primero = true;

    while (numero % 2 === 0) {
        if (!primero) {
            resultado += " * "; 
        }
        resultado += "2";
        numero = numero / 2;
        primero = false; 
    }

    let divisor = 3;
    while (divisor * divisor <= numero) {
        while (numero % divisor === 0) {
            if (!primero) {
                resultado += " * ";
            }
            resultado += divisor;
            numero = numero / divisor;
            primero = false; 
        }
        divisor += 2;
    }

    if (numero > 2) {
        if (!primero) {
            resultado += " * "; 
        }
        resultado += numero;
    }

    console.log(`Los factores primos de ${numeroOriginal} son: ${resultado}`);
}






