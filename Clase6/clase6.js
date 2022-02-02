/* Arrays */ 

// Un array es un tipo de datos que sirve para almacenar valores en forma de lista. 
// Los valores del array pueden ser distintos y es posible agregar y quitar elementos en todo momento.
// Los elementos tienen un indice que va desde el 0 hasta el ultimo elemento.

console.log('Arrays')

// Declarando un array
const arrayA = [];

console.log(typeof(arrayA));

const arrayB = [1,2]; 

const arrayC = ['CI', 'AA','TTT'];

let arrayD = [true,false,true,false,false];

const numeros = [1,2,3,4,5];   

console.log(numeros[2]); // imprimimos la posicion '2' que es el tercer elemento

// metodos de arrays

// obtener longitud .length
console.log(arrayD.length);

// agregar elementos con .push
const miarray = [1,2,3];
miarray.push(4);
console.log(miarray);

// agregar elementos al principio

miarray.unshift(9090);
console.log(miarray);

// quitar ultimo elemento

miarray.pop();
console.log(miarray);

// quitar un rango

miarray.splice(1,2)

// unir JOIN

console.log(miarray.join(', '));

const perros = ['Firulais', 'Scooby Doo', 'Lasi'];
const gatos = ['Felix', 'Garfield', 'Pelusa'];

// unir dos arrays en uno

const mascotas = perros.concat(gatos);
console.log(mascotas);

// metodo slice devuelve una copia de una parte del array

const nombres2 = ['Martin','Javier','Mauricio','William'];
const nombres3 = nombres2.slice(2,4);
console.log(nombres3);

// obtener ubicacion de un elemento

let index = nombres2.indexOf('Javier');
console.log(nombres2[index]); // si no lo encuentra aparece '-1'

// Saber si un elemento existe en un array

console.log(nombres2.includes('Mauricio')); // devuelve 'true'

// conseguir el array al reves

const alreves = nombres2.reverse();
console.log(alreves);

// llenemos un array con la entrada del usuario.
/*
const listaNombres = [];
let cantidad = 5;

while(listaNombres.length < cantidad){
    let nombre = prompt('Ingresar nombre');
    listaNombres.push(nombre);
}

alert(listaNombres.join('\n'));
*/


// Arrays y Objetos

const obj1 = {
    id: 1,
    producto: 'Cerveza Roja'
}
const array = [obj1, { id: 2, producto: 'Fernet'}];
array.push({id: 3, producto: 'Vinos', price: 120});

// for ... of = itera en un array. aqui "item" es cada elemento iterado.

for (const item of array){
    console.log(item.id);
    console.log(item.producto)
}

