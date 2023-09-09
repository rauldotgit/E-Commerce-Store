<script setup lang="ts">
import cart from '/icons/cart-icon.svg'
import Cart from './Cart/Cart.vue'
import { computed, ref } from 'vue'
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

const hamburgerState = ref('hide')

function showHamburger(): void {
	hamburgerState.value = 'show'
}

function hideHamburger(): void {
	hamburgerState.value = 'hide'
}
</script>

<template>
	<div
		id="navi"
		class="flex flex-col items-center main-container w-screen h-full"
		:class="style"
		data-test="nav-desktop"
	>
		<div
			v-once
			class="relative flex flex-row items-center justify-between w-4/5 max-w-6xl py-6"
			:class="props.color === 'transparent' && 'border-b border-zinc-500'"
		>
			<button
				id="hamburger"
				class="select-none lg:hidden"
				@click="showHamburger()"
				data-test="hamburger"
			>
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
				data-test="nav-logo"
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
			<div class="cursor-pointer h-5 relative" @click="cartStore.cartOn()" data-test="cart">
				<img
					class="hover:opacity-50 active:translate-y-0.5 h-full"
					:src="cart"
					alt=""
				/>
				<Transition>
					<div
						v-if="cartStore.cartLength !== 0"
						class="bg-red-600 transition-all duration-300 rounded-full h-4 w-4 text-xs font-black flex flex-col justify-center items-center absolute -right-2 top-3"
					>
						{{ cartStore.cartLength }}
					</div>
				</Transition>
			</div>
		</div>
		<Cart
			v-show="cartStore.showCart"
		/>
		<transition>
			<nav
				class="absolute flex flex-row justify-around w-screen gap-2 p-9 tracking-widest text-xs font-semibold bg-black"
				v-if="hamburgerState === 'show'"
				:class="$route.path === '/' ? 'bg-k-black' : 'bg-black'"
				data-test="nav-mobile"
			>
				<button
					class="transition duration-300 active:translate-y-0.5 hover:text-k-main uppercase text-white"
					@click="hideHamburger()"
					data-test="close-hamburger"
				>
					Close
				</button>
				<router-link
					to="/"
					class="transition duration-300 active:translate-y-0.5 hover:text-k-main uppercase text-white"
					:class="$route.path === '/' && 'hidden'"
					@click="hideHamburger()"
					>Home
				</router-link>
				<router-link
					to="/keyboards"
					class="transition duration-300 active:translate-y-0.5 hover:text-k-main uppercase text-white"
					:class="$route.path === '/keyboards' && 'hidden'"
					@click="hideHamburger()"
					>Keyboards
				</router-link>
				<router-link
					to="/keycaps"
					class="transition duration-300 active:translate-y-0.5 hover:text-k-main uppercase text-white"
					:class="$route.path === '/keycaps' && 'hidden'"
					@click="hideHamburger()"
					>Keycaps
				</router-link>
				<router-link
					to="/deskmats"
					class="transition duration-300 active:translate-y-0.5 hover:text-k-main uppercase text-white"
					:class="$route.path === '/deskmats' && 'hidden'"
					@click="hideHamburger()"
					>Deskmats
				</router-link>
			</nav>
		</transition>
	</div>
</template>
