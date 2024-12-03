// 5. Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales
// y otra con estructura switch-case.

let numero = parseInt(prompt("Ingrese un número: "));

console.log("VERSION CON CONDICIONALES");
if(numero % 2 === 0){
    console.log("El número es par");
}else{
    console.log("El número es impar");
}

console.log("VERSION CON SWITCH-CASE");

switch(numero % 2){
    case 0:
        console.log("El número es par");
        break;
    case 1:
        console.log("El número es impar");
        break
    case -1:
        console.log("El número es impar");
        break;
}