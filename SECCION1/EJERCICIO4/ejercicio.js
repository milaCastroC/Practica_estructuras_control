// 4. Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
// triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.

let angulo1 = parseFloat(prompt("Ingrese el primer ángulo:" ));
let angulo2 = parseFloat(prompt("Ingrese el segundo ángulo:" ));
let angulo3 = parseFloat(prompt("Ingrese el tercer ángulo:" ));

if(angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0){
    console.log("Por favor, ingrese ángulos válidos mayores a 0.");
}else if(angulo1 + angulo2 + angulo3 === 180){
    console.log("Los ángulos corresponden a un triángulo.");
}else{
    console.log("Los ángulpos no corresponden a un triangulo");
}