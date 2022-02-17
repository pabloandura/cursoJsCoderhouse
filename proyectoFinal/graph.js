/* Funcion para mostrar la seccion de Graficos con libreria PlotlyJS */
function showGraph(){

    let data = JSON.parse(sessionStorage.getItem('fideos'));

    //creamos los arrays requeridos por plotly
    let exes = [];
    let greeks = [];
    for(let info of data.logs){
        exes.push(info.date);
        greeks.push(info.value);
    }

    const graph = document.getElementById('graph');

    const layout = {
        title: 'Values of Commodities in Dolar Blue by ID and Date',
        paper_bgcolor: "rgb(255, 194, 82)",
        plot_bgcolor: "rgb(255, 180, 110)"
        
    }
    Plotly.newPlot(graph,[{
        type: 'scatter',      // grafico de puntos
        x: exes,     // array de fechas en ms desde ES epoch (Como lo convierto a fechas?)
        y: greeks,     // array de valores
        name: `${data.id}` // nombre
        }], 
        layout
        )
    }