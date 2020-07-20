//se peude crear funciones dentro de otras funciones



const areacirculo = (radio) => {
    const PI = 3.1416;
    const cuadrado = (numero) => {
        return numero * numero;
    };
    return  PI * cuadrado(radio);
};


let rpta = areacirculo(13);
console.log(rpta);