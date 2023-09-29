<script setup lang="ts">
import ButtonSolid from '../Buttons/button-solid.vue'
import CartItem from './cart-item.vue'
import { useCartStore } from '../../pinia/cartStore.ts'

const cartStore = useCartStore()
</script>

<template>
	<Transition>
		<div
			class="fixed z-50 flex h-screen w-full flex-col items-center backdrop-blur-sm lg:block lg:items-start"
			data-test="cart-modal"
		>
			<div
				@click="cartStore.cartOff()"
				class="absolute h-screen w-full bg-black opacity-40 lg:relative"
				data-test="cart-background"
			></div>
			<div
				class="relative mt-16 flex h-full max-h-[80%] w-11/12 max-w-[32rem] flex-col items-center rounded-lg bg-white opacity-100 lg:absolute lg:right-10 lg:top-10 lg:mt-0 lg:w-1/3"
			>
				<button
					@click="cartStore.cartOff()"
					class="mb-4 mt-8 cursor-pointer self-start px-6 font-semibold text-black opacity-60 lg:px-10"
					data-test="cart-close-button"
				>
					Close
				</button>
				<div
					class="mb-8 flex w-full flex-row items-end justify-between px-6 lg:px-10"
				>
					<p
						class="font-Manrope text-2xl font-bold text-k-black lg:text-3xl"
						data-test="cart-header"
					>
						CART ({{ cartStore.cartLength }})
					</p>
					<p
						@click="cartStore.clearCart()"
						class="cursor-pointer text-k-dark-grey underline opacity-70 transition hover:opacity-100 active:translate-y-0.5"
						data-test="cart-delete-all"
					>
						Delete All
					</p>
				</div>
				<div
					v-if="cartStore.cartLength === 0"
					class="text-lg text-black opacity-60 lg:text-xl"
					data-test="cart-empty-message"
				>
					No items in cart.
				</div>
				<div
					class="mb-10 flex h-full w-full flex-col gap-5 overflow-y-scroll"
					data-test="cart-item-container"
				>
					<CartItem
						v-for="(value, _, index) in cartStore.cart"
						:cart-item="value.product"
						:item-count="value.amount"
						:key="index"
					/>
				</div>
				<div
					class="mb-6 flex w-full flex-row justify-between px-6 lg:px-10"
					data-test="cart-total-section"
				>
					<p class="text-xl font-semibold text-black opacity-50 lg:text-2xl">
						TOTAL
					</p>
					<p class="text-2xl font-bold text-black">
						${{ cartStore.cartValue }}
					</p>
				</div>
				<ButtonSolid
					v-if="!(cartStore.cartLength === 0)"
					to="/checkout"
					class="mb-10"
					add="font-bold"
					color="light"
					content="Checkout"
					@click="cartStore.cartOff"
					data-test="cart-checkout-button"
				/>
			</div>
		</div>
	</Transition>
</template>
