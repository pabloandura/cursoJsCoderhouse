// Clase 5 Objetos

/*
Que es un objeto?
Los objetos son estructuras que podemos definir para agrupar valores bajo un mismo criterio.
Podemos decir que es una coleccion de datos relacionados como una entidad.
Se componen de un listado de clave-valor.
*/

// si quisieramos definir una persona hasta ahora
console.log('Objetos');
let nombre = 'Cesar';
let apellido = 'Sasaki';
let edad = 33;
let ciudad = 'Lima'

console.log('Persona de nombre: ' + nombre + ' ' + apellido + ' Tiene ' + edad + ' y vive en ' + ciudad);

// con un objeto podemos agruparlos
const persona1 = {
    nombre: 'Cesar',
    apellido: 'Sasaki',
    edad: 33,
    ciudad: 'Lima'
}

// podemos acceder a las propiedades con el operador . o con [' ']
console.log(persona1.edad); // obtenemos 33
console.log(persona1['edad']);

// Actualizar una propiedad

persona1.edad = 34; // feliz cumpleanios

/* Constructores */ 

function Persona(nombre,edad,ciudad) {
    this.nombre = nombre
    this.edad = edad
    this.ciudad = ciudad
}

// aqui tenemos un objeto de tipo persona
const persona5 = new Persona('Pablo', 27, 'Buenos Aires')

// aqui tenemos un objeto generico
const persona2 = {
    nombre: 'Mariano', edad: 24, ciudad: 'Bogota'
}

// funcion constructura 2

function humano(objeto){
    this.name = objeto.name
    this.age = objeto.age
    this.city = objeto.city
}

const obj = {
    name: 'Rodrigo',
    age: '22',
    city: 'Cordoba'
}

const persona4 = new humano(obj);

// un objeto de productos
/*
function Product(name, price, quantity) {
    this.name = name,
    this.price = price,
    this.quantity = quantity
}

let cantidadProductos = 0;
let totalProductos = 0;

while(true) {
    alert('Insertar nuevo producto al carrito !');
    let nombre = prompt('Nuevo producto');
    if (nombre == 'salir') break;
    let precio = prompt('Precio del producto');
    if (precio == 'salir') break;
    let cantidad = prompt('Cantidad');
    if (cantidad == 'salir') break;

    const p = new Product(nombre,parseInt(precio),parseInt(cantidad))


cantidadProductos++;
totalProductos+= p.price*p.quantity;

    console.log("Se ha agregado el producto: ")
    console.log(p)
}

alert('Cantidad de productos es: ' + cantidadProductos
    + '\nPrecio total: ' + totalProductos);
*/

// Metodos en los objetos

// Un objeto no solo tiene propiedades sino que tambien tiene metodos

// por ejemplo al definir una variable tipo string
let cadena = 'Hola Estudiantes';
// se define una variable con el objeto String que tiene metodos o funciones internas
console.log(cadena.toLowerCase); // imprime 'hola estudiantes'
console.log(cadena.toUpperCase); // imprime 'HOLA ESTUDIANTES'

function Persona(nombre,edad,ciudad) {
    this.nombre = nombre
    this.edad = edad
    this.ciudad = ciudad
    // definimos el objeto
    this.hablar = function(){
        console.log(`HOLA, soy ${this.name}`)
    }
}

// Clases

// Las clases fueron introducidas en ECMAScript 6
// Son una equivalencia al empleo de funcion constructora y permite definir distintos tipos de metodos

class ser{
    constructor(nombre, edad, ciudad){
        this.name = nombre,
        this.edad = edad,
        this.ciudad = ciudad
    }
    // ya reconoce que abajo es un metodo
    hablar() {
        console.log(`Hola, soy ${this.name}`);
    }
}
// estas clases se usan para crear objetos
const ser1 = new ser('Alejandro', 39, 'New York');