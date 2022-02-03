// Hacemos una llamada al API del Dolar Blue
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
class GroundedItem{
    constructor(id,value){
        this.id = id,
        this.value = value
    }
}
do{
let tempName = prompt('Insert the name of them Item to ground:');
let tempValue = prompt('Insert the current ARS $ Price to maintain its relation.');
tempValue = parseFloat(tempValue);
let itemAGuardar = new GroundedItem(tempName,tempValue);
arrayItems.push(itemAGuardar);
let operador = prompt('Do you wish to continue entering information yes/no')
 if(operador === 'yes') exit = false;
 else exit = true;
}while(exit === false)

for(const card of arrayItems){
    let dolares = card.value/dolarBlue
    console.log(`El item: ${card.id}, tiene un valor de: ${dolares} dolares.`);
}
// luego guardo este valor en una base de datos y actualizo la lista de groundedItems.

