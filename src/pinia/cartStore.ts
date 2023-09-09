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
            document.body.classList.add('overflow-y-hidden')
        },

        cartOff(){
            this.showCart = false
            document.body.classList.remove('overflow-y-hidden')
        },

        addToCart(item: product){
            let itemKey = item.category + item.id + ""
            if(itemKey in this.cart){
                this.cart[itemKey].amount = this.cart[itemKey].amount + 1
            } else {
                this.cart[itemKey] = {product: item, amount: 1}
            }
        },
        addTestItem(){
            this.addToCart({   
                id: 0,
                category: 'deskmats',
                src: '/products/deskmats/mat1-show.webp',
                topSrc: '/products/deskmats/grrr-full.webp',
                botSrc: '/products/deskmats/grrr-close-alt.webp',
                rightSrc: '/products/deskmats/grrr-close.webp',
                nu: true,
                header: '"Grrr"',
                subheader: 'Deskmat',
                text: 'The new XX99 Mark II keyboard is the pinnacle of pristine typing. It redefines your premium keyboard experience by providing a balanced depth and precision to each press of a key.',
                features: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla. Mi bibendum neque egestas congue quisque egestas diam in arcu. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Rutrum quisque non tellus orci ac auctor augue mauris augue.",
                inthebox: [{count: 1, content: 'Deskmat'}, {count: 1, content: 'Carrying Pouch'}],
                price: 599
            })
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
            return Object.keys(state.cart).length < 1 ? true: false
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
        },
        isCartShown(state: any){
            return state.showCart === true ? true : false
        }
    }
})
