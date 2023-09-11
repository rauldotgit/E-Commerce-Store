<script setup lang="ts">
import Navigation from '../All/navigation-global.vue'
import buttonSolid from '../All/Buttons/button-solid.vue'
import Categories from '../All/category-boxes.vue'
import Footer from '../All/footer-global.vue'

import Info from '../All/info-section.vue'
import Grid from './Components/landing-grid.vue'
import mxup from '/products/keyboards/up-nobg.webp'
</script>

<template>
	<div
		class="main-container flex h-full w-screen flex-col items-center bg-white"
	>
		<header class="flex w-full flex-col items-center rounded-b-md bg-k-black">
			<Navigation class="z-20" />
			<div
				class="relative mt-20 flex w-4/5 max-w-6xl flex-col text-center transition-transform duration-200 lg:grid lg:grid-cols-2 lg:text-start"
			>
				<div
					class="relative z-10 flex flex-col items-center justify-center pb-6 lg:items-start"
				>
					<p class="lg:text-md text-sm font-light uppercase tracking-broad">
						new product
					</p>
					<h1
						class="relative mt-4 text-5xl font-semibold uppercase text-white lg:text-6xl"
					>
						xx99 mark II <br />
						Keyboard
					</h1>
					<p class="mb-10 mt-5 lg:opacity-90">
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
					class="absolute bottom-0 z-0 aspect-auto overflow-hidden opacity-30 lg:relative lg:z-10 lg:opacity-100"
				>
					<img
						class="relative top-12 scale-[175%] lg:scale-150"
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
