//dado un arreglo de numeros hallas la cantidad de nuemros positivos y negativos
//y la cantidad de numeros iguales a 0


let numeros=[0,25,12,18,19,345,200,45,74,78,-12,-18,0,0,100,10,800];
let contador=0;
let positivos=0;
let negativos=0;
let ceros=0;


while(contador< numeros.length)
{
    if(numeros[contador]>0)
    {

        positivos++;
    }else if(numeros[contador]<0)
    {

         negativos++;
    }
    else 
    {
       ceros++;
    }

    contador+=1;
    

}
console.log(`positivos ${positivos}`);
console.log(`negativos ${negativos}`);
console.log(`ceros ${ceros}`);
