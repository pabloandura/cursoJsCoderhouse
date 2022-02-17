const showProductCarts = () => {
    
    // Seleccionamos el elemento a traves de su ID en una variable llamada divProducts
    const divCart = document.getElementById('productsOnCart');

    // definimos una variable tipo string
    let htmlListProducts = "";
    // usamos el metodo de orden superior forEach para aplicar una concatenacion de string con parametros
    CART.forEach(product => {
        htmlListProducts +=
            `
            <div style='border:solid red 1px;' class='col-sm-2'>
                <img src='${product.img}' style='height:100px;width:100%;'>
                <br>
                <b>${product.name}</b>
                <i>Quantity: ${product.quantity}</i>
                <p>Unit: ${product.unitPrice}</p>
                <p>Total: ${product.total}</p>
            </div>
            `
        })

    divCart.innerHTML = htmlListProducts;
// despues de que se pongan los productos, registro los eventos click
    registerClickEvent();
}

// definimos showProducts()
const showProducts = (category='all') => {
    
    // Seleccionamos el elemento a traves de su ID en una variable llamada divProducts
    const divProducts = document.getElementById('products');

    // definimos una variable tipo string
    let htmlListProducts = "";

    // creamos el filtro
    let products
    if(category=='cheap') products = PRODUCTS.filter(p => p.price < 100);
    else if(category=='expensive') products = PRODUCTS.filter(p => p.price >= 100);
    else products = PRODUCTS;
    // usamos el metodo de orden superior forEach para aplicar una concatenacion de string con parametros
    PRODUCTS.forEach(product => {
        htmlListProducts +=
            `
            <div style='border:solid red 1px;' class='col-sm-3'>
                <img src='${product.img}' style='height:100px;width:100%;'>
                <br>
                <b>${product.name}</b>
                <p>${product.price}</p>

                <button class="addCart" id="p-${product.id}">Add to Cart ➕</button>
            </div>
            `
        })

    divProducts.innerHTML = htmlListProducts
// despues de que se pongan los productos, registro los eventos click
    registerClickEvent()
}

const registerClickEvent = () => {
    // seleccionamos todos los botones tendran este evento
    const btnAddCarts = document.getElementsByClassName('addCart');
    // asignamos al evento onclick la funcion addCart
    for(const btn of btnAddCarts){
        btn.onclick = addCart
    }

}
// definimos la funcion addCart que agregara al carrito el producto 
const addCart = (e) => {
    // en productId se guarda una operacion de strings de el boton que llamo a este evento( target )
    const productId = parseInt(e.target.id.split('-')[1]) 
    /* la operacion consta de obtener el campo ID de un elemento HTML
    como nosotros definimos en la creacion del inventario que tenga el formato
    "p-ID" debemos separarlo con el metodo split por el delimitador "-" y 
    necesitaremos el indice uno (segundo elemento del array resultante) 
    que contiene este numero, luego parseamos como entero */
    const product = PRODUCTS.find(p => p.id == productId);
    // agregamos a nuestro array un objeto de tipo ProductCart
    const productCart = new ProductCart(product);
// buscamos en el cart si existe ya nuestro producto
    const productInCart = CART.find(p => p.id == productId);
    // si existe entonces sumale uno
    if(productInCart) productInCart.add()
    // si no existe, agreguen uno nuevo
    else  CART.push(productCart);

    showProductCarts();
    calcTotalCart();

}

const calcTotalCart = () => {
    let suma = 0
    CART.forEach(p => suma += p.total);
    const elementTotal = document.getElementById('totalCart')
    elementTotal.innerHTML = `${suma}`
}
// primera cosa que se ejecuta
showProducts();
document.getElementById('btnShowProductAll').onclick = () => {showProducts('all')}
document.getElementById('btnShowProductCheap').onclick = () => {showProducts('cheap')}
document.getElementById('btnShowProductExpensive').onclick = () => {showProducts('expensive')}