<script setup lang="ts">
import Navigation from '../All/Navigation.vue'
import Categories from '../All/Categories.vue'
import Info from '../All/Info.vue'
import Footer from '../All/Footer.vue'
import Showbox from './Components/Showbox.vue'
import { getProductsOfType } from '../../data/products.ts'
import { computed } from 'vue'

const props = defineProps<{
	category: string
}>()

const products = computed(() => getProductsOfType(props.category))
</script>

<template>
	<div
		class="flex flex-col items-center main-container w-screen h-full bg-white"
	>
		<header class="flex flex-col w-full items-center bg-black lg:rounded-b-lg">
			<Navigation />
			<div
				class="flex flex-col justify-center items-center w-4/5 my-10 lg:my-20 max-w-6xl"
			>
				<h1
					class="font-semibold uppercase text-white text-4xl tracking-wider antialiased"
				>
					{{ props.category }}
				</h1>
			</div>
		</header>
		<Showbox
			v-for="product in products"
			:item="product"
			:category="props.category"
			:data-test="`showbox-${product.category}-${product.id}`"
		/>
		<Categories />
		<Info />
		<Footer />
	</div>
</template>
