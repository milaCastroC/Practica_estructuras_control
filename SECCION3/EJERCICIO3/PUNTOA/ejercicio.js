// a. Dada una cadena ingresada como constante en el programa, mostrarla en formato de frecuencia de
// bases consecutivas, es decir si la secuencia es "AAAGTCCAGGTTTT" la salida debe ser
// "A3,G1,T1,C2,A1,G2,T4"

const cadena = "AAAGTCCAGGTTTT";

let resultado = "";
let contador = 1;

for (let i = 1; i < cadena.length; i++) {
    if (cadena[i] === cadena[i - 1]) {
        contador++;
    } else {
        resultado += cadena[i - 1] + contador + ",";
        contador = 1;
    }
}

resultado += cadena[cadena.length - 1] + contador;

console.log("Frecuencia de bases consecutivas:", resultado);
