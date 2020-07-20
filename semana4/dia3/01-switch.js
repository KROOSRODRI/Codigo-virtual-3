//switch



console.log(` Elegir Opcion:
1. login
2. ver facturas
3. ver reportes`);


let rpta = +prompt(`ingrese opcion`);

switch(rpta)
{
 case 1:
     console.log("usted eligio iniciar sesion");
     break;
     case 2:
         console.log("usted desea ver las facturas");
         break;
         case 3:
             console.log("usted desea ver reportes");
             break;
             default:
                 console.log("ingrese una opcion valida");

}
console.log("fin de programa");