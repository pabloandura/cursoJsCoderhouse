/* Operadores Avanzados */

/* 
Sugar Syntax
Es el nombre que reciben las simplificaciones de las tareas complejas.
Ej: el operador ++                  */
let num = 0;
num++;
console.log(num) //entrega "1"

/* Operador Ternario 
Es una simplificacion de la estructura if...else */
let temp = 31;
if(temp > 30){
    console.log('Dia de calor')
} else {
    console.log('Buen dia')
}
// se simplifica
temp > 30 ? 'Dia de Calor' : 'Buen dia';

/* Operador Logico 'AND' 
Si ambas condiciones son verdaderas, el resultado es verdadero, en cualquier otro caso es falso.
A B Resultado AND
0 0     0
0 1     0
1 0     0
1 1     1
*/ 

let edad = 19;
let nombre = 'Pablo';
if(edad > 18 && nombre) console.log(nombre); // imprimira el nombre ya que edad es mayor a 18 y el string no es vacio

/* Operador Logico 'OR' 
Si cualquiera de las condiciones es verdadera sera verdadero y sera falso en ambas condiciones falsas 
A B Resultado OR
0 0     0
0 1     1
1 0     1
1 1     1
*/

let gusto = 'mentaGranizada';
let tamano = '1kg';
if( gusto === 'mentaGranizada ' || tamano === null) console.log(' Que buen gusto ')

/* Operador Nullish Coalescing '??'
El operador '??' funciona igual que el operador OR '||' con la diferencia de que admite mas valores como verdaderos.
*/

console.log( null ?? 'no le gusta el null' )
console.log( 0 ?? 'pero permite el 0 a diferencia del OR')

/* Accesso condicional a un objeto 
Se le aniade al objeto un signo de pregunta previo al operador '.' para obtener un booleano si existe, en vez de tirar error.
*/
const user = {
    age: 20
}
console.log(user?.name || 'User not found');

/* Desestructuracion */

const usuario = {
    name: 'Valeria',
    edad: 21,
    phone: {
        movil: 123541424,
        home: null,
        work: 412312321
    }
}

let name = usuario.name;
let age = usuario.age;

// esto se simplifica asi

let {name2, age2, phone: {work}} = usuario;
console.log(work); // 412312321

/*ALIAS  al desestructurar podemos llamar las nuevas variables con otro nombre */

const item = {
    item_id: 122,
    product_name: 'pokeball',
    price_per_unit: 20
}

const { item_id : id } = item
console.log(id)

/* Desestructuracion con parametros */

const producto = {
    id: 10,
    name: 'Beers',
    price: 120
}

const desestructurar = ({id,name}) => {
    console.log(id,name)
}

desestructurar(producto);

// otro uso

window.addEventListener('click', ({x,y}) => {
    console.log(x,y)
});

/* desestructurizacion con arrays */

const names = ['William', 'Luis', 'Valeria', 'Max'];

// let a = names[0];
// let b = names[1];

const [a,b] = names;
console.log(a,b) // William Luis
const [ , c , d] = names; // aqui omitimos valores
console.log(c,d) // Luis Max

/* Spread '...'
Untar o desparramar un objeto o array osea cambiar la forma que presentamos los mismos
*/

console.log(names) // imprime un array
console.log(...names) // imprime William Luis Valeria Max

// otro uso

const nums = [4,77,92,10,-6,102];
const max = Math.max(nums);
console.log(max); // NaN not a number
const max2 = Math.max(...nums);
console.log(max2); // 102

// pasamos de un array a un objeto

const numsObj = {...nums}
console.log(numsObj, typeof numsObj);

// spread de objetos

const user1 = {
    name: 'Valeria',
    age: 21,
    favorite: 'Pasta'
}

const user2 = {
    ...user1,
    fav_drink: 'beer',
    email: 'faker@foo.com'
}

console.log(user2);

/*  REST Parameters 
El operador spread tambien puede utilizarse dentro de la
declaracion de una funcion para indicar que queremos recibir una cantidad indeterminada de parametros
*/

function sumar(...numeros){
    return numeros.reduce( (acc,num) => acc + num, 0 )
}

console.log(sumar(2,5,4,2,3,5,5,6,67,7,7,8,5,4,3,3,6,7,7,65,1,1000000));