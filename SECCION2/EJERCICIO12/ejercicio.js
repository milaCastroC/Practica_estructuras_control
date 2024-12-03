// 12.Cree un programa que calcule la suma de los cuadrados de los números entre 1 y n.

let numeros = parseInt(prompt("Ingrese el número hasta el que desea llegar: "));

let suma = 0;
for(let i = 1; i <= numeros; i++){
    suma += i*i;
}

console.log(`La suma de los cuadrados de 1 hasta ${numeros} es igual a: ${suma}`);