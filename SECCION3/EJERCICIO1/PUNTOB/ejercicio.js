// b. La cadena tiene únicamente dos de las cuatro bases (seleccionadas aleatoriamente) y ubicadas en
// cualquier posición y orden dentro de la cadena.
 // Definir las bases disponibles en ADN
 let longitud = parseInt(prompt("Ingrese la longitud de la cadena: "));

 let bases = ['A', 'T', 'C', 'G'];
    
 let base1 = bases[Math.floor(Math.random() * bases.length)];
 let base2;
 
 do {
     base2 = bases[Math.floor(Math.random() * bases.length)];
 } while (base2 === base1);
 
 let cadenaADN = '';
 
 for (let i = 0; i < longitud; i++) {
     
     let baseSeleccionada;
     let numeroAleatorio = Math.random();
     
     if (numeroAleatorio < 0.5) {
         baseSeleccionada = base1;
     } else {
         baseSeleccionada = base2;
     }
     
     cadenaADN += baseSeleccionada; 
 }
 
 console.log("Cadena de ADN generada:", cadenaADN);