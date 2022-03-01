const DateTime = luxon.DateTime;

/* Objetos */
// Grounded Log es un objeto creado en cada commodity y sera la unidad poblacional
class GroundedLog{
    constructor(id,value){
        this.id = id,
        this.value = value,
        this.order = Date.now(),
        this.date = DateTime.now().toLocaleString(),
        this.valueBlue = 0
    }
    async getValueBlue() { // conexion a la API, promesa dentro de promesa
        const resp = await fetch(url)
          .then((data) => data.json())
          .then((res) => res.blue.value_sell);
        this.valueBlue = resp;
    }
};

// GroundedItem es un objeto creado para representar a cada commodity y albergara GroundedLogs
class GroundedItem{
    constructor(id){
        this.id = id,
        this.archived = false,
        this.logs = [] // array vacio para ingresar logs

    }
};

// objeto de seleccion para graph.js
class Paquete{
    constructor(x,y){
        this.x = x, //array para Plotly
        this.y = y // tambien
    }
};

// siempre hay un solo paquete por app
const PKT = new Paquete([],[]);