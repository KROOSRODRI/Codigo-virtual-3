//dado que el usuario ingresa un año ejm



let anio=prompt('Ingrese el Año:','');


if ((((anio%100)!=0)&&((anio%4)===0))||((anio%400)===0)){
  console.log('El año es bisiesto: ');
 }
 else{
     console.log('El año no es bisiesto: ');
    }

