<script setup lang="ts">
import { useFormStore } from '../../../pinia/formStore'
import textInputField from './textInputField.vue'

const formStore = useFormStore()
</script>
<template>
	<form
		class="h-full w-full col-span-2 bg-white rounded px-6 lg:px-10 py-12"
		id="checkoutForm"
	>
		<h1 class="uppercase text-black font-bold text-3xl">Checkout</h1>
		<div class="mt-10">
			<p class="text-k-main font-bold uppercase tracking-wider mb-2">
				Billing details
			</p>
			<div
				class="w-full flex flex-col items-center lg:grid lg:grid-cols-2 gap-4"
			>
				<textInputField
					:showError="formStore.showErrors"
					type="text"
					:formData="formStore"
					:validator="formStore.isValidName"
					id="name"
					label="Name"
					placeholder="Alex Keebs"
					autocomplete="off"
					:required="true"
					class="w-full"
				/>

				<textInputField
					:showError="formStore.showErrors"
					type="email"
					:formData="formStore"
					:validator="formStore.isValidEmail"
					id="email"
					label="Email Address"
					placeholder="alex@mail.com"
					autocomplete="off"
					:required="true"
					class="w-full"
				/>

				<textInputField
					:showError="formStore.showErrors"
					type="tel"
					:formData="formStore"
					:validator="formStore.isValidPhone"
					id="phone"
					label="Phone Number"
					placeholder="+1000-555-0136"
					autocomplete="off"
					:required="true"
					class="w-full"
				/>
			</div>
		</div>

		<div class="mt-10">
			<p class="text-k-main font-bold uppercase tracking-wider mb-2">
				Shipping Info
			</p>
			<div
				class="w-full flex flex-col items-center lg:grid lg:grid-cols-2 gap-4"
			>
				<textInputField
					:showError="formStore.showErrors"
					type="text"
					:formData="formStore"
					:validator="formStore.isValidAddress"
					id="address"
					label="Address"
					container-class="col-span-2"
					placeholder="1134 Willams Avenue"
					autocomplete="off"
					:required="true"
					class="w-full"
				/>

				<textInputField
					:showError="formStore.showErrors"
					type="text"
					:formData="formStore"
					:validator="formStore.isValidZip"
					id="zip"
					label="Zip Code"
					placeholder="10001"
					autocomplete="off"
					max-length="5"
					:required="true"
					class="w-full"
				/>

				<textInputField
					:showError="formStore.showErrors"
					type="text"
					:formData="formStore"
					:validator="formStore.isValidCity"
					id="city"
					label="City"
					placeholder="New York"
					autocomplete="off"
					:required="true"
					class="w-full"
				/>

				<textInputField
					:showError="formStore.showErrors"
					type="text"
					:formData="formStore"
					:validator="formStore.isValidCountry"
					id="country"
					label="Country"
					placeholder="United Stated"
					autocomplete="off"
					:required="true"
					class="w-full"
				/>
			</div>
		</div>

		<div class="mt-10">
			<p class="text-k-main font-bold uppercase tracking-wider mb-2">
				Payment Details
			</p>
			<p class="text-black font-bold mb-1" for="country">Payment Method</p>
			<div class="w-full flex flex-col lg:grid lg:grid-cols-2 gap-4">
				<div
					class="transition-all cursor-pointer active:translate-y-0.5 flex flex-row items-center gap-4 border border-black border-opacity-60 p-3 rounded group w-full"
					:class="{ 'bg-k-main': !formStore.choseCash }"
					@click="formStore.setElectronic()"
				>
					<div
						class="border border-black border-opacity-60 rounded-full h-3 aspect-square"
						:class="{ 'bg-black': !formStore.choseCash }"
					></div>
					<span class="text-black font-semibold"> e-Money </span>
				</div>
				<div
					class="transition-all cursor-pointer active:translate-y-0.5 flex flex-row items-center gap-4 border border-black border-opacity-60 p-3 rounded group w-full"
					:class="{ 'bg-k-main': formStore.choseCash }"
					@click="formStore.setCash()"
				>
					<div
						class="border border-black border-opacity-60 rounded-full h-3 aspect-square"
						:class="{ 'bg-black': formStore.choseCash }"
					></div>
					<span class="text-black font-semibold"> Cash on Delivery </span>
				</div>

				<div class="h-40 flex flex-col col-span-2">
					<label class="text-black font-bold mb-1 mt-4" for="country"
						>Add a comment</label
					>
					<textarea
						class="h-full text-black outline-none hover:border-k-main font-Manrope font-semibold p-3 bg-white border border-black border-opacity-60 rounded"
						type=""
						id="comment"
						placeholder="Your request"
						v-model="formStore.comment"
						required
					/>
				</div>
			</div>
		</div>
	</form>
</template>
