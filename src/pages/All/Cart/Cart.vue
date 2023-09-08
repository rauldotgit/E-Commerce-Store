<script setup lang="ts">
import buttonSolid from '../Buttons/button-solid.vue'
import cartItem from './Item.vue'
import { useCartStore } from '../../../pinia/cartStore.ts'

const cartStore = useCartStore()
</script>

<template>
	<Transition>
		<div
			class="fixed flex flex-col items-center lg:items-start lg:block w-full h-screen backdrop-blur-sm z-50"
		>
			<div
				@click="$emit('cartOff')"
				class="absolute lg:relative h-screen w-full bg-black opacity-40"
			></div>
			<div
				class="relative mt-16 lg:mt-0 lg:absolute w-11/12 lg:w-1/3 max-w-[32rem] lg:top-10 lg:right-10 rounded-lg flex flex-col items-center max-h-[80%] h-full bg-white opacity-100"
			>
				<button
					@click="$emit('cartOff')"
					class="px-6 lg:px-10 mb-4 mt-8 text-black self-start font-semibold cursor-pointer opacity-60"
				>
					Close
				</button>
				<div
					class="px-6 lg:px-10 mb-8 flex flex-row justify-between items-end w-full"
				>
					<p class="font-Manrope text-k-black font-bold text-2xl lg:text-3xl">
						CART ({{ cartStore.cartLength }})
					</p>
					<p
						@click="cartStore.clearCart()"
						class="transition text-k-dark-grey underline opacity-70 cursor-pointer hover:opacity-100 active:translate-y-0.5"
					>
						Delete All
					</p>
				</div>
				<div
					v-if="cartStore.isEmpty"
					class="text-black opacity-60 text-lg lg:text-xl"
				>
					No items in cart.
				</div>
				<div class="mb-10 w-full h-full flex flex-col gap-5 overflow-y-scroll">
					<cartItem
						v-for="(value, _) in cartStore.cart"
						:cart-item="value.product"
						:item-count="value.amount"
					/>
				</div>
				<div class="px-6 lg:px-10 mb-6 flex flex-row justify-between w-full">
					<p class="text-black opacity-50 text-xl lg:text-2xl font-semibold">
						TOTAL
					</p>
					<p class="text-black text-2xl font-bold">
						${{ cartStore.cartValue }}
					</p>
				</div>
				<buttonSolid
					v-if="!cartStore.isEmpty"
					to="/checkout"
					class="mb-10"
					add="font-bold"
					color="light"
					content="Checkout"
					@click="cartStore.cartOff"
				/>
			</div>
		</div>
	</Transition>
</template>
