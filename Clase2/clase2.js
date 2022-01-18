// Condicionales en JS
// Es una estructura basada en Algebra de Boole, estados binarios.
// Es sequencial y ofrecen ejecucion en linea recta. 

/*
let varBooleana = true;

console.log(varBooleana);

if(varBooleana){
    console.log('Se ejecuto el IF');
}

let nombre = prompt("Ingrese nombre de usuario");    

// podemos validar que se ingrese algo en vez de solo espacios con el metodo de strings .trim()
nombre = nombre.trim();

if (nombre == "") {
    alert("No ingresaste nombre de usuario")
} else {
    alert("Nombre de usuario es " + nombre)
}
*/

// Ejercicio en clase
// Crear un algoritmo con un condicional

// Piedra papel y tijeras.

//necesito random para simular la eleccion de la computadora

var playerChoice = prompt('Choose "rock", "paper" and "scissors" to play.');
var javascriptChoice = Math.random();
console.log(javascriptChoice);
// ya que no vimos ciclos tendremos un solo intento a adivinarle
if(javascriptChoice > 0.67){
    javascriptChoice = 'rock';
}
else if(javascriptChoice < 0.33){
    javascriptChoice = 'paper';
}
else {
    javascriptChoice = 'scissors';
}
document.open();
document.write('<br><h1>Rock, paper, scissors...</h1><br>');
// Condicion de empate (mas frequente)
if(javascriptChoice === playerChoice){
    document.write('Tied round!');
}
//Condiciones de Derrota
else if((javascriptChoice === 'rock') && (playerChoice === 'scissors')){
    document.write('Rock! javascript Wins');
}
else if((javascriptChoice === 'scissors') && (playerChoice === 'paper')){
    document.write('Scissors! javascript Wins');
}
else if((javascriptChoice === 'paper') && (playerChoice === 'rock')){
    document.write('Paper! javascript Wins');
}//Condiciones de Victoria
else if((javascriptChoice === 'scissors') && (playerChoice === 'rock')){
    document.write('Rock? You win!');
}
else if((javascriptChoice === 'rock') && (playerChoice === 'paper')){
    document.write('Paper? You win!');
}
else if((javascriptChoice === 'paper') && (playerChoice === 'scissors')){
    document.write('Scissors? You win!');
}
document.close();

// Gracias tutor por estar presente a dudas y todo, vamos por mas Javascript!
