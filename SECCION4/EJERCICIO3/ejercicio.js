// 3. Se trata de implementar un programa que devuelva la cantidad de ocurrencias del dígito que más se repite en
// un número entero no negativo. Por ejemplo, para el caso de 343331 el número que más se repite es 3, por ende
// se debe devolver 4, que es la cantidad de ocurrencias del 3.

let numero = parseInt(prompt("Digite un número entero positivo:"));

if (numero <= 0) {
    console.log("Debe ingresar un número entero positivo.");
} else {
    let vecesRepeticiones = 0;
    let digitoMasRepetido = null;

    let numeroStr = numero.toString();

    for (let i = 0; i < numeroStr.length; i++) {
        let occurencias = 0;
        let digitoActual = numeroStr[i];

        for (let j = 0; j < numeroStr.length; j++) {
            if (digitoActual === numeroStr[j]) {
                occurencias++;
            }
        }

        if (occurencias > vecesRepeticiones) {
            vecesRepeticiones = occurencias;
            digitoMasRepetido = digitoActual;
        }
    }

    console.log(
        `El número que más se repite es ${digitoMasRepetido} con ${vecesRepeticiones} ocurrencias.`);
}

