// rellenar nuestra pagina con los objetos que estamos analizando
const currentlyGrounded = document.getElementById('currentlyGrounded')
for(const item of ITEMS){
    let contenedor = document.createElement('div');
    contenedor.innerHTML = 
        `
        <h5 style='display: inline;'>&emsp;    ID: ${item.id}</h5>
        <b>&emsp;</b>&emsp;
        <hr>
        `
    currentlyGrounded.appendChild(contenedor)
}
/* EVENTOS */
// cuando se cambie un tipo de groundedItem del elemento Select del DOM
const selectedItem = document.getElementById('itemID');
    selectedItem.onchange = event => {
        // Verificamos que no sea selectHere , si lo es, esconder el grafico
        let graphTitle = document.getElementById('graphTitle'); // selecciono

        console.log(event.target.value)
        switch(event.target.value){
            case 'fideosSecos':
                PKT.x = fechasFideo;
                PKT.y = valorFideo;
                PKT.name = event.target.value;
                graphTitle.innerHTML = `Historical price comparison for "${event.target.value}".` // agrego al string el nombre de seleccion
                showGraph(PKT);
                break;
            case 'pollo':
                PKT.x = fechasPollo;
                PKT.y = valorPollo;
                PKT.name = event.target.value;
                graphTitle.innerHTML = `Historical price comparison for "${event.target.value}".` // agrego al string el nombre de seleccion
                showGraph(PKT);
                break;        
            case 'selectHere':
                graphTitle.innerHTML = `Please select a product to show statistics.` // llamada a accion
                document.getElementById('graph').style = 'display: none;' // oculto grafico
                break;
            default: 
                console.log('Algo sucedio.')
                break;
            }
            // Aqui se aniadirian mas productos 
    }
// guardamos informacion del form
const form = document.getElementById('newItemForm');
    form.addEventListener('submit',function(event){
        /** Agregamos nuestro input de usuario a Plotly  */
        event.preventDefault();
        // hubo una carga desde aca? ***
        let cantidades = fideosSecos.logs.length;
        // obtenemos el index del item seleccionado del dropdown
        let selectedItem = event.target[0].selectedIndex
        // guardamos su nombre en tempID
        let tempID = event.target[0][selectedItem].value
        // guardamos el valor 
        let tempVal = parseInt(event.target[1].value);
        // creamos un nuevo log
        let itemAGuardar = new GroundedLog(tempID,tempVal);
        // actualizamos su valor con ayuda de una api
        itemAGuardar.getValueBlue();
        // guardamos 
        fideosSecos.logs.push(itemAGuardar);
        // hasta aca? ***
        let cantidades2 = fideosSecos.logs.length; // comparo las cargas
        const doThis = (cantidades2 > cantidades) ? logEntry : logFail // toastify
        doThis();
        if(doThis === logEntry) updatePlot(Date.now(),tempVal,PKT)


    })