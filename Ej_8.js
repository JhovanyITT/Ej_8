// 8.	Búsqueda de elementos en un arreglo: Crea un arreglo 
// de nombres y dada una cadena con un nombre,  verifica 
// si ese nombre está presente en el arreglo y muestra un mensaje 
// apropiado.

const arregloNombres = ["Maria", "David", "Lucia", "Karen", "Luis", "Pepe"];
const nombreBuscar = "Pepe";

for(var i = 0; i < arregloNombres.length; i++){
    if(arregloNombres[i] == nombreBuscar){
        console.log("Nombre encontrado en la posición " + i);
        return;
    }
}

console.log("El nombre '"+nombreBuscar+"' no se encontró");
