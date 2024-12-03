// 7. Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con
// condicionales y otra con estructura switch-case.

let numero = parseInt(prompt("Ingrese un número del 1 al 15: "));

console.log("VERSIÓN CON CONDICIONALES");
if(numero < 1 || numero > 15){
    console.log("Ingrese un número válido");
}else{
    if (
        numero === 2 || numero === 3 || numero === 5 || numero === 7 || numero === 11 || numero === 13
    ) {
        console.log(`El número ${numero} es primo.`);
    } else {
        console.log(`El número ${numero} no es primo.`);
    }
}

console.log("VERSIÓN CON SWITCH-CASE");
if(numero < 1 || numero > 15){
    console.log("Ingrese un número válido");
}else{
    switch(numero){
        case 2:
            console.log(`El número ${numero} es primo.`);
            break;
        case 3:
            console.log(`El número ${numero} es primo.`);
            break;
        case 5:
            console.log(`El número ${numero} es primo.`);
            break;
        case 7:
            console.log(`El número ${numero} es primo.`);
            break;
        case 11:
            console.log(`El número ${numero} es primo.`);
            break;
        case 13:
            console.log(`El número ${numero} es primo.`);
            break;
        default:
            console.log(`El número ${numero} no es primo.`);
            break;
    }
}