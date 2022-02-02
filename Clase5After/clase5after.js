/* Objetos nivel Sayiayin */

// Dos clases, carrito y producto.

// las clases nos permite crear moldes para formar objetos
class Producto{
    constructor(name,price,stock){
        this.name = name
        this.price = price
        this.stock = stock
    }

}
class Carrito {
    constructor(){
        this.obj = {}
        this.subtotal = 0
        this.cantidadTotal = 0
    }
    addProducto(producto){
        // convertimos el key en lowecase
        let key = producto.name.toLowerCase()
        if(key in this.obj){
            // existe el producto en el carrito
            this.obj[key].cantidad++
            this.obj[key].subtotal += producto.price
        }else{
            // no existe el producto
            this.obj[key] = {
                cantidad: 1,
                subtotal: producto.price
            }
        }
        this.subtotal = this.subtotal + producto.price
        this.cantidadTotal++
    }
    rmProducto(producto){
        this.subtotal -= producto.price
        this.cantidadTotal--
    }
    print(){
        console.log(`qty: ${this.cantidadTotal}, subtotal: ${this.subtotal}`)
    }
}

function main(){
    console.log('Bienvenido a la tienda ROJA')        
    let producto1 = new Producto('Cerveza',120,3)
    let producto2 = new Producto('Vino',230,5)
    let producto3 = new Producto('Fernet',150,3)
}

let carrito = new Carrito()

carrito.addProducto(producto1)
carrito.addProducto(producto2)
carrito.addProducto(producto3)