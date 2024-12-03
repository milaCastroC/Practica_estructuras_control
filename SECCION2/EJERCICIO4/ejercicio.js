// 4. Cree un programa que calcule el promedio de tres notas para n estudiantes. Use ciclo for. Use
// funciones.

let numEstudiantes = parseInt(prompt("Ingrese el número de estudiantes: "));

function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

for (let i = 1; i <= numEstudiantes; i++) {
    console.log(`Ingrese las notas del estudiante ${i}:`);

    let nota1 = parseFloat(prompt("Ingrese la primera nota: "));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota: "));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota: "));
    
    let promedio = calcularPromedio(nota1, nota2, nota3);

    console.log(`El promedio del estudiante ${i} es: ${promedio}`);
}