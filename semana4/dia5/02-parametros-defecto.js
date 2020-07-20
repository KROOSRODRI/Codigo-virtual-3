// funciones con parametros por defecto


function trinomiocuadrado(a, b, c) {
 
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);

    let rpta = a * a * a + b * b * b + c * c * c;
    return rpta;

}

let resultado= trinomiocuadrado(2,4,6);
console.log(resultado);







//-----------
/**
 * 
 * @param {array} nombres 
 * @param {string} busqueda 
 * @return{boolean}
 */

function buscarnombre(nombres=[],busqueda){
    for(let i=0; i< nombres.length;i++)
    {
        if(nombres[i]===busqueda)
        {
            //la sentencia return en una funcion, no solo retorna un valor
            //sino que tambien hace que la funcion deje de ejecutarse en esa
            //sentencia, no importa si esta entro un for,while,if,etc
         return true;   
        }
    }
    return false;

}

let nombres=["rodrigo","luis","simon","pedro"];
let resultadobusqueda=buscarnombre(nombres,"");
console.log(resultadobusqueda);



/// funcion NaN




console.log(isNaN(5));
console.log(isNaN("texto"));
console.log(isNaN(true));