// c. La cadena tiene una longitud múltiplo de 10 y la distribución de las bases debe respetar que: la
// cantidad de Citosina (C) es cuatro veces la cantidad de Guanina, Timina (T) es dos veces la cantidad de
// Guanina y Adenina (A) es tres veces la cantidad de Guanina. La cadena debe tener cuatro bases.
// El programa debe garantizar que el usuario ingrese una longitud múltiplo de 10. Si esta condición no se
// cumple, el programa debe informar y solicitar nuevamente los datos.

let longitud = parseInt(prompt("Ingrese la longitud de la cadena (múltiplo de 10):"));

while (longitud % 10 !== 0) {
    longitud = parseInt(prompt("Ingrese la longitud de la cadena (múltiplo de 10):"));
}

let cantidadGuanina = longitud / 10;
let cantidadCitosina = 4 * cantidadGuanina;
let cantidadTimina = 2 * cantidadGuanina;
let cantidadAdenina = 3 * cantidadGuanina;

let cadena = "";

for (let i = 0; i < cantidadAdenina; i++) {
    cadenaADN += 'A';
}

for (let i = 0; i < cantidadTimina; i++) {
    cadenaADN += 'T';
}

for (let i = 0; i < cantidadCitosina; i++) {
    cadenaADN += 'C';
}

for (let i = 0; i < cantidadGuanina; i++) {
    cadenaADN += 'G';
}

let cadenaArray = [];
for (let i = 0; i < cadenaADN.length; i++) {
    cadenaArray[i] = cadenaADN.charAt(i);
}

for (let i = cadenaArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = cadenaArray[i];
    cadenaArray[i] = cadenaArray[j];
    cadenaArray[j] = temp;
}

let cadenaFinal = "";
for (let i = 0; i < cadenaArray.length; i++) {
    cadenaFinal += cadenaArray[i]; 
}

console.log("Cadena de ADN generada:", cadenaFinal);
