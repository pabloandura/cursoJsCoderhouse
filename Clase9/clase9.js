/* Clase 9 Eventos */

/* Los eventos son la manera que tenemos de controlar acciones de los usuarios y definir comportamiento de la pagina */

// JS permite asignar una funcion a cada evento y recibe el nombre de event handlers (objetos)
// tambien se asignan event listener que son objetos que escuchan por eventos

// let boton = document.getElementById('btnMain',console.log('Botonazo!'));

const cart = []

const productos = [
    {id: 1, name:'Cerveza', price: 120},
    {id: 2, name:'Fernet', price: 80},
    {id: 3, name:'Whiskey', price: 70},
    {id: 4, name:'Ron', price: 30},
    {id: 5, name:'Vino', price: 50},
]


const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

// agrega al carro por el index de producto
function addCart(id){
    const producto = productos.find(p => p.id == id)
    console.log('Add', producto);
    cart.push(producto);
}

// eventos surtidos diferentes maneras de escuchar eventos
btn1.onclick = () => addCart(1);
btn2.addEventListener('click', function (){
    addCart(2);
})
btn3.addEventListener('click',() => {addCart(3)})
btn4.onclick = () => addCart(4)
btn5.onclick = () => addCart(5)

document.getElementById('btnShow').addEventListener('click', () => {
    console.log(cart)
})

document.getElementById('btnShowTotal').onclick = () => {
    let total = 0
    for(const prodCart of cart){
        total += prodCart.price
    }
    alert(`El total es ${total}`);
}
// validamos el cuestionario
function validarForm(event){
    event.preventDefault()
    console.log('Formulario enviado');
    
    }

// definimos el objeto formulario y escuchamos el evento submit

let myForm = document.getElementById('formulario')
myForm.addEventListener('submit', validarForm);

// objeto evento
// en cada navegador se crea de forma automatica un objeto evento
// e tiene varios metodos interesantes

// .target() nos otorga la informacion de la instruccion HTML que ejecuto al evento

// .preventDefault() evita que se ejecuten los comportamientos de evento estandar de su tipo

// 

