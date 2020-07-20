
debugger;



let edad = +prompt("ingrese su edad joven");
let imc=0;


//let rpta = edad>17;


if (edad > 17)
{
    let peso = +prompt("canto pesa joven(kgs.)");
    let altura =+prompt("cuanto mide joven(mts.)");
    imc =peso/(altura*altura);
    if (imc > 30)
     {

        console.log("no hay pase laboral 😢");
        console.log("esta usted en riesgo por exceso de comida 🐷");
    }
    else {
    console.log("si hay pase laboral ");
    
    }
    console.log(`su indice de masa corporal (imc) es: ${imc}`);

}
else 
{
    console.log("no hay pase laboral");
    console.log("es usted muy moco 😂");

}
console.log("fin del porgrama, hasta pronto");