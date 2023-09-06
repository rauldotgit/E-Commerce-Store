import { defineStore } from "pinia";

export const useFormStore = defineStore('form',{
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
        showErrors: false
    }),
    actions: {
        bannerOn(){
            this.bannerState = 'show'
        },
        bannerOff(){
            this.bannerState = 'hide'
        },
        setCash(){
            this.payment = 'cash'
        },
        setElectronic(){
            this.payment = 'electonic'
        },
        submit(){
            let allSet =
                this.isValidName === 'true' &&
                this.isValidEmail === 'true' &&
                this.isValidPhone === 'true' &&
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
        }
    },
    getters: {
        showBanner(state: any) {
            if (state.bannerState == 'show') {
                return true
            }
            return false
        },
        choseCash(state: any){
            if(state.payment == 'cash'){
                return true
            }
            return false
        },
        isValidName(state: any){
            if(state.name === '') return 'empty'
            return /^[a-z ,.'-]+$/i.test(state.name) === true ? 'true' : 'false'
        },
        isValidEmail(state: any){
            if(state.email === '') return 'empty'
            return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(state.email) === true ? 'true' : 'false'
        },
        isValidPhone(state: any){
            if(state.phone === '') return 'empty'
            return /^[0-9()-]+$/.test(state.phone) === true ? 'true' : 'false'
        },
        isValidAddress(state: any){
            if(state.address === '') return 'empty'
            return /[\w',-\\/.\s]/.test(state.address) === true ? 'true' : 'false'
        },
        isValidZip(state: any){
            if(state.zip === '') return 'empty'
            return /^[0-9]{5}(?:-[0-9]{4})?$/.test(state.zip) === true ? 'true' : 'false'
        },
        isValidCity(state: any){
            if(state.city === '') return 'empty'
            return /[a-zA-Z]+/.test(state.city) === true ? 'true' : 'false'
        },
        isValidCountry(state: any){
            if(state.country === '') return 'empty'
            return /[a-zA-Z]+/.test(state.country) === true ? 'true' : 'false'
        }
    }
})
