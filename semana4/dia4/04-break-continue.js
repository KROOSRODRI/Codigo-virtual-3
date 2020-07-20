//break y continue


//continue es un scope de una estructura repetitiva
//salta u obvia todas las sentencias de la iteracion en la que
//nos encontramos y continuamos con la siguiente iteracion

// break en un scope de un ciclo iterativo,
// fianliza todos los ciclos o iteraciones que restan por hacer
//sin importar en que iteracion nos encontramos


let nombres = ["rodrigo", "javier", "francisca", "simon", "fernando"];
let edades = [20, 15, 75, 25, 62];
let encontrado = false;

// que el usuario buisque un nombre y cuadno el algoritmo lo encuentre
// se imprima su edad y posicion en la que se encuentra


let buscar = prompt("ingrese el nombre a buscar en la base de gatos 😺");

for (let i = 0; i < nombres.length; i++) {
    console.log(`i = ${i}`)
    if (nombres[i] === buscar) {
        console.log(`Encontrado: ${buscar}`);
        console.log(`edad: ${edades[i]}`);
        encontrado = true;
        break;

    }
}
if (encontrado !== true) {
    console.log("no se encontro al usuario");
}


// uso dell continue

//de los arreglos anteriores, imprimir la edad y nombre
// de las personas menores de 60 años

for (let i = 0; i < edades.length; i++) {
   if(edades[i] > 60){
       continue;

   }
   console.log(`${nombres[i]} tiene ${edades[i]} años`);
}