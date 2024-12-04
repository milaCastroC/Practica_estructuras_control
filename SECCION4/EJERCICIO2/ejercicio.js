// 2. Se denomina número reversible a aquél que al ser sumado a sí mismo tras invertir sus dígitos da
// como resultado un número en el que todos los dígitos son impares. Por ejemplo, el número 36 es reversible pues
// 36 + 63 = 99, y los dos dígitos de 99 son impares. También lo son el 409 y el 904. Crea un programa que reciba
// un número entre 0 y 999 y retorne como salida true si el número es reversible o false si no lo es.

let numero = parseInt(prompt("Ingrese un número entre 0 y 999:"));

if (numero < 0 || numero > 999) {
    console.log("Debe ingresar un número válido entre 0 y 999.");
} else {
    let invertido = 0;
    let temp = numero;
    while (temp > 0) {
        let digito = temp % 10;
        invertido = invertido * 10 + digito;
        temp = Math.floor(temp / 10);
    }

    let suma = numero + invertido;

    let esReversible = true;
    while (suma > 0) {
        let digito = suma % 10;
        if (digito % 2 === 0) {
            esReversible = false;
            break;
        }
        suma = Math.floor(suma / 10);
    }
    console.log(`¿El número ${numero} es reversible? ${esReversible}`);
}
