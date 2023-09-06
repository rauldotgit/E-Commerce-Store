import { defineStore } from "pinia";
import { product } from '../data/products.ts'

interface cartItem {
    product: product
    amount: number
}

interface cart {
    [key: string]: cartItem
}

export const useCartStore = defineStore('cart',{
    state: () => ({
        cart: {} as cart,
        showCart: false,
        showQuickAdd: true,
        shipping: 50
    }),
    actions: {
        cartOn(){
	        this.showCart = true
        },

        cartOff(){
            this.showCart = false
        },

        addToCart(item: product){
            let itemKey = item.category + item.id + ""
            if(itemKey in this.cart){
                this.cart[itemKey].amount = this.cart[itemKey].amount + 1
            } else {
                this.cart[itemKey] = {product: item, amount: 1}
            }
        },

        removeFromCart(item: product){
            let itemKey = item.category + item.id + ""
            if(itemKey in this.cart){
                if(this.cart[itemKey].amount > 0){
                    this.cart[itemKey].amount = this.cart[itemKey].amount - 1
                }
                else {
                    delete this.cart[itemKey]
                }
            }
        },
        clearCart(){
            this.cart = {}
        },
        getProductAmount(productKey: string): number{
            return this.cart[productKey].amount || 0
        }
    },
    getters: {
        cartValue(state: any){
            let ressi = 0
            for(let id of Object.keys(state.cart)){
                ressi += state.cart[id].amount * state.cart[id].product.price
            }
            return ressi
        },
        cartLength(state: any){
            let ressi = 0
            for(let id of Object.keys(state.cart)){
                ressi += state.cart[id].amount
            }
            return ressi
        },
        isEmpty(state: any){
            return Object.keys(state.cart).length == 0 ? true: false
        },
        getItemAmountByKey(state: any){
            return (productKey: string) => {state.cart[productKey].amount}
        },
        getItemByKey(state: any){
            return (productKey: string) => {state.cart[productKey]}
        },
        getFirstItem(state: any){
            return state.cart[Object.keys(state.cart)[0]]
        },
        getUniqueItems(state: any){
            return Object.keys(state.cart).length || 0
        },
        getVat(_: any){
            return (this.cartValue * 0.2).toFixed(2)
        },
        getGrandTotal(_: any){
            return (this.cartValue + this.shipping).toFixed(2)
        }
    }
})
