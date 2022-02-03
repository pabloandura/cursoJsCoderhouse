/* Clase 8 - DOM */

// los objetos DOM sos accedidos a travez el objeto global

// estructura del DOM
/* 
- toda etiqueta html se converiete en un nodo de tipo 'Elemento' 
- cada etiqueta tiene dos nodos: uno de texto y uno elemento
- por ejemplo la etiqueta <p> tiene un nodo TEXTO dentro y un nodo ELEMENTO que incluye a sus hijos.

*/

// Modifiquemos el DOM desde Javascript.

// a travez del objeto document podemos usar las herramientas del DOM

let saludarPablo = document.getElementById('parrafo1');

console.log(saludarPablo.innerHTML)