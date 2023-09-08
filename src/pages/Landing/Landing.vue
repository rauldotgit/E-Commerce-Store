<script setup lang="ts">
import Navigation from '../All/Navigation.vue'
import buttonSolid from '../All/Buttons/button-solid.vue'
import Categories from '../All/Categories.vue'
import Footer from '../All/Footer.vue'

import Info from '../All/Info.vue'
import Grid from './Components/Grid.vue'
import mxup from '/products/keyboards/up-nobg.webp'

import { useCartStore } from '../../pinia/cartStore'
const cartStore = useCartStore()
</script>

<template>
	<div
		class="flex flex-col items-center main-container w-screen h-full bg-white"
		:class="cartStore.isCartShown && 'touch-none'"
	>
		<header class="flex flex-col w-full items-center bg-k-black rounded-b-md">
			<Navigation class="z-20" />
			<div
				class="relative flex flex-col text-center lg:text-start lg:grid lg:grid-cols-2 w-4/5 mt-20 max-w-6xl"
			>
				<div
					class="z-10 relative flex flex-col items-center lg:items-start justify-center pb-6"
				>
					<p class="uppercase tracking-broad lg:text-md text-sm font-light">
						new product
					</p>
					<h1
						class="relative uppercase text-5xl lg:text-6xl text-white mt-4 font-semibold"
					>
						xx99 mark II <br />
						Keyboard
					</h1>
					<p class="mt-5 mb-10 lg:opacity-90">
						Enjoy a natural, light typing experience and exceptional
						<br class="hidden lg:inline" />
						build quality made for the passionate coding
						<br class="hidden lg:inline" />
						enthusiast.
					</p>
					<buttonSolid
						:to="{ name: 'keyboards', params: { id: 2 } }"
						content="see product"
						color="light"
						add="font-bold mb-20"
					/>
				</div>
				<div
					class="z-0 opacity-30 lg:opacity-100 lg:z-10 aspect-auto bottom-0 absolute lg:relative overflow-hidden"
				>
					<img
						class="relative scale-[175%] lg:scale-150 top-12"
						:src="mxup"
						alt=""
					/>
				</div>
			</div>
		</header>
		<Categories />
		<Grid />
		<Info />
		<Footer />
	</div>
</template>
