<script setup lang="ts">
import cartIcon from '/icons/cart-icon.svg'
import Cart from './Cart/cart-modal.vue'
import { computed, ref } from 'vue'
import { useCartStore } from '../pinia/cartStore.ts'

interface Props {
	color?: 'black' | 'transparent' | 'k-black'
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
	<header
		id="navi"
		class="main-container flex h-full w-screen flex-col items-center"
		:class="style"
		data-test="nav-desktop"
	>
		<div
			class="relative flex w-4/5 max-w-6xl flex-row items-center justify-between border-b border-zinc-500 py-6 md:w-11/12 lg:w-4/5"
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
					class="h-8 w-8"
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
				class="text-3xl font-extrabold tracking-tight antialiased transition duration-300 hover:scale-110 hover:text-k-main"
				data-test="nav-logo"
			>
				KIIIBS
			</router-link>

			<nav class="hidden tracking-widest lg:flex lg:gap-8">
				<router-link
					to="/"
					class="uppercase text-white transition duration-300 hover:text-k-main active:translate-y-0.5"
					data-test="nav-home"
					>Home
				</router-link>
				<router-link
					to="/keyboards"
					class="uppercase text-white transition duration-300 hover:text-k-main active:translate-y-0.5"
					data-test="nav-keyboards"
					>Keyboards
				</router-link>
				<router-link
					to="/keycaps"
					class="uppercase text-white transition duration-300 hover:text-k-main active:translate-y-0.5"
					data-test="nav-keycaps"
					>Keycaps
				</router-link>
				<router-link
					to="/deskmats"
					class="uppercase text-white transition duration-300 hover:text-k-main active:translate-y-0.5"
					data-test="nav-deskmats"
					>Deskmats
				</router-link>
			</nav>
			<div
				class="relative h-5 cursor-pointer"
				@click="cartStore.cartOn()"
				data-test="cart-button"
			>
				<img
					class="h-full hover:opacity-50 active:translate-y-0.5"
					:src="cartIcon"
					alt=""
				/>
				<Transition>
					<div
						v-show="cartStore.cartLength !== 0"
						class="absolute -right-2 top-3 flex h-4 w-4 flex-col items-center justify-center rounded-full bg-red-600 text-xs font-black transition-all duration-300"
						data-test="cart-bubble"
					>
						{{ cartStore.cartLength }}
					</div>
				</Transition>
			</div>
		</div>
		<Cart v-show="cartStore.showCart" />
		<transition>
			<nav
				class="absolute flex w-screen flex-row justify-around gap-2 bg-black p-9 text-xs font-semibold tracking-widest"
				v-if="hamburgerState === 'show'"
				:class="$route.path === '/' ? 'bg-k-black' : 'bg-black'"
				data-test="nav-mobile"
			>
				<button
					class="lg:text-md uppercase text-white transition duration-300 hover:text-k-main active:translate-y-0.5 md:text-lg"
					@click="hideHamburger()"
					data-test="close-hamburger"
				>
					Close
				</button>
				<router-link
					to="/"
					class="lg:text-md uppercase text-white transition duration-300 hover:text-k-main active:translate-y-0.5 md:text-lg"
					:class="$route.path === '/' && 'hidden'"
					@click="hideHamburger()"
					data-test="mobile-nav-home"
					>Home
				</router-link>
				<router-link
					to="/keyboards"
					class="lg:text-md uppercase text-white transition duration-300 hover:text-k-main active:translate-y-0.5 md:text-lg"
					:class="$route.path === '/keyboards' && 'hidden'"
					@click="hideHamburger()"
					data-test="mobile-nav-keyboards"
					>Keyboards
				</router-link>
				<router-link
					to="/keycaps"
					class="lg:text-md uppercase text-white transition duration-300 hover:text-k-main active:translate-y-0.5 md:text-lg"
					:class="$route.path === '/keycaps' && 'hidden'"
					@click="hideHamburger()"
					data-test="mobile-nav-keycaps"
					>Keycaps
				</router-link>
				<router-link
					to="/deskmats"
					class="lg:text-md uppercase text-white transition duration-300 hover:text-k-main active:translate-y-0.5 md:text-lg"
					:class="$route.path === '/deskmats' && 'hidden'"
					@click="hideHamburger()"
					data-test="mobile-nav-deskmats"
					>Deskmats
				</router-link>
			</nav>
		</transition>
	</header>
</template>
