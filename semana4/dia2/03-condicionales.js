//hacer un porgrama que indique ingresar al usuario
//las 3 priemeras letras de un dia de las emana
//y que el programa complete el dia de la semana(lo impirma)




let ingreso = prompt("ingrese las 3 priemras letras del dia de la semana");

if (ingreso === "lun" || ingreso === "LUN") {
    console.log("el dia es lunes");
}
else {
    if (ingreso === "mar" || ingreso === "MAR") {
        console.log("el dia es martes");
    }
    else {
        if (ingreso === "mie" || ingreso === "MIE") {
            console.log("el dia es miercoles");
        } else {
            if (ingreso === "jue" || ingreso === "JUE") {
                console.log("el dia es jueves");
            }
            else {
                if (ingreso === "vie" || ingreso === "VIE") {
                    console.log("el dia es viernes");
                }
                else {
                    if (ingreso === "sab" || ingreso === "SAB") {
                        console.log("el dia es sabado");
                    }
                    else {
                        if (ingreso === "dom" || ingreso === "DOM") {
                            console.log("el dia es domingo");
                        }
                        else{
                            console.log(`No ingreso bien las 3 primeras letras`);
                        
                        }
                    }
                }
            }
        }

    }
}



