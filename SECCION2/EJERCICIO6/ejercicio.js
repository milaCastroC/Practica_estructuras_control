// 6. Cree un programa que calcula la suma de los primeros n números naturales.

let numero = parseInt(prompt("Ingrese el número hasta el que desea llegar: "));

let suma = 0;

for(let i = 0; i <= numero; i++){
    suma += i;
}

console.log(`La suma de los números naturales de 1 hasta ${numero} es: ${suma}`);