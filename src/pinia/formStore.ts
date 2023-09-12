import { defineStore } from 'pinia'
import { useCartStore } from './cartStore'
const cartStore = useCartStore()

export const useFormStore = defineStore('form', {
	state: () => ({
		bannerState: 'hide',
		name: '',
		email: '',
		phone: '',
		address: '',
		zip: '',
		city: '',
		country: '',
		payment: 'electronic',
		comment: '',
		showErrors: false,
	}),
	actions: {
		bannerOn() {
			this.bannerState = 'show'
		},
		bannerOff() {
			this.bannerState = 'hide'
		},
		setCash(e: Event) {
			e.preventDefault()
			this.payment = 'cash'
		},
		setElectronic(e: Event) {
			e.preventDefault()
			this.payment = 'electonic'
		},
		submit() {
			if (cartStore.cartLength === 0) {
				alert('Shopping cart is empty!')
				return
			}

			const allSet =
				this.isValidName === 'true' &&
				this.isValidEmail === 'true' &&
				this.isValidPhone !== 'false' &&
				this.isValidAddress === 'true' &&
				this.isValidZip === 'true' &&
				this.isValidCity === 'true' &&
				this.isValidCountry === 'true'

			if (allSet) {
				// send data to api
				this.showErrors = false
				this.bannerOn()
				return
			}

			this.showErrors = true
		},
	},
	getters: {
		// eslint-disable-next-line
		showBanner(state: any) {
			if (state.bannerState == 'show') {
				return true
			}
			return false
		},
		// eslint-disable-next-line
		choseCash(state: any) {
			if (state.payment == 'cash') {
				return true
			}
			return false
		},
		// eslint-disable-next-line
		isValidName(state: any) {
			if (state.name === '') return 'empty'
			return /^[a-z ,.'-]+$/i.test(state.name) === true ? 'true' : 'false'
		},
		// eslint-disable-next-line
		isValidEmail(state: any) {
			if (state.email === '') return 'empty'
			// eslint-disable-next-line no-useless-escape
			return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(
				state.email,
			) === true
				? 'true'
				: 'false'
		},
		// eslint-disable-next-line
		isValidPhone(state: any) {
			if (state.phone === '') return 'empty'
			return /^[0-9()-]+$/.test(state.phone) === true ? 'true' : 'false'
		},
		// eslint-disable-next-line
		isValidAddress(state: any) {
			if (state.address === '') return 'empty'
			return /[\w',-\\/.\s]/.test(state.address) === true ? 'true' : 'false'
		},
		// eslint-disable-next-line
		isValidZip(state: any) {
			if (state.zip === '') return 'empty'
			return /^[0-9]{5}(?:-[0-9]{4})?$/.test(state.zip) === true
				? 'true'
				: 'false'
		},
		// eslint-disable-next-line
		isValidCity(state: any) {
			if (state.city === '') return 'empty'
			return /[a-zA-Z]+/.test(state.city) === true ? 'true' : 'false'
		},
		// eslint-disable-next-line
		isValidCountry(state: any) {
			if (state.country === '') return 'empty'
			return /[a-zA-Z]+/.test(state.country) === true ? 'true' : 'false'
		},
	},
})
