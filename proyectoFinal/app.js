/* Objetos */

class GroundedItem{
    constructor(id,value){
        this.id = id,
        this.value = value,
        this.archived = false,
        this.arsOriginal = value
    }
}

url = 'https://api.bluelytics.com.ar/v2/latest'
let informacionAPI
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
            <b>&emsp;$ ${item.value}</b>&emsp;<button class='formText p-1' >Archive</button>
            <hr>
            `
        currentlyGrounded.appendChild(contenedor)
    }
}

// guardamos informacion del form
const form = document.getElementById('newItemForm');
    form.addEventListener('submit',function(event){
        event.preventDefault();
        let tempID = event.target[0].value;
        let tempVal = event.target[1].value;
        let itemAGuardar = new GroundedItem(tempID,tempVal);
        arrayItems.push(itemAGuardar);
        let contenedor = document.createElement('div');
        contenedor.innerHTML = 
            `
            <h5 style='display: inline;'>&emsp;    ID: ${itemAGuardar.id}</h5>
            <b>&emsp;$ ${itemAGuardar.value}</b>&emsp;<button class='formText p-1' >Archive</button>
            <hr>
            `
        currentlyGrounded.appendChild(contenedor)
    }
)
