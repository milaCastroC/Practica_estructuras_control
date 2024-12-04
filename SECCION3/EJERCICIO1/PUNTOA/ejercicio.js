// a. La cadena está formada por una única base: Adenina (A), Timina (T), Citosina (C) o Guanina (G),
// según se indique al momento de ejecutar el programa.

let longitud = parseInt(prompt("Ingrese la longitud de la cadena:"));
let base = prompt("Ingrese la base (A, T, C, G):").toUpperCase();

if (["A", "T", "C", "G"].includes(base)) {
    let cadena = '';
    for (let i = 0; i < longitud; i++) {
        cadena += base;
    }
    console.log(cadena);
} else {
    console.log("Base no válida. Ingrese A, T, C o G.");
}



