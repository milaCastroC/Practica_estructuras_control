// 2. En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
// pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
// mencionados y muestre si el producto paga IVA o no. Realice una versión con condicionales y otra con estructura
// switch-case.

let producto = prompt("Ingrese el nombre de un producto: ").toLowerCase;

console.log("VERSION CON CONDICIONALES");

if(producto === "lenteja" || producto === " arroz"){
    console.log("El producto no paga IVA");
}else if(producto === "crema" || producto === "vino"){
    console.log("El producto paga IVA");
}else{
    console.log("Ingrese un producto válido");
}

console.log("VERSION CON SWITCH-CASE");

switch (producto){
    case "lenteja":
        console.log("El producto no paga IVA");
        break;
    case "arroz":
        console.log("El producto no paga IVA");
        break;
    case "crema":
        console.log("El producto paga IVA");
        break;
    case "vino":
        console.log("El producto paga IVA");
    default:
        console.log("Ingrese un producto válido");
}
    
