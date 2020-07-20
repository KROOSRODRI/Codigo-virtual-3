// Un objeto es un elemento que abstarae caracteristicas
// o atributos en comun o que guardan relacion
let objPersona = {
    nombre: "Jorge",
    apellido: "Garnica",
    edad: 28,
    peso: 72,
    casado: false
};
// forma 1 de ACCEDER a los atributos
console.log(objPersona.nombre);
// forma 2 de ACCEDER a los atributos
console.log(objPersona["apellido"]);
// Forma de modificar un atributo
objPersona.casado = true;
objPersona.peso = 70;
console.log(objPersona);
// Forma 1 de crear nuevos atributos a un objeto
objPersona.platosFavoritos = ["ceviche", "rocoto relleno", "chicharron"];
console.log(objPersona);
for (let i = 0; i<objPersona.platosFavoritos.length; i++) {
    console.log(objPersona.platosFavoritos[i]);
}
/*********************************************************** */
let productos = [
    {
        nombre: "TV Samsung 50",
        precio: 8000.0,
        codigo:"1001",
coloresDisponibles: ["Azul", "Plomo", "Blanco", "Negro"],
    },
    {
        nombre: "TV Samsung 42",
        precio: 7000.0,
        codigo:"1002",
coloresDisponibles: ["Azul", "Blanco"],
    },
    {
        nombre: "TV Samsung 39",
        precio: 6000.0,
        codigo:"1003",
coloresDisponibles: ["Rojo", "Negro"],
    },
    {
        nombre: "TV Samsung 25",
        precio: 5000.0,
        codigo:"1004",
coloresDisponibles: [],
    },
];
for (let i = 0; i < productos.length; i++){
    console.log(`--- Producto ${i + 1} ---`);
    console.log(`Nombre: ${productos[i].nombre}`);
    console.log(`Precio: ${productos[i].precio}`);
    console.log(`Codigo: ${productos[i].codigo}`);
    console.log(`Colores Disponible:`  );
    for (let j = 0; j < productos[i].coloresDisponibles.length; j++){
        console.log(productos[i].coloresDisponibles[j]);
    }
}