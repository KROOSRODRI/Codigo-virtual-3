

const buscarpordni = (dni, callback) => {
    //conceta a la bd
    //hago consulta del dni
    //retorna la informacion de la persona

    let nombreencontrado = "-----";
    setTimeout(function () {
        console.log("buscando en la base de datos");
        nombreencontrado = "Rodrigo Velarde Herencia";
        callback(nombreencontrado);
    }, 2000);


};


buscarpordni("72109525", (nombre) => {
    console.log(nombre);
});


// MyModel.find(
// 	"jorge", 
// 	function (err, docs) {
// 		if(err){
// 			console.log("error, no se encontró el nombre");
// 		}else{
// 			console.log(docs);
// 		}
// 	}
// );
