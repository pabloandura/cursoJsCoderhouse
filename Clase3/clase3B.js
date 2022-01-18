// Ciclos / Iteraciones
/*
// Ciclo For
for(let i = 0;i<10;i++){
    console.log(i);
}

// While Like For

let numero = parseInt(prompt('Dame un numero'));

let suma = 0;
let i = 0;
while(i<numero)
{
    suma = suma + i

}

do{
    suma + 1 
}while(suma < 45);
*/

/*
Consigna: Tomando como base los ejemplos anteriores de la estructura for y while
crear un algoritmo que repita un bloque de instrucciones. 
En cada repeticion es necesario efectuar una operacion o comparacion 
para obtener una salida por alerta o consola. */

// Idea: un temporizador
let tiempo = prompt('Desde cuantos segundos quiere contar.');
// se obtiene el numero de segundos a contar
tiempo = parseInt(tiempo);
    // se utiliza la funcion intervalo() para crear un intervalo 
    // y pasar al siguiente generando asi un temporizador
function intervalo(corte){
    const int = setInterval(() => {
       console.log('Segundos Restantes: '+corte);
       setTimeout(() => {
         clearInterval(int) 
       },1000*corte-1000)
     },1000)
   }
   // inicio el bucle do while que sale cuando el contador llega a 0
do {     
    intervalo(tiempo)
}while(tiempo>0)