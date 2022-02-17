/* Clase 10 Local Storage*/


// podemos guardar datos en la memoria local del cliente "Cache"
localStorage.setItem('Bienvenida', 'Saludos a todos')
localStorage.setItem('validation', true)
localStorage.setItem('unNumero', 22)

let numero = localStorage.getItem('unNumero');
console.log('El numero es: ', numero, ' Es de tipo: ',typeof numero);

// otra alternativa es el session storage

sessionStorage.setItem('Bienvenida2', 'Saludos a todos dos');

// de la misma manera uno obtiene el dato

let segundaB = sessionStorage.getItem('Bienvenida2')
console.log(segundaB);

// recorrer todos los sessionStorages
function showStorage(){
    for ( let i=0 ; i < sessionStorage.length ; i++ ){
        let key = sessionStorage.key(i);
        let value = sessionStorage.getItem(key);
        
        console.log('Key: ', key, '-> ', value);
    }
}

// Eliminar un key
sessionStorage.removeItem('email');

// La session storage solo dura nuestra sesion de navegacion en el sitio.
// Local Storage debe ser borrada luego por el cliente.

// limpiamos la memoria de sesion
sessionStorage.clear()

// guardar en un almacenamiento un objeto trae complicaciones
console.log('Creamos un objeto y lo guardamos en el almacenamiento, luego lo obtenemos y intentamos imprimir debajo.')
obj = {id: 1, name: 'Facundo'};
localStorage.setItem('data', obj);

let data = localStorage.getItem('data');
console.log(data);
console.log(typeof data);
// se perdieron los datos
// al guardar algo en localStorage, el navegor convierte los datos en strings aplicando el metodo .toString()

// guardar en el almacenamiento es lo mismo que exportar un dato
// para esto se usa el archivo JSON, que tiene sintaxis similar a Javascript
// JSON es un string con un formato especifico. (Javascript Object Notation)

 
/// conversiones de y hacia JSON

// convertir hacia JSON con JSON.stringify()
const product1 = {id:2, name: 'Beers'}
const esJSON = JSON.stringify(product1) // objeto JSON
console.log(esJSON) // imprimos un string con formato JSON

localStorage.setItem('product', esJSON);


// consumir un JSON de nuestro almacenamiento con JSON.parse()
const fromCache = localStorage.getItem('product');
console.log(fromCache); // es un string aun
const product2 = JSON.parse(fromCache);
console.log(product2);
console.log(product2.id, product2.name);