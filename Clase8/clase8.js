/* Clase 8 - DOM */

// los objetos DOM sos accedidos a travez el objeto global

// estructura del DOM
/* 
- toda etiqueta html se converiete en un nodo de tipo 'Elemento' 
- cada etiqueta tiene dos nodos: uno de texto y uno elemento
- por ejemplo la etiqueta <p> tiene un nodo TEXTO dentro y un nodo ELEMENTO que incluye a sus nodos hijos.

*/

// Modifiquemos el DOM desde Javascript.

// existen distintas maneras de acceder a los elementos del DOM
/*
document.getElementbyID - la etiqueta html tiene un parametro id='' que lo identifica
*/
let parrafo1 = document.getElementById('parrafo1');
console.log(parrafo1.innerHTML);
/*
document.getElementsbyClassName - la etiqueta html tiene una clase que la identifica
*/
let paisesLista = document.getElementsByClassName('paises');
//solo Colombia
console.log(paisesLista[1].innerHTML)
/*
document.getElementbyTagName - a travez del nombre de la etiqueta HTML como div, p o button por ejemplo
*/
let contenedores = document.getElementsByTagName('div')
console.log(contenedores[0].innerHTML)

// podemos ver los contenidos de texto obtenidos del DOM
let paises = document.getElementsByClassName('paises');
const lista = []
for(const pais of paises){
    lista.push(pais.innerHTML)
}
// unimos el nuevo array con el metodo .join()
console.log(lista.join(', '))

// podemos editar el texto de un elemento del DOM
let titulo = document.getElementById('titulo')
titulo.innerHTML = 'Ya funciona.'
// y podemos agregar atributos
titulo.className = 'container now'

// Crear nuevos nodos
// creamos un <p> con texto adentro
let parrafo = document.createElement('p')
parrafo.innerHTML = '<h3> Good idea Sergio </h3>'
// la agregamos
document.body.append(parrafo)

// quitamos el elemento
let parrafo2 = document.getElementById('parrafo1')
parrafo2.remove()

const personas = [
    "Cesar Sasaki",
    "Javier Nedelcuo",
    "Sergio Belisario",
    "Maria Di",
    "William"
]

let padre = document.getElementById('personas')
for(const persona of personas)
{
    let li = document.createElement('li');
    li.innerHTML = persona

    padre.appendChild(li)
}

const productos = [
    {id: 1, name: 'Cerveza', price: 120},
    {id: 2, name: 'Fernet', price: 150},
    {id: 3, name: 'Vino', price: 80},
    {id: 4, name: 'Tequila', price: 60}
    ]
const padre2 = document.getElementById('productos')

for(const producto of productos){
    let contenedor = document.createElement('div');

    contenedor.innerHTML = `
    <h3>ID: ${producto.id}</h3>
    <p>Producto: ${producto.name}</p>
    <b>$ ${producto.price}</b>
    <hr>
    `
    padre2.appendChild(contenedor)
}

// como seleccionar un texto en el DOM = manera nro 2.

let parrafo3 = document.querySelector('#productos');
console.log(parrafo3)