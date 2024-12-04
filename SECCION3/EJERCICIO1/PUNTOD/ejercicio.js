// d. La cadena tiene únicamente dos de las cuatro bases (seleccionadas aleatoriamente), pero indicando el
// porcentaje de la primera base seleccionada, de tal forma que el porcentaje de la segunda, sea el complemento
// para completar la longitud indicada. El programa debe impedir que el porcentaje ingresado sea menor a 0% y
// mayor al 99%. Para garantizar por lo menos un 1% para la segunda base. Si esta condición no se cumple, el
// programa debe informar y solicitar nuevamente los datos.
// Solicitar longitud de la cadena (debe ser múltiplo de 10)

let longitud = parseInt(prompt("Ingrese la longitud de la cadena:"));

let bases = ['A', 'T', 'C', 'G'];

let base1 = bases[Math.floor(Math.random() * bases.length)];
let base2;

do {
    base2 = bases[Math.floor(Math.random() * bases.length)];
} while (base2 === base1);

let porcentajeBase1 = parseInt(prompt("Ingrese el porcentaje para la primera base seleccionada (entre 1% y 99%):"));

while (porcentajeBase1 < 1 || porcentajeBase1 > 99) {
    porcentajeBase1 = parseInt(prompt("Porcentaje inválido. Ingrese un valor entre 1% y 99% para la primera base:"));
}

let porcentajeBase2 = 100 - porcentajeBase1;

let cantidadBase1 = Math.floor((porcentajeBase1 / 100) * longitud);
let cantidadBase2 = longitud - cantidadBase1; 

let cadenaADN = "";

for (let i = 0; i < cantidadBase1; i++) {
    cadenaADN += base1;
}

for (let i = 0; i < cantidadBase2; i++) {
    cadenaADN += base2;
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
