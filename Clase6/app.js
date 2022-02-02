 // Entrega Clase 6 Arrays - Consigna: Incorporar un array y operar con algunos metodos vistos en clase.

class Student {
    constructor(name,grade){
        this.name = name;
        this.grade = grade;
    
    }    
};

function sumStudentGrades(lista) {
    let resultado = 0;
    let iteracionMax = lista.length;
    for (let j = 0 ; j < iteracionMax ;j++){
        resultado = parseInt(lista[j].grade)+resultado;

    }
    return resultado
}

//defino un array para guardar los estudiantes
studentArray = [];
let tempName = '';
let tempGrade = 0;
let exit = false;
let op;
do{
do{tempName = prompt("Insert the student's name: ")}while(tempName === '') 
tempGrade = parseInt(prompt(`What is ${tempName}'s grade in this assignment.`));

let tempStudent = new Student(tempName,tempGrade);// Creamos un nuevo estudiante
studentArray.push(
    tempStudent
);

op = prompt('Do you wish to continue entering grades? yes/no')
    if( op === 'no') exit = true;
}while(exit === false)
for(const prop of studentArray){
    console.log(`${prop.name}: ${prop.grade}`);
    }

let promedio = 0;
promedio = parseFloat(sumStudentGrades(studentArray))/studentArray.length
console.log(`The average of student grades is: ${promedio}`)
