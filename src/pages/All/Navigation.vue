<script setup lang="ts">
import cart from '/icons/cart-icon.svg'
import Cart from './Cart/Cart.vue'
import { computed } from 'vue'
import { useCartStore } from '../../pinia/cartStore.ts'

interface Props {
	color?: 'black' | 'transparent'
}

const props = withDefaults(defineProps<Props>(), {
	color: 'transparent',
})

const cartStore = useCartStore()

let style = computed(() => {
	return 'bg-' + props.color
})
</script>

<template>
	<div
		id="navi"
		class="flex flex-col items-center main-container w-screen h-full"
		:class="style"
	>
		<div
			v-once
			class="relative flex flex-row items-center justify-between w-4/5 max-w-6xl py-6"
			:class="props.color === 'transparent' && 'border-b border-zinc-500'"
		>
			<button id="hamburger" class="select-none lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					class="w-8 h-8"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
			<router-link
				to="/"
				class="transition duration-300 hover:text-k-main hover:scale-110 font-extrabold text-3xl tracking-tight antialiased"
			>
				KIIIBS
			</router-link>

			<nav class="lg:flex lg:gap-8 tracking-widest hidden">
				<router-link
					to="/"
					class="transition duration-300 active:translate-y-0.5 hover:text-k-main uppercase text-white"
					>Home
				</router-link>
				<router-link
					to="/keyboards"
					class="transition duration-300 active:translate-y-0.5 hover:text-k-main uppercase text-white"
					>Keyboards
				</router-link>
				<router-link
					to="/keycaps"
					class="transition duration-300 active:translate-y-0.5 hover:text-k-main uppercase text-white"
					>Keycaps
				</router-link>
				<router-link
					to="/deskmats"
					class="transition duration-300 active:translate-y-0.5 hover:text-k-main uppercase text-white"
					>Deskmats
				</router-link>
			</nav>
			<div @click="cartStore.cartOn" class="cursor-pointer h-5 relative">
				<img
					class="hover:opacity-50 active:translate-y-0.5 h-full"
					:src="cart"
					alt=""
				/>
				<Transition>
					<div
						v-if="!cartStore.isEmpty"
						class="bg-red-600 transition-all duration-300 rounded-full h-4 w-4 text-xs font-black flex flex-col justify-center items-center absolute -right-2 top-3"
					>
						{{ cartStore.cartLength }}
					</div>
				</Transition>
			</div>
		</div>
		<Cart
			v-show="cartStore.showCart"
			@cart-on="cartStore.cartOn"
			@cart-off="cartStore.cartOff"
		/>
	</div>
</template>
