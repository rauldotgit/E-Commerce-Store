<script setup lang="ts">
import buttonCount from '../Buttons/button-count.vue'
import { product } from '../../../data/products'
import { useCartStore } from '../../../pinia/cartStore.ts'

const cartStore = useCartStore()

const props = defineProps<{
	cartItem: product
	itemCount: number
}>()
</script>

<template>
	<div
		v-if="itemCount > 0"
		class="px-6 lg:px-10 flex flex-row justify-between gap-12 items-center w-full"
	>
		<div class="flex flex-row gap-6 w-full h-full">
			<img
				class="aspect-square w-20 lg:w-24 rounded-lg object-cover shadow-md"
				:src="props.cartItem.src"
				alt=""
			/>
			<div class="flex flex-col justify-center">
				<p class="text-k-black font-bold text-lg lg:text-xl">
					{{ props.cartItem.header }}
				</p>
				<p class="text-k-black opacity-80 font-bold text-sm lg:text-md">
					$ {{ props.cartItem.price }}
				</p>
			</div>
		</div>
		<buttonCount
			:item-count="props.itemCount"
			@increase-cart="cartStore.addToCart(cartItem)"
			@decrease-cart="cartStore.removeFromCart(cartItem)"
		/>
	</div>
</template>
