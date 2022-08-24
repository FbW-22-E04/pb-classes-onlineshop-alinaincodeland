console.log("1. Product")

class Product {

    constructor (name, price) {
    this.name = name
    this.price = price 
    }

    containedVAT() {
        const vat = this.price * 0.16 
        return `${vat} € VAT incl.`
    }
    
    toText() {
        return `${this.name} ${this.price}€ in total. ${this.containedVAT()} (16%).`

    }
}

const tracksuit = new Product("Adidas tracksuit", 150.0)
const shoes = new Product("Puma running shoes", 85.99)
const socks = new Product("Socks set", 4.99) 

console.log(tracksuit.toText()) // Adidas tracksuit 150.00 € in total. 24.00 € VAT incl. (16%).
console.log(tracksuit.containedVAT()) // 24.00 € VAT incl.


console.log("------------------------------------------------")

console.log("2. Cart")

class Cart {
    constructor () {
        this.products = []
    }

    addProduct(shoppedProduct) {
        if (shoppedProduct instanceof Product) {
            this.products.push(shoppedProduct) 
            return `Your shopping cart now contains ${this.products.length} products.`
        } else {
            return `This is not available in our shop!`
        }
    }

    getProductInfoCart() {
        return this.products.forEach(item => 
            console.log(item.toText()))
    }

    getTotalItemsPrice() {
        const sum = this.products.map(element => Number(element.price)).reduce((acc, curr) => acc + curr, 0)
        return `The total price for ${this.products.length} items in your cart amounts to ${sum} €.`
    }
}

console.log("------------------------------------------------------");

console.log("3. Test your cart with products");

const cart = new Cart()
console.log(cart.addProduct("potato"));  // This is not available in our shop!
console.log(cart.addProduct(tracksuit));// Your shopping cart now contains 1 products
console.log(cart.addProduct(shoes)) // Your shopping cart now contains 2 products
console.log(cart.addProduct(socks))// Your shopping cart now contains 3 products


console.log(cart.getProductInfoCart());
// Adidas running shoes 150.00 € in total. 24.00 € VAT incl. (16%).
// Puma tracksuit 100.00 € in total. 16.00 € VAT incl. (16%).

console.log(cart.getTotalItemsPrice())
// The total for 2 items in your cart amounts to 249.99 €.