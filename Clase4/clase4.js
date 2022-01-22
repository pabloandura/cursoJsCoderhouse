// Funciones en Javascript.

/* 
Una funcion es un codigo que se ejecuta al invocarse.
- Evita repetirse constantemente y mantener el codigo limpio. (DRY Don't Repeat Yourself)
- Soluciona un problema complejo utilizando tareas sencillas. (Principio KISS Keep it stupid simple)
- Focaliza tareas prioritarias (Principio YAGNI You Aren’t Gonna Need It!b)


//Creamos una funcion
function saludar(nombre){
    console.log('Hola '+nombre);
}

// Otra funcion
function solicitarNombre () {
    
    let nombreIngresado = prompt('Ingresar nombre');
    alert('El nombre ingresado es ' + nombreIngresado)

}

// Con la palabra reservada function se definen funciones. 
// Con la palabra reservada return se devuelve un valor al terminar su ejecucion

function suma(num1,num2) {
    return num1 + num2;
}

//declaro una funcion calculadora
function calculadora (operacion, n1, n2){
    switch(operacion){
        case "+":
            return n1 + n2
            break
        case "-":
            return n1 - n2
            break
        case "*":
            return n1 * n2
            break
        case "/":
            return n1 / n2
            break
        default:
            alert('No se reconoce la operacion.') 
            return 0
            break
        }}

// funciones anonimas

const sumar2 = function (a,b){
    return a+b
}

// funciones flecha
const sumar3 = (a,b) => {
    return a+b
}

// o tambien otra funcion flecha en una linea

const sumar4 = (a,b) => a+b

*/

 // Idea: un sistema simulador y estadistico sobre estudiantes en un curso de javascript

 //declaro el operador de do while
let exit = false;
 //declaro variables de contado estadistico
let i = 0;// contador de estudiantes
let sumOfGrades = 0; // to create an average we need to sum all grades
const passingGrade = 7; // to compare and count the amount of students that passed
let passingStudents = 0;

// Iniciamos el do while que controlara el comienzo y fin de entrada de datos 
// previos a la estadistica en pantalla.
do{
// Ingresamos el nombre del estudiante verificando que se haya ingresa un obj String
while(typeof(studentName) === typeof('asd')) {let studentName = prompt("Insert the student's name: ");}
let grade = prompt(`What is ${studentName}'s grade in this assignment.`);
// we count one student input
    i++;
// we add the grade to our sumOfGrades to later calculate the average
    sumOfGrades += grade;
// we compare if they passed
    if (grade >= passingGrade) passingStudents++;
// we ask if we wish to continue
    if(prompt('Do you wish to continue entering grades? yes/no') === 'yes') exit = true;
}while(exit === true);


