/* Pre procesos para el grafico */

// Dolar Blue
const fechasBlue = [];
const valorBlue = [];

for (let log of BLUE){
    let {date , value} = log;
    fechasBlue.push(date);
    valorBlue.push(value);
}

// Dolar Oficial
const fechasOficial = [];
const valorOficial = [];

for (let log of OFICIAL){
    let {date , compra} = log;
    fechasOficial.push(date);
    valorOficial.push(compra);
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
            x: fechasOficial,
            y: valorOficial,
            name: "Dolar oficial."
        },
        {
            type: 'scatter',
            x: fechasBlue,
            y: valorBlue,
            name: "Dolar Blue."
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
            x: fechasOficial,
            y: valorOficial,
            name: "Valor compra dolar oficial."
        },{
            type: 'scatter',
            x: fechasBlue,
            y: valorBlue,
            name: "Valor compra dolar blue."
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