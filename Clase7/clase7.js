/* Higher Order Functions */

// Abstraccion resumimos un grupo complejos de instruccioens 
// bajo una palabra clave (Funcion) que sugiere cual es el problema a resolver por la misma

function sumarRango(desde,hasta){
    let total = 0
    for(let i = desde; i<=hasta; i++){
        total += i;
    }
    return total;
}

console.log(sumarRango(1,10));

// el problema queda resumido a un renglon y podemos hablar desde un alto nivel


// funciones de orden superior: son aquellas que retornan o reciben una funcion
// las famosas "Callbacks"