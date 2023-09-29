import CartModal from './cart-modal.vue'
import { createTestingPinia } from '@pinia/testing'
import { useCartStore } from '../../pinia/cartStore'
import { products } from '../../data/products.ts'

describe('Desktop: <CartModal />', () => {
	beforeEach(() => {
		cy.mount(CartModal, {
			global: {
				plugins: [
					createTestingPinia({
						stubActions: false,
						createSpy: cy.spy,
					}),
				],
			},
		})
		cy.wrap(useCartStore()).as('store')
	})
	// const store = useCartStore()
	it('shows close button and calls function upon press', () => {
		cy.viewport('macbook-11')
		cy.get('[data-test="cart-close-button"]').click()
		cy.get('@store').its('cartOff').should('be.calledOnce')
	})

	it('shows cart header and 0 on empty cart', () => {
		cy.viewport('macbook-11')
		cy.get('[data-test="cart-item-container"]')
	})

	it('shows empty cart message', () => {
		cy.viewport('macbook-11')
		cy.get('[data-test="cart-item-container"]')
	})

	it('shows total and total amount to be 0', () => {
		cy.viewport('macbook-11')
		cy.get('[data-test="cart-item-container"]')
	})

	it('doesnt show checkout button on empty cart', () => {
		cy.viewport('macbook-11')
		cy.get('[data-test="cart-item-container"]')
	})

	it('shows items when added', () => {
		cy.viewport('macbook-11')
		const store = useCartStore()
		store.addToCart(products.keyboards[0])
		store.addToCart(products.deskmats[1])
		cy.get('[data-test="cart-item-container"]')
	})

	it('shows amount of items in header', () => {
		cy.viewport('macbook-11')
		const store = useCartStore()
		store.addToCart(products.keyboards[0])
		store.addToCart(products.deskmats[1])
		cy.get('[data-test="cart-item-container"]')
	})

	it('shows delete all button and empties cart upon press', () => {
		cy.viewport('macbook-11')
		cy.get('[data-test="cart-item-container"]')
	})

	it('does not show checkout button on empty cart', () => {
		cy.viewport('macbook-11')
		cy.get('[data-test="cart-item-container"]')
	})

	it('shows checkout button on non empty cart and requests page upon press', () => {
		cy.viewport('macbook-11')
		cy.get('[data-test="cart-item-container"]')
	})

	it('', () => {
		cy.viewport('macbook-11')
		const store = useCartStore()
		store.addToCart(products.keyboards[0])
		store.addToCart(products.deskmats[1])
		cy.get('[data-test="cart-item-container"]')
	})
})
