/* Objetos */
// Grounded Log es un objeto creado en cada commodity y sera la unidad poblacional
class GroundedLog{
    constructor(id,value){
        this.id = id,
        this.value = value,
        this.valueBlue = value/dolarBlue,
        this.date = Date.now()
    }
}
// GroundedItem es un objeto creado para representar a cada commodity y albergara GroundedLogs
class GroundedItem{
    constructor(id){
        this.id = id,
        this.archived = false,
        this.logs = [] // array vacio para ingresar logs

    }
}