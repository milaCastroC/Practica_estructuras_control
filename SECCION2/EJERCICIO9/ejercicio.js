// 9. Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra
// S el programa se detendrá, de lo contrario continuará ejecutándose.

let respuesta;

do {
    respuesta = prompt("¿Deseas salir? (S/N)").toUpperCase(); 
} while (respuesta !== "S");

console.log("¡Has decidido salir! El programa se detendrá.");