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

// Idea: una calculadora
//defino una funcion de salida
let exit = false;


//pregunto como debemos operar e ingreso al switch para ejecutar el codigo correspondiente.
do{
// pido informacion
let num1 = prompt('Welcome to our calculator\nEnter the first number.');
let num2 = prompt('Enter the second number');
// pasamos los numeros ingresados a el tipo de dato entero
num1 = parseInt(num1);
num2 = parseInt(num2);

let operator = prompt('What should we do with those numbers?\nPossible answers are: "sum", "substract", "multiply" and "divide"');
switch (operator) {
  case 'sum':
    console.log('The sum of our numbers is: '); 
    console.log(num1+num2);
    break;
  case 'substract':
    console.log('The substraction of our numbers is: '); 
    console.log(num1-num2);
    break;
  case 'multiply':    
    console.log('The multiplication of our numbers is: '); 
    console.log(num1*num2);
    break;
    case 'divide':    
      console.log('The division of our numbers is: '); 
      console.log(parseFloat(num1/num2));
      break;
  default:
    console.log(`Sorry, we can not ${operator}.`);
}
exit = prompt('Do you wish to exit the calculator? Enter yes to exit or anything else to continue.');
if(exit==='yes')
    exit = true;
else{
    exit = false;
}

}while(!exit);
document.open();
document.write('<h3> Gracias por usar nuestra calculadora </h3>');
document.close();