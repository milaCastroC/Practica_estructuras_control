// 6. Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con
// condicionales y otra con estructura switch-case.

let numero = parseInt(prompt("Ingrese un número: "));

console.log("VERSIÓN CON CONDICIONALES");

if(numero % 5 === 0){
    console.log("El número es divisible por 5");
}else{
    console.log("El número no es divisible por 5");
}

console.log("VERSIÓN CON SWITCH-CASE");
switch(numero % 5){
    case 0:
        console.log("El número es divisible por 5");
        break;
    default:
        console.log("El número no es divisible por 5");
        break;
}