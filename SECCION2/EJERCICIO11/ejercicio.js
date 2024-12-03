// 11. Cree un programa que muestre el promedio de n números, dejándose de solicitar números
// cuando se introduzca el cero.

let suma = 0;
let cantidadNumeros = 0;

while (true) {
    let numero = parseFloat(prompt("Ingrese un número (0 para finalizar): "));
    
    if (numero === 0) {
        break; 
    }
    
    suma += numero;
    cantidadNumeros++;
}

if (cantidadNumeros > 0) {
    let promedio = suma / cantidadNumeros; 
    console.log(`El promedio de los ${cantidadNumeros} números ingresados es: ${promedio}`);
} else {
    console.log("No se ingresaron números.");
}
