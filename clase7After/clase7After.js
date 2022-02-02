/* Clase 7 After de Arrays*/

console.log(products)

const cart = []

class ProductCart {
    constructor(obj){
        this.id = obj.id,
        this.name = obj.name,
        this.price = obj.price
        this.quantity = 1
    }
}

//funcion anonima
const addProductToCart = (id, quantity) => {
    const product = product.find(p => p.id == id)
    //
    if(!product) return 
    const product = product.find(function(p){
        return p.id == id
    })
    if(!productCart) productCart.quantity++
    else cart.push(new ProductCart(product)) // si no es null agregar al carro
    
    return productCart

}