/* Pre procesos para el grafico */
const fechasDolar = [];
const valorDolar = [];

for (let log of dataDolar){
    let {date , compra} = log;
    fechasDolar.push(date);
    valorDolar.push(compra);
}

let dataFideos = JSON.parse(sessionStorage.getItem('fideos'));

    //creamos los arrays requeridos por plotly
const fechasFideo = [];
const valorFideo = [];
    for(let info of dataFideos.logs){
        fechasFideo.push(info.date);
        valorFideo.push(info.value);
    }

/* Funcion para mostrar la seccion de Graficos con libreria PlotlyJS */
function showGraph(){

    const graph = document.getElementById('graph');

    const layout = {
        title: 'Values of Commodities in Dolar Blue by ID and Date',
        paper_bgcolor: "rgb(255, 194, 82)",
        plot_bgcolor: "rgb(255, 180, 110)",
        legend: {orientation: 'h', side: 'top'}
    }   

    const config = {
        responsive: true,
        editable: true,
        scrollZoom: true
    }
    
    Plotly.newPlot(graph,[
        {
            type: 'scatter',      // grafico de puntos
            x: fechasFideo,     // array de fechas en ms desde ES epoch (Como lo convierto a fechas?)
            y: valorFideo,     // array de valores
            name: `${dataFideos.id}` // nombre
        },
        {
            type: 'scatter',
            x: fechasDolar,
            y: valorDolar,
            name: "Valor compra dolar oficial."
        }
        ], 
        layout,
        config)
}
 // ESTA FUNCION ROMPE MI GRAFICO
function updatePlot(equis,griega){
    
    const graph = document.getElementById('graph');

    const layout = {
        title: 'Values of Commodities in Dolar Blue by ID and Date',
        paper_bgcolor: "rgb(255, 194, 82)",
        plot_bgcolor: "rgb(255, 180, 110)",
        legend: {orientation: 'h', side: 'top'},
        datarevision: 44
    }   

    const config = {
        responsive: true,
        editable: true,
        scrollZoom: true
    }

    Plotly.react(graph,[
        {
            type: 'scatter',      // grafico de puntos
            x: fechasFideo,     // array de fechas en ms desde ES epoch (Como lo convierto a fechas?)
            y: valorFideo,     // array de valores
            name: `${dataFideos.id}` // nombre
        },
        {
            type: 'scatter',
            x: fechasDolar,
            y: valorDolar,
            name: "Valor compra dolar oficial."
        },
        {
            type: 'scatter',
            x: [equis],
            y: [griega],
            name: "Informacion ingresada por usuario"
        }
        ], 
        layout,
        config
        )
}