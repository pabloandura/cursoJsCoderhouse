/* Promesas */

// Asincronia.
/* 
En la programacion sincronica, la secuencia de operacion es lineal.
En la progrmacion asincronia, hay paralelismo o procesos que se ejecutan a la vez.

por ejemplo: setTimeout() al ejecutarse se desplaza la funcion asociada 
a otra parte del motor de javascript

*/


const boxes = document.getElementsByClassName('box');
for(const box of boxes){
    box.addEventListener('click', () => {
        box.classList.add('active')
        setTimeout(() => {
            box.classList.remove('active')
        },2500)
    })
}

/* Call Stack 
Es una pila donde se ponen en fila las funciones requeridas por el programa*/

/* Event Loop 
Si el stack esta vacio el event loop le entrega una tarea nueva que sucedia asincronicamente.
*/

console.log('Start');

const fin = setTimeout(()=>{
    console.log('Hola Ignacio Laprida!!!')},
    2000)

clearTimeout(fin);

// PROMESAS
/* 
Una promesa representa un evento a futuro.
Es una accion asincronica que se puede completar en algun momento y producir un valor.
Una promesa cuenta con los tres estados posibles:
- pending
- fullfilled
- rejected
*/

let accionAFuturo = new Promise( (resolve, reject) => {
    // cuerpo de la promesa

});

// cuando el cuerpo de la promesa llama a la funcion resolve() la promesa se cumple
// cuando el cuerpo de la promesa llama a la funcion reject() la promesa falla 
// los dos casos llevan a la promesa de pending a fulfilled o rejected respectivamente.

const eventFuture = (res) => {
    return new Promise( ( resolve, reject ) => {
        if(res === true){
            resolve('Promesa resuelta');
        } else {
            reject('Promesa incumplida');
        }
    });
};

console.log(eventFuture(true));
console.log(eventFuture(false));

// al ejecutar una promesa se deben atrapar sus resultados.
// .then (cuando se resuelve la promesa) y .catch (cuando se captura el error de la promesa)

eventFuture(true)
    .then((response) => { // 'response' es lo que recibe .then cuando la promesa se completa exitosamente
        console.log('Response: ' + response);
    })
    .catch((error) => {
        console.log('Error: ' + error);
    })

eventFuture(false)
    .then((response) => { // 'response' es lo que recibe .then cuando la promesa se completa exitosamente
        console.log('Response: ' + response);
    })
    .catch((error) => {
        console.log('Error: ' + error);
    })

// de esta manera trabajamos con ambas posibilidades
// tambien existe el .finally() que es ejecutado al final de la promesa sin importar si hubo exito o fallo.

console.log(' Con .finally() ');
eventFuture(true)
    .then((response) => { // 'response' es lo que recibe .then cuando la promesa se completa exitosamente
        console.log('Response: ' + response);
    })
    .catch((error) => {
        console.log('Error: ' + error);
    })
    .finally(()=>{
        console.log('Fin del proceso.')
    })

eventFuture(false)
    .then((response) => { // 'response' es lo que recibe .then cuando la promesa se completa exitosamente
        console.log('Response: ' + response);
    })
    .catch((error) => {
        console.log('Error: ' + error);
    })
    .finally(()=>{
        console.log('Fin del proceso.')
    })

    /* Async y Await 
    Tambien esta esta metodologia mas moderna que omite .then() y .catch()
    */

    function decirHola(nombre){
        
    }