/* Higher Order Functions */
/* LA MAGIA DE LA INGENIERIA .- Profesor */
// Abstraccion resumimos un grupo complejos de instrucciones (FUNCION) 
// que sugiere la solucion a una solucion comunmente repetida

function sumarRango(desde,hasta){
    let total = 0
    for(let i = desde; i<=hasta; i++){
        total += i;
    }
    return total;
}

console.log(sumarRango(1,10));

// el problema queda resumido a un renglon y podemos hablar desde un alto nivel

// Definicion 'higher order functions'
// son aquellas que retornan o reciben una funcion ("Callbacks") 

function mayorQue(n){
    let varFunction = function(m){
        return m>n
    }
    return varFunction
}

let mayorQueDiez = mayorQue(10);
let mayorQueNueve = mayorQue(9);

/* Si tengo un problema repetido que debe cambiar ligeramente en
cada ejecucion entonces tenemos una oportunidad de hacer una 
funcion de order superior */

// for each
function porCadaUno(arr,fn){
    for (const el of arr){
        fn(el)
    }
}

// duplicar
const duplicar = function(n){
    console.log(n*2)
}

// metodos de busca y transformacion de arrays

nuestroArray = [1,2,3,4,5,6,7]

// aqui hacemos que se itere cada elemento de nuestroArray por esa funcion flecha
nuestroArray.forEach( n => {console.log('El numero es: ',n)});

// metodo find nos permite llamar a una funcion que devuelva true

// encontramos el 3 en el array anterior
let found = nuestroArray.find(n => n == 3)

const cursos = [  
        {name: 'JS', precio: 150},
        {name: 'React', precio: 180},
        {name: 'Backend', precio: 210},
] 

const resultado = cursos.find(obj => obj.name =='React');
console.log(resultado)

// metodo .filter()

const filtrado = cursos.filter(obj => obj.name.includes('JS'))
console.log(filtrado);

// metodo .some()

const r = cursos.some(obj => obj.name == 'JS');
console.log(r)

// metodo .map()

const mapped = cursos.map(obj => obj.name)
console.log(mapped)

// metodo .sort()
let desorden = [5,8,3,4,5]
let sorted = desorden.sort((a,b) => a-b);
console.log(sorted)

// libreria math.js
console.log(Math.E)
console.log(Math.PI)

// maximo de un conjunto
console.log(Math.max(55,13,0,-25,93,4))
// minimo de un conjunto
console.log(Math.min(65,233,25,2,6,-19))

const pi = Math.PI
console.log(pi)
console.log(Math.ceil(pi))
console.log(Math.floor(pi))
console.log(Math.round(pi))

//dates
console.log(new Date(2022,01,25))
format = 'December 25, 1994 22:45:21'
const navidad = new Date(format)
console.log(navidad)

// el objeto Date tiene metodos
console.log('Anio ', navidad.getFullYear())
console.log('Mes ', navidad.getMonth())
console.log('Dia ', navidad.getDay())

// formatos de impresion de Date

console.log(navidad.toDateString())
console.log(navidad.toLocaleString())

// operaciones entre fechas

console.log('Operaciones entre fechas');

const hoy = new Date();
const navidad2 = new Date("December 25, 2022")

console.log(navidad2 - hoy)

const milisegundosPorDia = 86400000

console.log((navidad2 - hoy)/milisegundosPorDia,' dias para navidad')