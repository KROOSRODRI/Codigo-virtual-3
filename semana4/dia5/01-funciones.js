// funciones
//1. funciones que no retornan valor ni reciben aprametros


function imprimirfecha() {
    let fecha = new Date();
    console.log(fecha);

}










//2. funciones que retornan valor y no reciben parametros

function retornarfecha() {
    let fecha = new Date();
    return fecha;

}



//3 funciones que reciben parametros y retornan valor
/**
 * funcion que recibe dos numeros y calcula el binomio cuarao perfecto
 * @param {number} a  primer numero 
 * @param {number} b  segundo numero
 * @return {number} el resultado del binomio
 */
function retornarbinomio(a, b) {
    let rpta = a * a + 2 * a * b + b * 2;
    return rpta;

}



//4 funciones que no retornan valor y que reciben parametros

function imprimirPares(numeros) {
    for (let i=0; i < numeros.length; i++ ){
        if (numeros[i] % 2 === 0 ){
            console.log(numeros[i]);
        }
    }
}


//llamando o invocano a una funcion
retornarbinomio(1, 2);
console.log(retornarbinomio(1, 1));
imprimirfecha();
console.log(retornarfecha());


//invocando a la funcion 4
let arreglo =[2,56,20,10,40,0,3,6];

imprimirPares(arreglo);
