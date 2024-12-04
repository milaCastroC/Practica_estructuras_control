// a. Determinar la primera posición en la que la segunda secuencia está dentro de la primera. Si no aparece debe
// imprimir -1.

const cadenaMayor = "ATGCTGACGTAAGTCTG";

let cadenaMenor = prompt("Ingrese la cadena menor:");

let encontrado = false;
let posicion = -1;

for (let i = 0; i <= cadenaMayor.length - cadenaMenor.length; i++) {
    let coincidencia = true;
    for (let j = 0; j < cadenaMenor.length; j++) {
        if (cadenaMayor[i + j] !== cadenaMenor[j]) {
            coincidencia = false;
            break;
        }
    }
    
    if (coincidencia) {
        posicion = i;
        encontrado = true;
        break;
    }
}

if (encontrado) {
    console.log("Primera posición donde aparece la cadena menor:", posicion);
} else {
    console.log("Primera posición donde aparece la cadena menor: -1");
}
