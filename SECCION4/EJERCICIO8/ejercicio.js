// 8. Escriba un algoritmo que devuelva los primeros n términos de la siguiente serie: -2 , 6, -8, 12, -14, 18, …

let n = parseInt(prompt("Ingrese el número de términos de la serie que desea obtener:"));

if (n <= 0) {
    console.log("Debe ingresar un número positivo.");
} else {
    let serie = [];
    let valor = -2;

    for (let i = 0; i < n; i++) {
        serie.push(valor);
        
        if (valor < 0) {
            valor = valor - 4;
        } else {
            valor = valor + 4;
        }
    }

    let resultado = "";
    for (let i = 0; i < serie.length; i++) {
        if (i === serie.length - 1) {
            resultado += serie[i];
        } else {
            resultado += serie[i] + ", ";
        }
    }

    console.log(`Los primeros ${n} términos de la serie son: ${resultado}`);
}