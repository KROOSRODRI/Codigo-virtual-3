//arreglos

let numeros=[15,16,1.5,9,-9,6];
let vacio =[];
let nombres=["rodrigo","pedrito","sandrita"];
let combinado = [12,"asdas",true];


console.log(numeros);

console.log(`posicion 4 = ${numeros[4]}`);
numeros[0]=720;
console.log(numeros);
console.log(`cantidad de elementos del arreglo`);
console.log(numeros.length);

let totalElementos=numeros.length;
//Imprimir el ultimo elemento de un arreglo
console.log(numeros[5]);
console.log(numeros[totalElementos - 1]);

//agregar elementos a un arreglo

numeros.push(212);
console.log(numeros);
console.log(nombres); 


