// definimos showProducts()
const showProducts = () => {
    
    // Seleccionamos el elemento a traves de su ID en una variable llamada divProducts
    let divProducts = document.getElementById('products');

    // definimos una variable tipo string
    let htmlListProducts = "";
    // usamos el metodo de orden superior forEach para aplicar una concatenacion de string con parametros
    products.forEach(product => {
        htmlListProducts +=
            `
            <div style='border-color:red; border-solid:5px;' class='col-sm-4'>
                <b>${product.name}</b>
                <p>${product.price}</p>

                <button class="addCart" id="p-${product.id}">Add to Cart 🛒</button>
            </div>
            `
        })

    divProducts.innerHTML = htmlListProducts
}
// primera cosa que se ejecuta
showProducts();
