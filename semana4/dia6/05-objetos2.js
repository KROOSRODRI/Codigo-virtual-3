



let objtienda = {
    nombre: "capricho",
    categorias: "postres",
    descripcion: "tienda de postres arequipeños",
    sucursales: [{
        nombre: "capricho mercaders",
        telefono:"925753612"
    },
    {
        nombre: "capricho lambramani",
        telefono:"925753612"
    },
    {
        nombre: "capricho EEUU",
        telefono:"925753612"
    }],
};

console.log(`----CAPRICHO----`);
console.log(`nombre: ${objtienda.nombre}`);
console.log(`Categorias: ${objtienda.categorias}`);
console.log(`descripcion: ${objtienda.descripcion}`);
console.log("sucursales");


for(let i=0; i<objtienda.sucursales.length;i++){
    console.log(`------`);
    console.log(`sucursal: ${i+1}`);
    console.log(`nombre: ${objtienda.sucursales[i].nombre}`);
    console.log(`telefono: ${objtienda.sucursales[i].telefono}`);
}