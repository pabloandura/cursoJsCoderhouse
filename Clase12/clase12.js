/* Librerias 
Codigos prescritos como cajas de herramientas que nos permiten abstraernos
y enfocarnos en el desarrollo. La practica comun es cargar archivos minificados.
Son archivos js que no contienen formateo o espacios, permite ahorrar en espacio 
para nuestra aplicacion.

Todas las librerias vienen con su documentacion, para implementarlas y aprender a usarlas.

*/ 
// Aqui tenemos Sweet Alerts
swal({  
    title: "Good job!",  
    text: "You clicked the button!",  
    icon: "success",  
    button: "Aww yiss!"
});

// Tambien Toastify

Toastify({
    text: 'This is a toast',
    duration: 6000,
    gravity: 'bottom',
    position: 'right',
    style: {
        background: 'salmon'
    }
}).showToast();

// Otra libreria es Luxon con la que trabajamos con fechas y horas.

let DateTime = luxon.DateTime;

const dt = DateTime.local(2022,1,25,12,30);
console.log(dt);

const dt1 = DateTime.fromObject(
    { day: 22, hour: 12, month: 2},
    {zone: 'America/Buenos_Aires', numberingSystem: 'beng'}
    )

console.log(dt1.toString());

console.log(DateTime.fromISO("2015-05-15").toString());