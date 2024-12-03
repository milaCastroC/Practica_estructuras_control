// 10.Cree un programa que calcule el promedio de 10 números

let suma = 0;

for(let i = 1; i <= 10; i++){
    let numero = parseFloat(prompt(`Ingrese el número ${i}: `));
    suma += numero;
}

let promedio = suma/10;

console.log(`El promedio de los 10 números es: ${promedio}`);