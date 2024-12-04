// b. Determinar cuántas veces está la segunda secuencia dentro de la primera. Si no aparece debe imprimir 0.

const cadenaMayor = "ATGCTGACGTAAGTCTG";

let cadenaMenor = prompt("Ingrese la cadena menor:");

let contador = 0;

for (let i = 0; i <= cadenaMayor.length - cadenaMenor.length; i++) {
    let coincidencia = true;
    for (let j = 0; j < cadenaMenor.length; j++) {
        if (cadenaMayor[i + j] !== cadenaMenor[j]) {
            coincidencia = false;
            break;
        }
    }
    
    if (coincidencia) {
        contador++;
    }
}

console.log("Cantidad de veces que la cadena menor aparece en la cadena mayor:", contador);
