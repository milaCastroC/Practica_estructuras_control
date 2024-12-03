// 8. Cree un programa que muestre los números impares entre 1 y n.

let numero = parseInt(prompt("Ingrese el número hasta el que desea llegar: "));

for(let i = 1; i <= numero; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}