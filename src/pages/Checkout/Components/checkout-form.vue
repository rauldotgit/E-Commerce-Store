<script setup lang="ts">
import { useFormStore } from '../../../pinia/formStore'
import textInputField from './text-input-field.vue'

const formStore = useFormStore()
</script>
<template>
	<form
		class="col-span-2 h-full w-full rounded bg-white px-6 py-12 lg:px-10"
		id="checkoutForm"
	>
		<h1 class="text-3xl font-bold uppercase text-black">Checkout</h1>
		<div class="mt-10">
			<p class="mb-2 font-bold uppercase tracking-wider text-k-main">
				Billing details
			</p>
			<div
				class="flex w-full flex-col items-center gap-4 lg:grid lg:grid-cols-2"
			>
				<textInputField
					:showError="formStore.showErrors"
					type="text"
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
			<p class="mb-2 font-bold uppercase tracking-wider text-k-main">
				Shipping Info
			</p>
			<div
				class="flex w-full flex-col items-center gap-4 lg:grid lg:grid-cols-2"
			>
				<textInputField
					:showError="formStore.showErrors"
					type="text"
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
			<p class="mb-2 font-bold uppercase tracking-wider text-k-main">
				Payment Details
			</p>
			<p class="mb-1 font-bold text-black" for="country">Payment Method</p>
			<div class="flex w-full flex-col gap-4 lg:grid lg:grid-cols-2">
				<div
					class="group flex w-full cursor-pointer flex-row items-center gap-4 rounded border border-black border-opacity-60 p-3 transition-all active:translate-y-0.5"
					:class="{ 'bg-k-main': !formStore.choseCash }"
					@click="formStore.setElectronic()"
				>
					<div
						class="aspect-square h-3 rounded-full border border-black border-opacity-60"
						:class="{ 'bg-black': !formStore.choseCash }"
					></div>
					<span class="font-semibold text-black"> e-Money </span>
				</div>
				<div
					class="group flex w-full cursor-pointer flex-row items-center gap-4 rounded border border-black border-opacity-60 p-3 transition-all active:translate-y-0.5"
					:class="{ 'bg-k-main': formStore.choseCash }"
					@click="formStore.setCash()"
				>
					<div
						class="aspect-square h-3 rounded-full border border-black border-opacity-60"
						:class="{ 'bg-black': formStore.choseCash }"
					></div>
					<span class="font-semibold text-black"> Cash on Delivery </span>
				</div>

				<div class="col-span-2 flex h-40 flex-col">
					<label class="mb-1 mt-4 font-bold text-black" for="country"
						>Add a comment</label
					>
					<textarea
						class="h-full rounded border border-black border-opacity-60 bg-white p-3 font-Manrope font-semibold text-black outline-none hover:border-k-main"
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
