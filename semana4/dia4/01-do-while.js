//do while

//hacer un porgrama en el que se ingresa N notas
//para  calcular el promedio de todas ellas
//el usuario ingresa las notas  una a una hasta que
//ingrese el numero -1,el cual es el indicador del fin de ingreso


let semaforo = true;
let notas = [];
let suma=0;
do {
    let nota = +prompt("ingrese una nota");
    if (nota === -1) {
        semaforo = false;
    } else {
        notas.push(nota);
        suma+=nota;
    }

} while (semaforo === true);
console.log(`promedio de notas ${suma/notas.length}`);