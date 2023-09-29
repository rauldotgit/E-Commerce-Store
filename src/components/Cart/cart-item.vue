<script setup lang="ts">
import ButtonCount from '../Buttons/button-count.vue'
import { product } from '../../data/product-types.ts'
import { useCartStore } from '../../pinia/cartStore.ts'

const cartStore = useCartStore()

const props = defineProps<{
	cartItem: product
	itemCount: number
}>()
</script>

<template>
	<div
		v-if="itemCount > 0"
		class="flex w-full flex-row items-center justify-between gap-12 px-6 lg:px-10"
	>
		<div class="flex h-full w-full flex-row gap-6">
			<img
				class="aspect-square w-20 rounded-lg object-cover shadow-md lg:w-24"
				:src="props.cartItem.src"
				alt=""
			/>
			<div class="flex flex-col justify-center">
				<p class="text-lg font-bold text-k-black lg:text-xl">
					{{ props.cartItem.header }}
				</p>
				<p class="lg:text-md text-sm font-bold text-k-black opacity-80">
					$ {{ props.cartItem.price }}
				</p>
			</div>
		</div>
		<ButtonCount
			:item-count="props.itemCount"
			@increase-cart="cartStore.addToCart(cartItem)"
			@decrease-cart="cartStore.removeFromCart(cartItem)"
		/>
	</div>
</template>
