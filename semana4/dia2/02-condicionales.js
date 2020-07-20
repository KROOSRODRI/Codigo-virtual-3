
//debugger;


let edad = +prompt("ingrese su edad joven");
let altura = +prompt("ingrese su altura");
let peso = +prompt("ingrese su peso");
let imc = 0;

//let rpta = edad>17;
imc = peso /(altura*altura);
if (edad > 17 && imc <=30)
{   
    console.log("si hay pase laboral 😢");
}else {
    console.log("no hay pase laboral ");
    console.log("es usted muy moco o el imc excede el valord e 30");
}
console.log(`su indice de masa corporal (imc) es: ${imc}`);
console.log("fin del porgrama, hasta pronto");