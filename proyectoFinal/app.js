/* Objetos */

class GroundedItem{
    constructor(id,value){
        this.id = id,
        this.value = value
        this.archived = false;
    }
}





url = 'https://api.bluelytics.com.ar/v2/latest'
fetch(url)
  .then(response => response.json())
  .then(formatedResponse =>  console.log(formatedResponse))

// valor del dolar blue hasta que entienda como guardar el objeto json
const dolarBlue = 217;
// operador de salida
let exit = false;
// grounded item array
let arrayItems = [];

groundedArray = []
// Aca hay que cargar el array con la informacion de la base de datos. 
// y obtener este json.
groundedArray.push(new GroundedItem('tomate1kg',35));
groundedArray.push(new GroundedItem('galletitasFrutigram',150));

// do{
// let tempName = prompt('Insert the name of them Item to ground:');
// let tempValue = prompt('Insert the current ARS $ Price to maintain its relation.');
// tempValue = parseFloat(tempValue);
// let itemAGuardar = new GroundedItem(tempName,tempValue);
// arrayItems.push(itemAGuardar);
// let operador = prompt('Do you wish to continue entering information yes/no')
//  if(operador === 'yes') exit = false;
//  else exit = true;
// }while(exit === false)

for(const card of arrayItems){
    let dolares = card.value/dolarBlue
    console.log(`El item: ${card.id}, tiene un valor de: ${dolares} dolares.`);
}
// luego guardo este valor en una base de datos y actualizo la lista de groundedItems.

const currentlyGrounded = document.getElementById('currentlyGrounded')

// por cada objeto en el array
for(const item of groundedArray){
    if(item.archived===false){
        let contenedor = document.createElement('div');
        item.value = item.value / dolarBlue;
        contenedor.innerHTML = 
            `
            <h5 style='display: inline;'>&emsp;    ID: ${item.id}</h5>
            <b>&emsp;$ ${item.value}</b>&emsp;<button>Archive</button>
            <hr>
            `
        currentlyGrounded.appendChild(contenedor)
    }
}

// guardamos informacion del form
const form = document.getElementById('newItemForm');
    form.addEventListener('submit',function(event){
        event.preventDefault();
        console.log(event)
    })
let currentlyGrounding = Array.from(document.querySelectorAll('#newItemForm input')).reduce((acc,input)=>({...acc,[input.id]: input.value}), {});
