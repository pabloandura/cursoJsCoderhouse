class ProductCart {
    constructor(obj){
        this.name = obj.name,
        this.id = obj.id,
        this.unitPrice = obj.price,
        this.img = obj.img,
        this.total = this.unitPrice,
        this.quantity = 1
    }
    add(){
        this.quantity++
        this.total += this.unitPrice
    }
    remove(){
        this.quantity--
        this.total -= this.unitPrice
    }
}