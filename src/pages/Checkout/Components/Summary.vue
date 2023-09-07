<script setup lang="ts">
import { useCartStore } from '../../../pinia/cartStore.ts'
import { useFormStore } from '../../../pinia/formStore.ts'
import item from './Item.vue'
import buttonSolid from '../../All/Buttons/button-solid.vue'

const cartStore = useCartStore()
const formStore = useFormStore()
</script>

<template>
	<div
		class="col-span-1 bg-white flex flex-col rounded px-6 lg:px-10 py-12 h-fit max-h-full"
	>
		<h1 class="uppercase text-black font-bold text-2xl">Summary</h1>
		<div class="my-10 w-full h-full flex flex-col gap-5 overflow-scroll">
			<item
				v-for="(value, _) in cartStore.cart"
				:cart-item="value.product"
				:item-count="value.amount"
			/>
		</div>
		<div class="flex flex-row justify-between">
			<p class="text-black text-opacity-60 font-semibold tracking-wide">
				TOTAL
			</p>
			<p class="text-black text-lg font-bold">${{ cartStore.cartValue }}</p>
		</div>
		<div class="flex flex-row justify-between">
			<p class="text-black text-opacity-60 font-semibold tracking-wide">
				SHIPPING
			</p>
			<p class="text-black text-lg font-bold">${{ cartStore.shipping }}</p>
		</div>
		<div class="flex flex-row justify-between">
			<p class="text-black text-opacity-60 font-semibold tracking-wide">
				VAT (INCLUDED)
			</p>
			<p class="text-black text-lg font-bold">${{ cartStore.getVat }}</p>
		</div>
		<div class="flex flex-row justify-between mt-4">
			<p class="text-black font-black tracking-wide">GRAND TOTAL</p>
			<p class="text-black text-lg font-bold">${{ cartStore.getGrandTotal }}</p>
		</div>
		<buttonSolid
			content="continue & pay"
			color="light"
			class="font-bold self-center mt-8"
			@click="formStore.submit()"
		/>
	</div>
</template>
